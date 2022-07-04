<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Vuebnb</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('css/vue-style.css') }}" type="text/css">
    <script type="text/javascript">
        window.vuebnb_listing_model = {!! json_encode($model) !!};
    </script>

</head>

<body>
    <div id="toolbar">
        <img class="icon" src="{{ asset('images/logo.png') }}">
        <h1>vuebnb</h1>
    </div>
    @verbatim
    <div id="app">
        <header-image v-bind:image-url="images[0]" v-on:click="openModal"></header-image>
        <div class="container">
            <div class="heading">
                <h1>{{ title }}</h1>
                <p>{{ address }}</p>
            </div>
            <hr>
            <div class="about">
                <h3>About this listing</h3>
                <p v-bind:class="{ contracted: contracted1 }">{{ about }}</p>
                <button class="more" v-on:click="contracted1 = false" v-if="contracted1">More</button>
            </div>
            <div class="lists">
                <hr>
                <feature-list title="Amenities">
                    <div class="list-item" v-for="amenity in amenities">
                        <i class="fa fa-lg" v-bind:class="amenity.icon"></i>
                        <span>@{{ amenity.title }}</span>
                    </div>
                </feature-list>
                <feature-list title="Prices">
                    <div class="list-item" v-for="price in prices">
                        {{ price.title }} : <strong> {{ price.value }} </strong>
                    </div>
                </feature-list>
            </div>
        </div>
        <modal-window ref="imagemodal">
            <image-carousel :images="images"></image-carousel>
        </modal-window>
    </div>
    @endverbatim
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
