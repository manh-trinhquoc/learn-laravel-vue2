<template>
    <div>
        <header-image v-bind:image-url="images[0]" v-on:click="openModal"></header-image>
        <div class="container">
            <div class="heading">
                <h1>{{ title }}</h1>
                <p>{{ address }}</p>
            </div>
            <hr>
            <div class="about">
                <h3>About this listing</h3>
                <expandable-text> {{ about }} </expandable-text>
            </div>
            <div class="lists">
                <hr>
                <feature-list title="Amenities" v-bind:items="amenities">
                    <template slot-scope="amenity">
                        <i class="fa fa-lg" v-bind:class="amenity.icon"></i>
                        <span>@{{ amenity.title }}</span>
                    </template>
                </feature-list>
                <feature-list title="Prices" v-bind:items="prices">
                    <template slot-scope="price">
                        {{ price.title }} : <strong> {{ price.value }} </strong>
                    </template>
                </feature-list>
            </div>
        </div>
        <modal-window ref="imagemodal">
            <image-carousel :images="images"></image-carousel>
        </modal-window>
    </div>
</template>

<style scoped>
    .about {
        margin-top: 2em;
    }

    .about h3 {
        font-size: 22px;
    }

</style>

<script>
    import {
        populateAmenitiesAndPrices
    } from '../js/helpers';

    let model = window.vuebnb_listing_model;
    model = populateAmenitiesAndPrices(model);

    import ImageCarousel from '../components/ImageCarousel.vue';
    import ModalWindow from '../components/ModalWindow.vue';
    import HeaderImage from '../components/HeaderImage.vue';
    import FeatureList from '../components/FeatureList.vue';
    import ExpandableText from '../components/ExpandableText.vue';

    export default {
        data() {
            return Object.assign(model);
        },
        methods: {
            openModal() {
                this.$refs.imagemodal.modalOpen = true;
            },
        },
        components: {
            ImageCarousel,
            ModalWindow,
            HeaderImage,
            FeatureList,
            ExpandableText
        }
    }

</script>
