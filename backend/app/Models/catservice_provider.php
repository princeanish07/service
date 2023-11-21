<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class catservice_provider extends Pivot
{
    use HasFactory;
    public $fillable=['description,days,time'];
    protected $casts=[
        'days'=>'array',
        'time'=>'array',
    ];
}
