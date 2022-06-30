<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Listing;

class ListingController extends Controller
{
    public function getListingApi(Listing $listing)
    {
        // return $listing->toJson();
        $model = $listing->toArray();
        for ($i = 1; $i <= 4; $i++) {
            $model['image_' . $i] = asset(
                'images/' . $listing->id . '/Image_' . $i . '.jpg'
            );
        }

        return response()->json($model);
    }
}
