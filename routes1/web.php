<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SearchController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::view('/{any}', 'home')
    ->middleware(['auth'])
    ->where('any', '.*');

 
//Route::get('search', [SearchController::class, 'index']);
 
//Route::get('res-search', [SearchController::class, 'search']);

//realtime_search_pusher/routes/web.php
Route::get('/', function () {
    return view('search');
});