<?php

use Faker\Generator as Faker;

$factory->define(App\Product::class, function (Faker $faker) {
    return [
        'category_id' => $faker->numberBetween(1, 10),
        'brand_id' => $faker->numberBetween(1, 25),
        'title' => $faker->unique()->sentence(1, 3),
        'description' => $faker->paragraph(),
        'price' => $faker->numberBetween(500, 5000),
        'active' => $faker->boolean()
    ];
});