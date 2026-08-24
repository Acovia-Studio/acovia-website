<script setup>
    defineProps(['name', 'connect', "url"])
</script>

<template>
    <a class="connect-grid" v-bind:href="url">
        <p class="name">{{ name }}</p>
        <p class="connect">{{ connect }}</p>
    </a>
</template>

<style scoped>

    p {
        padding: 12px 0px;
        margin: 4px 0px;
    }

    .connect-grid {
        display: grid;
        padding: 4px 96px;
        grid-template-columns: 1fr 3fr;
        align-items: center;
        font-size: 21px;
        text-decoration: none;
        overflow: scroll;
        text-wrap: nowrap;
    }

    .connect-grid:hover > .name {
        color: var(--vp-c-brand-1);
        background-color: var(--vp-c-brand-soft);
        border: 1.2px solid var(--vp-c-brand-1);
        color: var(--vp-c-brand-1);
        background-color: var(--vp-c-brand-soft);
        border: 1.2px solid var(--vp-c-brand-1);
    }

    .connect-grid:hover > .connect::before {
        z-index: -1;
        opacity: 100%;
        opacity: 100%;
        width: 100%;
    }

    .name {
        transition: 0.3s;
        margin-right: 12px;
        min-width: 120px;
        border-radius: 12px;
        background-color: var(--vp-c-bg-alt);
        border: 1.2px solid var(--vp-c-bg-alt);
        text-align: center;
    }

    .connect {
        position: relative;
        border-left: 5px solid var(--vp-c-brand-1);
        padding-left: 16px;
    }

    .connect::before {
        opacity: 0%;
        z-index: -1;
        transition: 0.3s;
        content: "";
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        width: 0;
        background: linear-gradient(to right, var(--vp-c-brand-soft) 45%, #ffaf0000 90%);
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