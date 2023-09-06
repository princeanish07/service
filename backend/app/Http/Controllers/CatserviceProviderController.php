<?php

namespace App\Http\Controllers;

use App\Http\Requests\catservice_providerRequest;
use App\Http\Resources\ProviderResource;
use App\Http\Resources\ServiceResource;
use App\Models\Category;
use App\Models\Provider;
use Illuminate\Http\Request;
use App\Models\User;

class CatserviceProviderController extends Controller
{
    public function createServices(catservice_providerRequest $request, $providersId)
    {

        $providers = User::find($providersId);
        $data = $request->validated();
        $collection = [];
        foreach ($data['service'] as $items) {
            $collection[$items['id']] = [
                'availabe_date' => $items['availabe_date'],
                'period' => $items['period'],
                'duration' => $items['duration'],
                'price' => $items['price'],
                'location' => json_encode($items['location']),
                'status' => $items['status'],
            ];
        }
        $providers->catservices()->syncWithoutDetaching($collection);


        return response()->json([
            'message' => 'successfully added'
        ]);
    }

    public function getAll()
    {
          
        $services = User::select('id','first_name','last_name','phone_number', 'email')->has('catservices')->with(['catservices:id,name,category_id', 'catservices.category:id,name'])
        ->get();
        return ProviderResource::collection($services);

    }

    public function getProviderServices($providersId)
    {
        $services = User::select('id','name','email')->with(['catservices:id,name,category_id', 'catservices.category:id,name'])
        ->find($providersId);
        return ProviderResource::collection($services);
    }
}
