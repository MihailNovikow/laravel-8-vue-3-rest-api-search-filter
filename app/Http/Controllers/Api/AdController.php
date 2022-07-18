<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdRequest;
use App\Http\Requests\FilterRequest;
use App\Http\Filters\AdFilter;
use App\Http\Filters\AbstractFilter;
use App\Http\Filters\FilterInterface;
use App\Http\Resources\AdResource;
use App\Models\Ad;
use Illuminate\Http\Request;

class AdController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index(FilterRequest $request)
    {
        $data = $request->validated();
        
        $filter = app()->make(AdFilter::class, ['queryParams' => array_filter($data)]);
        $ads = Ad::filter($filter)->paginate(10);      
        return AdResource::collection(Ad::filter($filter)->paginate(10));
    }
/*
    public function index()
    {
        
        //return view('ad.index', compact('ads'));
    }

    
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AdRequest $request)
    {
        $ad = Ad::create($request->validated());

        return new AdResource($ad);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ad  $ad
     * @return \Illuminate\Http\Response
     */
    public function show(Ad $ad)
    {
        return new AdResource($ad);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ad  $ad
     * @return \Illuminate\Http\Response
     */
    public function update(AdRequest $request, Ad $ad)
    {
        $ad->update($request->validated());

        return new AdResource($ad);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ad  $ad
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ad $ad)
    {
        $ad->delete();

        return response()->noContent();
    }
}
