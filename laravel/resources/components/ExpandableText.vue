<template>
    <div>
        <p v-bind:class="{ contracted: contracted1 }">
            <slot></slot>
        </p>
        <button class="more" v-on:click="contracted1 = false" v-if="contracted1">More</button>
    </div>
</template>
<style scoped>
    .about p {
        white-space: pre-wrap;
    }

    .about p.contracted {
        height: 150px;
        overflow: hidden;
    }

    button {
        border-radius: 4px;
        border: 1px solid #c4c4c4;
        text-align: center;
        vertical-align: middle;
        font-weight: bold;
        line-height: 1.43;
        user-select: none;
        white-space: nowrap;
        cursor: pointer;
        background: white;
        color: #484848;
        padding: 7px 18px;
        font-size: 14px;
        display: inline-block;
        margin-bottom: 0;

    }

    .about button.more {
        background: transparent;
        border: 0;
        color: #008489;
        padding: 0;
        font-size: 17px;
        font-weight: bold;
    }

    .about button.more:hover,
    .about button.more:focus,
    .about button.more:active {
        text-decoration: underline;
        outline: none;
    }

</style>

<script>
    export default {
        data() {
            return {
                contracted1: true,
            }
        },
    }

</script>
