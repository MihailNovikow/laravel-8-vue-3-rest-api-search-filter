<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\EquipmentRequest;
use App\Http\Resources\EquipmentResource;
use App\Models\Equipment;

class EquipmentController extends Controller
{
    /**
     * Get all Equipments
     **/
    public function index()
    {
        return EquipmentResource::collection(Equipment::all());
    }

    /**
     * Store a Equipment
     **/
    public function store(EquipmentRequest $request)
    {
        $equipment = Equipment::create($request->validated());
        return new EquipmentResource($equipment);
    }

    /**
     * Get one Equipment
     **/
    public function show(Equipment $equipment)
    {
        return new EquipmentResource($equipment);
    }

    /**
     * Update a Equipment
     **/
    public function update(EquipmentRequest $request, Equipment $equipment)
    {
        $equipment->update($request->validated());
        return new EquipmentResource($equipment);
    }

    /**
     * Delete a Equipment
     **/
    public function destroy(Equipment $equipment)
    {
        $equipment->delete();
        return response()->noContent();
    }
}
