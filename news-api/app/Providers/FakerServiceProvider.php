<?php

namespace App\Providers;

use Faker\Provider\Fakenews;
use Faker\Provider\Fakenewssource;
use Illuminate\Support\ServiceProvider;
use Smknstd\FakerPicsumImages\FakerPicsumImagesProvider;

class FakerServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(\Faker\Generator::class, function () {
            $faker = \Faker\Factory::create();
            $faker->addProvider(new Fakenews($faker));
            $faker->addProvider(new Fakenewssource($faker));

            $faker->addProvider(new FakerPicsumImagesProvider($faker));
            return $faker;
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
