<script setup>
</script>

<template>
    <div class="grid">
        <slot></slot>
    </div>
</template>

<style>

.grid {
    display: grid;
    grid-gap: 12px 4px;
    grid-template-columns: 1fr;
    align-items: left;
}

@media (min-width: 960px){
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: left;
        grid-gap: 4px 4px;
        padding: 0px 0px;
    }
}
</style>