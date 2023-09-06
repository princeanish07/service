<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class catservice_provider extends Model
{
    use HasFactory;
    public $fillable=['availabe_data','period','duration','price','location','refund_Policy'];
    public $casts=[
        'location'=>'array'
    ];
}
