<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsResource;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $pageSize = $request->page_size ?? 20;
        $pageNumber = $request->page ?? 1;

        $news = News::query()->latest("updated_at")->paginate(
            perPage: $pageSize,
            page: $pageNumber
        );

        return NewsResource::collection($news);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "title" => "required|min:10|unique:news",
            "content" => "required",
            "source" => "required",
            "author" => "required"
        ]);

        $news = News::create([
            "title" => $request->title,
            "content" => $request->content,
            "source" => $request->source,
            "author" => $request->author,
            "image" =>  $request->image
        ]);

        return response()->json([
            "message" => "Added Successfully",
            "id" => $news->id
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        return new NewsResource($news);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news)
    {
        $request->validate([
            "title" => "min:10|unique:news",
        ]);

        $news->updateOrFail([
            "title" => $request->title ?? $news->title,
            "content" => $request->content ?? $news->content,
            "source" => $request->source ?? $news->source,
            "author" => $request->author ?? $news->author,
            "image" =>  $request->imag ?? $news->image
        ]);

        return response()->json([
            "message" => "Updated Successfully",
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        $imagePath = $news->image;
        $news->deleteOrFail();

        // Check if image used in another News Post
        $news = News::where("image", $imagePath)->get();
        if ($news->isEmpty()) {
            $imagePathSeparated = explode("/", $imagePath);
            $imagePathToBeDeleted = "images/" . end($imagePathSeparated);
            Storage::disk("public")->delete($imagePathToBeDeleted);
        }

        return response()->json([
            "message" => "Destroyed Successfully",
        ], 201);
    }
}
