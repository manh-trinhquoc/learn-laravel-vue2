<template>
    <div class="home-container">
        <div v-for="(group, country) in listing_groups" class="listing-summary-group">
            <h1>Places in {{ country }}</h1>
            <div class="listing-summaries">
                <listing-summary v-for="listing in group" :key="listing.id" :listing="listing"></listing-summary>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        groupByCountry
    } from '../js/helpers';

    import ListingSummary from './ListingSummary.vue';
    import axios from 'axios';
    import routeMixin from '../js/route-mixin';

    export default {
        mixins: [routeMixin],
        data() {
            return {
                listing_groups: []
            }
        },
        methods: {
            assignData({
                listings
            }) {
                this.listing_groups = groupByCountry(listings);
            },
        },
        components: {
            ListingSummary
        },
        // beforeRouteEnter(to, from, next) {
        //     let serverData = window.vuebnb_server_data;
        //     if (to.path === serverData.path) {
        //         console.log('to.path == serverData.path');
        //         let listing_groups = groupByCountry(serverData.listings);
        //         next(component => component.listing_groups = listing_groups);
        //     } else {
        //         console.log('need to get data with ajax');
        //         axios.get('/api/').then(({
        //             data
        //         }) => {
        //             let listing_groups = groupByCountry(data.listings);
        //             next(component => component.listing_groups = listing_groups);
        //         });
        //     }
        // }
    }

</script>

<style>
    .listing-summary-group {
        padding-bottom: 20px;
    }

    .listing-summaries {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        overflow: hidden;
    }

    .listing-summaries>.listing-summary {
        margin-right: 15px;
    }

    .listing-summaries>.listing-summary:last-child {
        margin-right: 0;
    }

</style>
