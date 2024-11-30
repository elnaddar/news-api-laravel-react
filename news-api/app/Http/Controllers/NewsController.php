<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsResource;
use App\Models\News;
use Illuminate\Http\Request;

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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        //
    }
}
