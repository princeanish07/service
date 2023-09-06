<?php

namespace App\Http\Controllers;

use App\Models\Scope;
use Illuminate\Http\Request;

class ScopeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        
        $validate = $request->validate([
            'name' => ['required', 'unique:categories,name'],
            'parent_id' => 'sometimes',
        ]);


        Scope::create($validate);
        return response()->json([
            'message' => 'successfullu create',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Scope $scope)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Scope $scope)
    {
          
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Scope $scope)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Scope $scope)
    {
        //
    }
}
