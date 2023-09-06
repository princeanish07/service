<?php

namespace App\Http\Controllers;

use App\Http\Requests\profileRequest;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;


class ProfileController extends Controller
{
    public function create(profileRequest $request,$id)
    {

        $validate=$request->validated();
        // return $validate;
        $file= $request->file('photo')->store('images');
        $validate['photo']= $file;



        $collection=collect($validate)->put('user_id',$id)->all();
        Profile::create($collection);
        return response()->json([
            'message' => 'Profie Creation successfully'

        ], 200);
    }


    public function viewById(Profile $profile)
    {

        return response()->json([
            'data' =>$profile,

        ], 200);
    }
    public function update(profileRequest $request, Profile $profile)
    {

        $validate = $request->validated();
        DB::transaction(function () use ($validate, $profile) {
            $profile->fill($validate)->save();
        });
        return response()->json([
            'message' => 'successfullly updated',
           
        ],200);
    }
    public function delete(Profile $profile)
    {
        $profile->delete();
        return response()->json([
            'message' => 'successfullly deleted',
            
        ],200);
    }
}
