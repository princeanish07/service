<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Service;
use App\Models\Category;

class Subcategory extends Model
{
    // protected $table='subcategories';
    use HasFactory;
    public $fillable = ['name', 'category_id', 'description', 'keywords'];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function services()
    {
        return $this->hasMany(Service::class);
    }
}
