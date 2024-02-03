<script setup>
import config from '../config.js'
const sitebar = config.themeConfig.sidebar[0].items
console.log(config, sitebar)
const goDoc = (url) => {
    window.location.href = url.substr(1)
}
</script>

<template>
    全站文档目录

    <div class="items">
        <div v-for="(v, k) in sitebar" class="item" @click="goDoc(v.link ? v.link : v.items[0].link)">
            {{ v.text }}
        </div>
    </div>
</template>
<style scoped>
.items {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}
.items .item {
    width: 70%;
    height: 33px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    padding-left: 20px;
    font-size: 15px;
}
.items .item::before {
    content: '> ';
}
.items .item:hover {
    cursor: pointer;
    text-decoration: underline;
}
</style>