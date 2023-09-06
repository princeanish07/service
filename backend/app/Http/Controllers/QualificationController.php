<?php

namespace App\Http\Controllers;

use App\Http\Requests\qualificationRequest;
use App\Models\Qualification;
use Illuminate\Http\Request;

class QualificationController extends Controller
{
    public function create(qualificationRequest $request,$id){
        $validate=$request->validated();
        $collection=collect($validate)->put('provider_id',$id)->all();
        // return $collection;
        Qualification::create($collection);
        return response()->json([
            'status'=>'200',
            'message'=>'Qualification Created Successfully',
        ],200);
    }

    public function view(Qualification $qualification){
  
        return response()->json([
            'status'=>'200',
            'dfata'=>collect($qualification)->except('provider_id'),
        ],200);
    }
    public function update(qualificationRequest $request, Qualification $qualification){
        $validate=$request->validated();
        $qualification->fill($validate)->save();
        return response()->json([
            'status'=>'200',
            'message'=>'Qualification updated  Successfully',
        ],200);
    }
    public function delete(Qualification $qualification){
        $qualification->delete();
        return response()->json([
            'status'=>'200',
            'message'=>'Removed  Successfully',
        ],200);
    }
}
