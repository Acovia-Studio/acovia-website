<script setup>
    defineProps(['name', 'connect', "url"])
</script>

<template>
    <a class="connect-grid" v-bind:href="url">
        <p id="name" class="card">{{ name }}</p>
        <p id="connect" class="card">{{ connect }}</p>
    </a>
</template>

<style scoped>

    .card {
        color: var(--vp-c-text-1);
        padding: 12px 0px;
        margin: 4px 0px;
    }

    .connect-grid {
        scrollbar-width: none;
        display: grid;
        padding: 4px 96px;
        grid-template-columns: 1fr 3fr;
        align-items: center;
        font-size: 21px;
        text-decoration: none;
        overflow: scroll;
        text-wrap: nowrap;
    }

    .connect-grid:hover > #name {
        color: var(--vp-c-brand-1);
        background-color: var(--vp-c-brand-soft);
        border: 1.2px solid var(--vp-c-brand-1);
    }

    .connect-grid:hover > #connect {
        background-color: var(--vp-c-brand-soft);
    }

    #name {
        transition: 0.3s;
        margin-right: 12px;
        min-width: 120px;
        border-radius: 12px;
        background-color: var(--vp-c-bg-alt);
        border: 1.2px solid var(--vp-c-bg-alt);
        text-align: center;
    }

    #connect {
        border-radius: 16px;
        transition: 0.3s;
        background-color: var(--vp-c-bg-alt);
        padding-left: 16px;
    }

@media (max-width: 960px){

    .connect-grid {
        display: grid;
        padding: 4px 0px;
        grid-template-columns: 1fr 4fr;
        align-items: center;
        font-size: 16px;
    }

}

</style>
