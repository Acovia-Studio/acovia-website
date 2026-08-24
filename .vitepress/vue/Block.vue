<script setup>
    defineProps(["title"])
</script>


<template>
    <div>
        <h1>{{ title }}</h1>
        <slot></slot>
    </div>
</template>

<style scoped>

    h1 {
        text-align: center;
        margin: 24px 0px;
    }

    div {

        margin: 24px 0px;

    }

</style>