<?php

namespace App\Http\Controllers;

use App\Http\Requests\serviceRequest;
use App\Http\Resources\CatServiceResource;
use App\Http\Resources\ServiceResource;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\Service;

class ServiceController extends Controller
{
      public function create(serviceRequest $request, $id)
    {
      $validate = $request->validated();
      
      // return dd($validate);
      // Here to validate the object elements of an array we use *.name
      // $validate['category_id']=$id;
      $collection=collect($validate)->put('subcategory_id',$id)->toArray();
        Service::create($collection);
  
      return response()->json([
        'message' => 'successfully created'
      ], 200);
    }
    public function GetById(Service $service)
    {
      return response()->json(
        collect($service)->except('created_at', 'updated_at'),
        200
      );
    }
  
    public function GetAll(){
      $service=Service::all();
      // return dd($service);
      return  CatServiceResource::collection($service);
    }
  
    public function update(serviceRequest $request, Service $service)
    {
      $validate = $request->validated();
      $service->fill($validate)->save();
      return response()->json([
        'message' => 'successfully updated'
      ], 200);
    }
    public function delete(Service $service)
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
