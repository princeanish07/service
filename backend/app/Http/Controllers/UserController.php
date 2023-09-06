<?php

namespace App\Http\Controllers;

use App\Http\Requests\useAuthRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;


class UserController extends Controller
{
    public function create(useAuthRequest $request,$id)
    {   
        $validate=$request->validated();
        $collection=collect($validate)->put('role_id',$id)->all();
        $token = User::create($collection)->createToken('mytoken')->plainTextToken;
        return response()->json([
            'token' => $token,
            'message' => 'Register successfully'

        ], 200);
    }

    public function login(useAuthRequest $request,$role)
    {
        
      $validate= $request->validated();

      $user=User::where('email',$validate['email'])->where('role_id',$role)->first();

   
        if (!Hash::check($validate['password'], $user->password))
            throw ValidationException::withMessages([
                'password' => 'Wrong password',
            ]);
        $token = $user->createToken('mytoken')->plainTextToken;
        return response()->json([
            'message'=> 'Login successfully ',
            'id' => $user->id,
            'role'=>$user->role_id,
            'status' => 200,
            'token' => $token,
            'message' => 'successful'
        ]);
    }

    public function viewAll()
    {
        $users=User::all();
        $data=[];
        foreach($users as $user){
            $data[]=collect($user)->except('password');
        }
        return response()->json([
            'data' => $data,
            'status' => 200

        ], 200);  
    }
    public function viewById(User $user)
    {

        return response()->json([
            'data' => collect($user)->except('password'),
            'status' => 200

        ], 200);  
    }
    public function update(useAuthRequest $request,User  $user)
    {
        
        $validate = $request->validated();
        $token = null;
        $email = null;
        DB::transaction(function () use ($validate, $user, &$token, &$email) {
            $user->fill($validate)->save();
            $token = $user->createToken('mytoken')->plainTextToken;
            $email = $user->email;
        });
        return response()->json([
            'status' => 200,
            'message' => 'successfullly updated',
            'email' => $email,
            'token' => $token
        ]);
    }
    public function delete(User $user){
        $user->delete();
        return response()->json([
            'status'=>200,
            'message'=>'deleted succssfully'
        ],200);
    }
}
