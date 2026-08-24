<script setup>
    defineProps(['title','tagline','tag','other_tag','url','other_url','img'])
    import TableTwo from './GridTwo.vue';
</script>

<template>
    <TableTwo>
        <div id="box-1">
            <h class="hero-title">{{ title }}</h>
            <p class="tagline">{{ tagline }}</p>
            <div id="button">
                <a id="link" v-bind:href="url">{{ tag }}</a>
                <a id="other-link" v-bind:href="other_url">
                    {{ other_tag }}<svg t="1778347968866" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5569" width="64" height="64"><path d="M762.24 506.88a32 32 0 0 1-46.08-44.16l55.68-58.24a125.76 125.76 0 0 0-12.16-171.2c-48.32-50.24-119.68-54.72-160-12.48L444.16 384a125.76 125.76 0 0 0 12.16 171.2 32 32 0 0 1 0 45.12 32 32 0 0 1-45.44 0 189.44 189.44 0 0 1-12.16-259.52l155.52-162.24c66.88-69.76 180.48-64 252.8 12.8A189.44 189.44 0 0 1 818.24 448z" p-id="5570"></path><path d="M229.76 517.12a32 32 0 0 1 46.08 44.16l-55.68 58.24a125.76 125.76 0 0 0 12.16 171.2c48.32 50.24 119.68 54.72 160 12.48L547.84 640a125.76 125.76 0 0 0-12.16-171.2 32 32 0 0 1 0-45.12 32 32 0 0 1 45.44 0 189.44 189.44 0 0 1 12.16 259.52L437.76 845.44c-66.88 69.76-180.48 64-252.8-12.8A189.44 189.44 0 0 1 173.76 576z" p-id="5571"></path></svg>
                </a>
            </div>
        </div>
        <div id="box-2">
            <img v-bind:src="img">
        </div>
    </TableTwo>
</template>

<style scoped>

.icon {
    margin-left:4px;
    width: 24px;
    height: 24px;
    transition: 0.3s;
    fill:var(--vp-c-text-1);
}

#box-2 {
    order: -1;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    height: 256px;
    padding: 32px 0px;
}

.hero-title {
    font-weight: bolder;
    font-size: 28px;
    color: var(--vp-c-acovia-1);
}

.tagline {
    font-size: 20px;
    color: var(--vp-c-text-1)
}

#button {
    padding: 16px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

#link {
    background-color: var(--vp-c-acovia-1);
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

#other-link {
    padding: 16px 0px;
    padding-left: 21px;
    color: var(--vp-c-text-3);
    display: flex;
    text-decoration: none;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
}

#other-link:hover {
    color: var(--vp-c-acovia-1);
}

#other-link:hover > .icon {
    fill: var(--vp-c-acovia-1);
}

@media (min-width: 960px){

    #other-link {
        padding: 16px 0px;
        padding-left: 21px;
    }

    #link{
        padding: 16px 48px;
    }

    #box-1 {
        align-self: center;
    }

    #box-2{
        order: 1;
    }

    img {
        height: 320px;
    }

    #button {
        justify-content: left;
    }
    .grid-two {
        display: grid;
        grid-gap: 0px 0px;
        grid-template-columns: 1.2fr 1fr;
    }

    .hero-title {
        font-size: 64px;
        line-height: 96px;
        font-weight: bolder;
    }
}

</style>