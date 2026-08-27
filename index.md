---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
---

<script setup>
import Title from '/.vitepress/vue/Title.vue'
import CardFiles from '/.vitepress/vue/CardFiles.vue'
import Picture from '/.vitepress/vue/Picture.vue'
import PicLink from '/.vitepress/vue/PicLink.vue'
import Block from '/.vitepress/vue/Block.vue'
import Connect from './.vitepress/vue/Connect.vue'
import GridTwo from '/.vitepress/vue/GridTwo.vue'
</script>

<Title url="acovia-server/acovia" other_url="https://qm.qq.com/q/5xdg6qn8nS" title="Acovia Server" tagline="原版中世纪风格 Minecraft 服务器" tag="了解服务器 ->" other_tag="加入服务器群聊" img="/acovia.svg"></Title>

<Block title="资源链接">

<GridTwo>

<CardFiles title="Saves" href="https://hub.acovia.net/acovia-backups/">服务器的存档备份处</CardFiles>

<CardFiles title="更新日志" href="/acovia-server/new">记录了服务器的所有更新日志</CardFiles>

</GridTwo>

</Block>



<Block title="服务器实景">

<Picture>

<PicLink url="https://hub.acovia.net/pictures/acovia-1.png"/>

<PicLink url="https://hub.acovia.net/pictures/acovia-2.png"/>

<PicLink url="https://hub.acovia.net/pictures/acovia-3.png"/>

</Picture>

</Block>

<Block title="友链">

<Connect name="Fovlin Blog" connect="https://fovlin.com" url="https://fovlin.com"/>

<Connect name="Potg Craft" connect="https://mc.potg.org" url="https://mc.potg.org"/>

</Block>



<center>使用 <a href="https://vitepress.dev/">Vitepress</a> 构建 | 鲁ICP备 2025208075 号</center>
