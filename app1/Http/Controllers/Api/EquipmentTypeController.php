<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EquipmentTypeController extends Controller
{
    /**
     * Get all EquipmentTypes
     **/
    public function index()
    {
        return EquipmentTypeResource::collection(EquipmentType::all());
    }

    /**
     * Store a EquipmentType
     **/
    public function store(EquipmentTypeRequest $request)
    {
        $equipmenttype = EquipmentType::create($request->validated());
        return new EquipmentTypeResource($equipmenttype);
    }

    /**
     * Get one EquipmentType
     **/
    public function show(EquipmentType $equipmenttype)
    {
        return new EquipmentTypeResource($equipmenttype);
    }

    /**
     * Update a EquipmentType
     **/
    public function update(EquipmentTypeRequest $request, EquipmentType $equipmenttype)
    {
        $equipmenttype->update($request->validated());
        return new EquipmentTypeResource($equipmenttype);
    }

    /**
     * Delete a EquipmentType
     **/
    public function destroy(EquipmentType $equipmenttype)
    {
        $equipmenttype->delete();
        return response()->noContent();
    }
}