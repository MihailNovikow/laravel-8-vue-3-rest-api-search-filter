<?php

namespace App\Http\Controllers;

use App\Filters\ProductFilter;
use App\Models\Product;

class ProductController extends Controller
{
    public function index(ProductFilter $filters)
    {
        return Product::filter($filters)->get();
    }
}