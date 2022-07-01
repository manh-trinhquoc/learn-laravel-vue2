<template>
    <div class="image-carousel">
        <img v-bind:src="image" />
        <div class="controls">
            <carousel-control :dir="'left'" @change-image="changeImage"></carousel-control>
            <carousel-control dir="right" @change-image="changeImage"></carousel-control>
        </div>
    </div>
</template>
<script>
    export default {
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
    }

</script>
<style></style>
