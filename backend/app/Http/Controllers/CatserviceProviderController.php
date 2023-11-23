<?php

namespace App\Http\Controllers;

use App\Http\Requests\catservice_providerRequest;
use App\Http\Resources\ProviderDetailsResource;
use App\Http\Resources\ProviderResource;
use App\Http\Resources\ServiceResource;
use App\Models\Category;
use App\Models\Catservice;
use App\Models\Provider;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Contracts\Database\Eloquent\Builder;

use function PHPSTORM_META\map;
use function PHPUnit\Framework\isEmpty;

class CatserviceProviderController extends Controller
{
    public function createServices(catservice_providerRequest $request, $id)
    {

        $users = User::find($id);
        // return dd($service);

        // This code is used when we setup multiple services
        // $collection = [];
        // foreach ($data['service'] as $request) {
        //     $collection[$request['id']] = [
        //         'availabe_date' => $request['availabe_date'],
        //         'period' => $request['period'],
        //         'duration' => $request['duration'],
        //         'price' => $request['price'],
        //         'location' => json_encode($request['location']),
        //         'status' => $request['status'],
        //     ];
        // }

        $path = null;

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $name = time() . '.' . $extension;
            $file->move('service/image', $name);
            $path = 'service/image/' . $name;
        }
        $users->services()->attach($request['cid'], [
            'description' => $request['description'],
            'days' => $request['days'],
            'time' => $request['time'],
            'charge' =>$request['charge'],
            'offers' => $request['offers'],
            'experience' => $request['experience'],
            'image' => $path,
            'address' => $request['address'],
        ]);


        return response()->json([
            'message' => 'successfully added'
        ]);
    }
   

    public function getAll()
    {

        $requests = User::has('services')->with(['services', 'profile'])
            ->get();
        return ProviderResource::collection($requests);
    }


    public function getByCategory($id)
    {
        $services = User::whereHas('services', function ($query) use ($id) {
            $query->where('category_id', $id);
        })->with(['services', 'profile'])->get();
        // $services = Category::has('services')->with('services.users.profile')->find($id); uses for nested relationship 
        return ProviderResource::collection(($services));
    }


    public function getProviderServices($providersId)
    {
<<<<<<< HEAD
        $services = User::find($providersId)->services()->withPivot('description', 'days', 'time', 'charge', 'offers', 'experience', 'image', 'address')->get();
=======
        $services = User::find($providersId)->services()->get();
>>>>>>> develop

        // return $services;
        return  ServiceResource::collection($services);
    }

<<<<<<< HEAD
    public function providerServiceByCategory($providerId,$categoryId){
        $services = User::find($providerId)->services()->withPivot('description', 'days', 'time', 'charge', 'offers', 'experience', 'image', 'address')
        ->where('category_id',$categoryId)
        ->get();
=======
    public function providerServiceByCategory($providerId, $categoryId)
    {
        $services = User::find($providerId)->services()
            ->where('category_id', $categoryId)
            ->get();
>>>>>>> develop

        return  ServiceResource::collection($services);
    }
    public function providerServiceById( $serviceId,$providerId)
    {

       
        $services = User::find($providerId)->services()
           ->find($serviceId);
            if($services){

                return  new ServiceResource($services);
            }
            $catservices=Catservice::select('id','name')->find($serviceId)->toArray();
            $catservices['pivot']=null;
            return response()->json(
                $catservices
            );
    }

    public function editProviderService(Request $request,$providerId){
        $users = User::find($providerId);
        
        $path = null;

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $name = time() . '.' . $extension;
            $file->move('service/image', $name);
            $path = 'service/image/' . $name;
        }
        $users->services()->updateExistingPivot($request['cid'], [
            'description' => $request['description'],
            'days' => $request['days'],
            'time' => $request['time'],
            'charge' =>$request['charge'],
            'offers' => $request['offers'],
            'experience' => $request['experience'],
            'image' => $path,
            'address' => $request['address'],
        ]);


        return response()->json([
            'message' => 'successfully updated'
        ]);
        return $users;
    }

    public function deleteService($serviceId,$providerId){
        $user = User::find($providerId);
        $user->services()->detach($serviceId);
        return response()->json([
            'message' => 'successfully deleted'

        ]);

    }


    public function getProviderCategory($providersId)
    {


        $user = User::find($providersId);

        $categories = Category::with(['category:id,name,parent_id', 'category' => function ($query) use ($user) {
            $query->whereHas('services', function ($useQuery) use ($user) {
                $useQuery->whereIn('id', $user->services->pluck('id'));
            });
        }])
            ->where(function ($query) use ($user) {
                $query->where(function ($subquery) use ($user) {
                    // Check if the category has subcategories
                    $subquery->whereHas('category');
                })
                    ->orWhere(function ($subquery) use ($user) {
                        // Check for indirect relationship with user through service model only if no subcategories
                        $subquery->whereDoesntHave('category')->whereHas('services', function ($userQuery) use ($user) {
                            $userQuery->whereIn('id', $user->services->pluck('id'));
                        });
                    });
            })->where('parent_id', null)
            ->get(['id', 'name', 'parent_id']);




        return $categories;
    }

    public function getProviderDetails($id){
        $details = User::has('services')->with(['profile','services'])->find($id);

            return new ProviderDetailsResource($details);
    }
}
