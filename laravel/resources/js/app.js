import Vue from 'vue';
import "core-js/features/object/assign";
import {
    populateAmenitiesAndPrices
} from './helpers';

let model = window.vuebnb_listing_model;
console.log(model.amenity_breakfast);
console.log(model);
model = populateAmenitiesAndPrices(model);
console.log(model);

import ImageCarousel from '../components/ImageCarousel.vue';
import ModalWindow from '../components/ModalWindow.vue';
import HeaderImage from '../components/HeaderImage.vue';


var app = new Vue({
    el: '#app',
    data: Object.assign(model, {
        contracted1: true,
    }),
    methods: {
        openModal() {
            this.$refs.imagemodal.modalOpen = true;
        },
    },
    components: {
        ImageCarousel,
        ModalWindow,
        HeaderImage
    }
});
