<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CatserviceController;
use App\Http\Controllers\CatserviceProviderController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\QualificationController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SubCategoryController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::prefix('user')->controller(UserController::class)->group(function () {
    Route::post('/create', 'create');
    Route::post('/login', 'login');
    Route::middleware('auth:sanctum')->get('/get', [UserController::class, 'get']);
    Route::get('/view', 'viewAll');
    Route::get('/view/{user}', 'viewById');
    Route::put('/update/{user}', 'update');
    Route::delete('/delete/{user}', 'delete');
});
Route::prefix('profile')->controller(ProfileController::class)->group(function () {

    // Route::middleware('auth:sanctum')->get('/get',[UserController::class,'get']);

    Route::get('/view/{id}', 'viewProfile');
    Route::post('/edit/{id}', 'createOrUpdate');
    Route::delete('/delete/{profile}', 'delete');
});

Route::prefix('qualification')->controller(QualificationController::class)->group(function () {
    Route::post('/create/{id}', 'create');
    Route::get('/view/{qualification}', 'view');
    Route::put('/update/{qualification}', 'update');
    Route::delete('/dele{te/{qualification}', 'delete');
});
Route::prefix('category')->controller(CategoryController::class)->group(function () {
    Route::post('create', 'category');
    Route::put('update/{id}', 'updateCategory');
    Route::get('view', 'viewCategory');
    Route::get('search', 'search');
    Route::get('services/{id}', 'getCategoryById');
    Route::get('service/{id}', 'getServices');
    Route::get('All/{id}', 'getAllCategory');
});
Route::prefix('subcategory')->controller(SubCategoryController::class)->group(function () {
    Route::post('create/{id}', 'create');
    Route::get('viewAll', 'getAll');
    Route::get('view/{id}', 'getById');
});

Route::prefix('services')->controller(ServiceController::class)->group(function () {
    Route::post('create', 'create');
    Route::get('show/{service}', 'GetById');
    Route::get('all', 'GetAll');
    Route::put('update/{service}', 'update');
    Route::delete('delete/{service}', 'delete');
    Route::get('other/{id}', 'otherServices');
});

Route::prefix('services')->controller(CatserviceProviderController::class)->group(function () {
    Route::post('create/{id}', 'createServices');
    Route::post('edit/{providerId}', 'editProviderService');
    Route::get('providers', 'getAll');
    Route::get('provider/{providerId}', 'getProviderServices');
    Route::get('provider/{providerId}/category/{categoryId}', 'providerServiceByCategory');
    Route::get('{serviceId}/provider/{providerId}', 'providerServiceById');
    Route::delete('{serviceId}/delete/{providerId}', 'deleteService');

    Route::get('provider/details/{id}', 'getProviderDetails');
    Route::get('category/{id}', 'getByCategory');
    Route::put('update/{}service}', 'update');
    Route::delete('delete/{service}', 'delete');
    Route::get('provider/category/{providerId}', 'getProviderCategory');
});
