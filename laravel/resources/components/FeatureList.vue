<template>
    <div class="amenities ">
        <div class="title"><strong>Amenities</strong></div>
        <div class="content list">
            <div class="list-item" v-for="amenity in amenities" v-bind:key="amenity">
                <i class="fa fa-lg" v-bind:class="amenity.icon"></i>
                <span>@{{ amenity.title }}</span>
            </div>
        </div>
    </div>
</template>
