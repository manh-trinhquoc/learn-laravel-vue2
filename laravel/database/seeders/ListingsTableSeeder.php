<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use File;
use DB;

class ListingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('listings')->delete();
        $path = base_path() . '/database/data.json';
        $file = File::get($path);
        $data = json_decode($file, true);
        DB::table('listings')->insert($data);
    }
}
