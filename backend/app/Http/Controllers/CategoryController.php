<?php

namespace App\Http\Controllers;

use App\Http\Requests\categoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class CategoryController extends Controller
{
    public function category(Request $request)
    {
        $validate = $request->validate([
            'name' => ['required', 'unique:categories,name'],
            'description'=>'sometimes',
            'keywords'=>'required',
            'parent_id' => 'sometimes',
        ]);


        Category::create($validate);
        return response()->json([
            'message' => 'successfully create',
        ]);
    }
    public function subCategory(Request $request, $id)
    {
        $validate = $request->validate([
            'name' => ['required', 'unique:categories,name'],
        ]);
        $collection = collect($validate)->put('parent_id', $id)->all();

        Category::create($collection);
        return response()->json([
            'message' => 'successfulluy create sub category',
        ]);
    }
    public function viewCategory()
    {
        $value = Category::with('category:id,name,parent_id')->where('parent_id', null)->get(['id', 'name']);
        return response()->json($value);
    }
    public function updateCategory(Request $req, $id){
        $validate = $req->validate([
            'name' => ['required', 'unique:categories,name'],
            'description'=>'sometimes',
            'keywords'=>'required',
        ]);
        $category= Category::find($id)->first();
        $category->fill($validate)->save();
        return response()->json([
            'message'=>'successfully updated'
          ],200);

    }

    public function getCategoryById($id)
    {

        $services = Category::find($id)->services;
        return response()->json([
            'services' => $services
        ]);
    }
    public function search(Request $request)
    {
        $category = $request->input('name');
        $items = Category::select('name', 'description', 'image')->where('name', 'LIKE', '%' . $category . '%')->get();
        return response()->json([
            'category' => $items
        ]);
    }
    public function getServices($id){
        $item=Category::find($id)->services()->select('id','name')->get();
        return response()->json($item);
    }
    public function getAllCategory(){
        return 'hello';
    }
}
