<?php

namespace App\Http\Controllers;

use App\Models\LandingPage;
use Illuminate\Http\Request;

class LandingPageController extends Controller
{

    // Get all landing pages
    public function index()
    {
        $landingPages = LandingPage::all();

        return response()->json($landingPages);
    }

    // Get a single landing page
    public function show($id)
    {
        $landingPage = LandingPage::findOrFail($id);

        return response()->json($landingPage);
    }

    // Save a landing page
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'content' => 'required|json',
        ]);

        $landingPage = LandingPage::create($validated);

        return response()->json($landingPage, 201);
    }

    // Delete a landing page
    public function destroy($id)
    {
        $landingPage = LandingPage::findOrFail($id);
        $landingPage->delete();

        return response()->json(['message' => 'Landing page deleted successfully']);
    }
}
