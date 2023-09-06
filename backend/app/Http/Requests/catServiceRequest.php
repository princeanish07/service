<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class catServiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules()
    {
        $action=$this->route()->getActionMethod();
        switch($action){
            case 'create':
                return [
                    'name'=>'required',
                    'description'=>'sometimes',
                    'image'=>'sometimes'
                ];
                case 'update':
                    return [
                        'name'=>'required',
                        'description'=>'sometimes',
                        'image'=>'sometimes'
                    ];
        }
    }
}
