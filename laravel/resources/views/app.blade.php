<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Vuebnb</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}" type="text/css">
</head>

<body>
    <div id="toolbar">
        <img class="icon" src="{{ asset('images/logo.png') }}">
        <h1>vuebnb</h1>
    </div>
    @verbatim
    <div id="app">
        <div class="header">
            <div class="header-img" v-bind:style="headerImageStyle" v-on:click="modalOpen = true">
                <button class="view-photos">View Photos</button>
            </div>
        </div>
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
                <div class="amenities list">
                    <div v-for="amenity in amenities" v-bind:key="amenity.id">
                        <i class="fa fa-lg" v-bind:class="amenity.icon"></i>
                        <span>
                            {{ amenity.title }}
                        </span>
                    </div>
                </div>
                <div class="prices ">
                    <div class="title">
                        <strong>Prices</strong>
                    </div>
                    <div class="content list">
                        <div class="list-item" v-for="price in prices">
                            {{ price.title }} : <strong> {{ price.value }} </strong>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div id="modal" v-bind:class="{ show : modalOpen }">
            <button v-on:click="modalOpen = false" class="modal-close"> &times;</button>
            <div class="modal-content">
                <img src="images/header.jpg" alt="">
            </div>
        </div>
    </div>
    @endverbatim
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
