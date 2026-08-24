<script setup>
    defineProps(['url'])
</script>

<template>
    <a class="pic" v-bind:href="url"><img class="img" v-bind:src="url"></a>
</template>

<style scoped>

.pic {
    transition: 0.3s;
    padding: 0px 4px;
    width: 100%;
}

.pic:hover {
    width: 200%;
}

</style>