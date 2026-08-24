<script setup>
    defineProps(['title','tagline','tag'])
    import TableTwo from './GridTwo.vue';
</script>

<template>
    <div class="div">
        <h1 class="hero-title">{{ title }}</h1>
        <p class="tagline">{{ tagline }}</p>
        <div id="button">
            <a id="link" href="/welcome">{{ tag }}</a>
        </div>
    </div>
</template>

<style scoped>

.icon {
    margin: auto 0px;
    fill:var(--vp-c-text-1);
}

.div {
    padding-top: 64px;
    order: 2;
    text-align: center;
}

.hero-title {
    font-weight: bolder;
    font-size: 48px;
    color: var(--vp-c-yellow-1);
}

.tagline {
    font-size: 20px;
    color: var(--vp-c-text-1)
}


#button {
    padding: 32px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

#link {
    background-color: var(--vp-c-yellow-1);
    display: flex;
    padding: 16px 16px;
    text-decoration: none;
    font-size: 20px;
    color: var(--vp-c-bg);
    border-radius: 16px;
    transition: 0.3s;
}

#link:hover {
    background-color: var(--vp-c-purple-1);
}

@media screen and (min-width: 960px){

    #link{
        padding: 16px 48px;
    }

    .div {
        padding: 24px 0px;
        order: 1;
    }
    .grid-two {
        display: grid;
        grid-template-columns: 1.2fr 1fr;
    }

    .hero-title {
        font-size: 64px;
        line-height: 96px;
        font-weight: bolder;
    }
}

</style>