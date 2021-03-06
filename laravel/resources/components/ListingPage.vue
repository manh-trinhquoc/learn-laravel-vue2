<template>
    <div>
        <header-image v-bind:image-url="images[0]" v-on:click="openModal"></header-image>
        <div class="listing-container">
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

<style>
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

    let serverData = window.vuebnb_server_data;
    let model = populateAmenitiesAndPrices(serverData.listing);

    import ImageCarousel from '../components/ImageCarousel.vue';
    import ModalWindow from '../components/ModalWindow.vue';
    import HeaderImage from '../components/HeaderImage.vue';
    import FeatureList from '../components/FeatureList.vue';
    import ExpandableText from '../components/ExpandableText.vue';

    import routeMixin from '../js/route-mixin';

    export default {
        mixins: [routeMixin],
        data() {
            return {
                title: null,
                about: null,
                address: null,
                amenities: [],
                prices: [],
                images: []
            }
        },
        methods: {
            openModal() {
                this.$refs.imagemodal.modalOpen = true;
            },
            assignData({
                listing
            }) {
                Object.assign(this.$data, populateAmenitiesAndPrices(listing));
            }
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
