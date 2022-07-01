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
        $model = $this->addImageUrls($model, $listing->id);

        return response()->json($model);
    }

    public function getListingWeb(Listing $listing)
    {
        $model = $listing->toArray();
        $model = $this->addImageUrls($model, $listing->id);
        // var_dump($model);

        return view('app', [
            'model' => $model
        ]);
    }

    private function addImageUrls($model, $id)
    {
        for ($i = 1; $i <= 4; $i++) {
            $model['image_' . $i] = asset(
                'images/' . $id . '/Image_' . $i . '.jpg'
            );
        }

        return $model;
    }
}
