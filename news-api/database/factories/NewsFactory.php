<?php

namespace Database\Factories;

use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    const FAKER_IMAGES_PATH = "images" . "/";
    const IMAGES_STORAGE_PATH = "app/public/" . NewsFactory::FAKER_IMAGES_PATH;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Create images directory if not exists
        Storage::disk("public")->makeDirectory($this::FAKER_IMAGES_PATH);

        // Download fake image and store it
        $fakeImage = $this->faker->image(
            storage_path($this::IMAGES_STORAGE_PATH),
            800,
            600,
            false
        );
        return [
            "title" => $this->faker->headline(),
            "source" => $this->faker->NewssourceName(),
            "author" => $this->faker->name(),
            "content" => $this->faker->realText(1000),
            "image" => "/storage/"
                . $this::FAKER_IMAGES_PATH
                . basename($fakeImage)
        ];
    }
}
