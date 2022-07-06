<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Listing;

class ListingController extends Controller
{
    public function getListingApi(Listing $listing)
    {
        // return $listing->toJson();
        $data = $this->getListing($listing);

        return response()->json($data);
    }

    public function getListingWeb(Listing $listing)
    {
        $data = $this->getListing($listing);

        return view('app', [
            'data' => $data
        ]);
    }

    public function getHomeWeb()
    {
        $collection = Listing::all([
            'id', 'address', 'title', 'price_per_night'
        ]);
        $collection->transform(function ($listing) {
            $listing->thumb = asset('images/' . $listing->id . '/Image_1_thumb.jpg');

            return $listing;
        });
        $data = collect(['listings' => $collection->toArray()]);
        var_dump($data->toArray());

        return view('app', ['data' => $data]);
    }

    private function getListing($listing)
    {
        $model = $listing->toArray();
        for ($i = 1; $i <= 4; $i++) {
            $model['image_' . $i] = asset(
                'images/' . $listing->id . '/Image_' . $i . '.jpg'
            );
        }

        return collect(['listing' => $model]);
    }
}
