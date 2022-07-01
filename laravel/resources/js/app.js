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

Vue.component('image-carousel', {
    template: `
        <div class="image-carousel">
            <img v-bind:src="image"/>
            <div class="controls">
                <carousel-control :dir="'left'"></carousel-control>
                <carousel-control dir="right"></carousel-control>
            </div>
        </div>`,
    props: ['images'],
    data() {
        return {
            index: 0
        }
    },
    computed: {
        image() {
            return this.images[this.index];
        }
    },
    components: {
        'carousel-control': {
            template: `<i :class="classes">            </i>`,
            props: ['dir'],
            computed: {
                classes() {
                    return 'carousel-control fa fa-2x fa-chevron-' + this.dir;
                }
            }
        }
    }
});


var app = new Vue({
    el: '#app',
    data: Object.assign(model, {
        headerImageStyle: {
            'background-image': `url(${model.images[0]})`
        },
        contracted1: true,
        modalOpen: false
    }),
    watch: {
        modalOpen: function () {
            var className = 'modal-open';
            if (this.modalOpen) {
                document.body.classList.add(className);
            } else {
                document.body.classList.remove(className);
            }
        }
    },
    methods: {
        escapeKeyListener: function (evt) {
            // console.group('keyup event');
            // console.log(this.modalOpen);
            // console.log(evt);
            // console.groupEnd();
            if (evt.keyCode === 27 && this.modalOpen) {
                this.modalOpen = false;
            }
        }
    },

    created: function () {
        // document.addEventListener('keyup', function (evt) {
        //     console.group('keyup event');
        //     console.log(this.modalOpen);
        //     console.log(evt);
        //     console.groupEnd();
        //     if (evt.keyCode === 27 && this.modalOpen) {
        //         this.modalOpen = false;
        //     }
        // })
        document.addEventListener('keyup', this.escapeKeyListener);
    },
    destroyed: function () {
        document.removeEventListener('keyup', this.escapeKeyListener);
    }
});
