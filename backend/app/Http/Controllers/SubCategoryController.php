<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Subcategory;
use Illuminate\Http\Request;

class SubCategoryController extends Controller
{
    public function create(Request $request, $id)
    {
        $validate = $request->validate([
            'name' => ['required', 'unique:subcategories,name'],
            'keywords' => ['required'],
        ]);
        $collection = collect($validate)->put('category_id', $id)->all();

        Subcategory::create($collection);
        return response()->json([
            'message' => 'successfulluy create sub category',
        ]);
    }
    public function getAll()
    {
        $subcategories = Subcategory::all(['id', 'name', 'category_id']);
        return response()->json($subcategories);
    }
    public function getById($id)
    {
        $subcategories = Category::find($id)->subcategories()->get(['id', 'name', 'category_id']);
        return response()->json($subcategories);
    }
}
