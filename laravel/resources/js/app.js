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
                <carousel-control :dir="'left'" @change-image="changeImage"></carousel-control>
                <carousel-control dir="right" @change-image="changeImage"></carousel-control>
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
    methods: {
        changeImage(val) {
            val = parseInt(val);
            let newIndex = this.index + val;
            if (newIndex < 0) {
                this.index = this.images.length - 1;
            } else if (newIndex === this.images.length) {
                this.index = 0;
            } else {
                this.index = newIndex;
            }
        }
    },
    components: {
        'carousel-control': {
            template: `<i :class="classes" @click="clicked">            </i>`,
            props: ['dir'],
            computed: {
                classes() {
                    return 'carousel-control fa fa-2x fa-chevron-' + this.dir;
                }
            },
            methods: {
                clicked() {
                    this.$emit('change-image', this.dir === 'left' ? -1 : 1);
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
