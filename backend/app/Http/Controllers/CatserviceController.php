<?php

namespace App\Http\Controllers;

use App\Http\Requests\catServiceRequest;
use App\Http\Resources\CatServiceResource;
use App\Models\Category;
use App\Models\Catservice;
use Illuminate\Http\Request;

class CatserviceController extends Controller
{
  public function create(catServiceRequest $request)
  {
    $validate = $request->validated();
    
    // return dd($validate);
    // Here to validate the object elements of an array we use *.name
    // $validate['category_id']=$id;
    foreach($validate as $item){
      Catservice::create($item);
    }

    return response()->json([
      'message' => 'successfully created'
    ], 200);
  }
  public function GetById(Catservice $service)
  {
    return response()->json(
      collect($service)->except('created_at', 'updated_at'),
      200
    );
  }

  public function GetAll(){
    $service=Catservice::all();
    // return dd($service);
    return  CatServiceResource::collection($service);
  }

  public function update(catServiceRequest $request, Catservice $service)
  {
    $validate = $request->validated();
    $service->fill($validate)->save();
    return response()->json([
      'message' => 'successfully updated'
    ], 200);
  }
  public function delete(Catservice $service)
  {
    $service->delete();
    return response()->json([
      'message' => 'deleted successfully'
    ], 200);
  }
  public function otherServices($id)
  {
    $item = Category::find($id)->services()->select('id', 'name')->get();
    return response()->json($item);
  }
}
