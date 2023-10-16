<?php

namespace App\Http\Controllers;

use App\Http\Requests\profileRequest;
use App\Http\Resources\ProfileResource;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;


class ProfileController extends Controller
{
   


    public function viewProfile($id)
    {

      $profile= User::with('profile')->find($id);
        return  new ProfileResource($profile);
       
    }
    public function createOrUpdate(profileRequest $request, $id)
    {

        if($request->hasFile('photo')){
            $file=$request->file('photo');
            $extension= $file->getClientOriginalExtension();
           $name= time().'.'.$extension;
           $file->move('profile/image',$name);
           $path='profile/image/'.$name;
        }
        $user= User::find($id);
        $user->name=$request->input('name');
        $user->email=$request->input('email');
        $user->save();

        $user->profile()->updateOrCreate(
            ['user_id'=>$id],
            ['bio'=>$request->bio,
            'photo'=>$path || null, 
            'phone_number'=>$request->phone_number,
            'address'=>[
                'district'=>$request->district,
                'muncipility'=>$request->muncipility,
                'ward'=>$request->ward,
                'chowk'=>$request->chowk
            ]
            ]
        );
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
