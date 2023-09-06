<?php

namespace App\Http\Controllers;

use App\Http\Requests\providerRequest;
use App\Models\Provider;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class ServiceProviderController extends Controller
{
    public function create(providerRequest $request)
    {

        $token = Provider::create($request->validated())->createToken('mytoken')->plainTextToken;
        return response()->json([
            'token' => $token,
            'message' => 'Register successfully'

        ], 200);
    }

    public function login(providerRequest $request)
    {
        $validate = $request->validated();
        $user = Provider::where('email', $validate['email'])->first();

        if (!$user || !Hash::check($validate['password'], $user->password))
            throw ValidationException::withMessages([
                'password' => 'Wrong password',
            ]);
        $token = $user->createToken('mytoken')->plainTextToken;
        return response()->json([
            'message' => 'Login successfully ',
            'id' => $user->id,
            'status' => 200,
            'token' => $token,
            'message' => 'successful'
        ]);
    }


    public function edit(Provider $provider)
    {

        return response()->json([
            'data' => collect($provider)->except('password'),
            'status' => 200

        ], 200);
    }
    public function update(providerRequest $request, Provider $provider)
    {

        $validate = $request->validated();
        $token = null;
        $email = null;
        DB::transaction(function () use ($validate, $provider, &$token, &$email) {
            $provider->fill($validate)->save();
            $token = $provider->createToken('mytoken')->plainTextToken;
            $email = $provider->email;
        });
        return response()->json([
            'status' => 200,
            'message' => 'successfullly updated',
            'email' => $email,
            'token' => $token
        ]);
    }
    public function delete(Provider $provider)
    {
        $provider->delete();
        return response()->json([
            'status' => 200,
            'message' => 'successfullly deleted',
            
        ]);
    }
}
