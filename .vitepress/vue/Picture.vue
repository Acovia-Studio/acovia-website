<script setup>
    defineProps(['url'])
</script>

<template>
    <div class="img-div">
        <slot></slot>
    </div>
</template>

<style scoped>

.img-div {
    flex-wrap: wrap;
}

@media (min-width: 960px){
    .img-div {
        flex-wrap: nowrap;
        height: 320px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s;
    }
}

</style>