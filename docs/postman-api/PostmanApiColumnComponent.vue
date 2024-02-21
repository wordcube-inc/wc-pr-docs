<script setup>
const props = defineProps({
    item: {}
})

const scroll = id => {
    window.location.hash = `#${id}`
}
</script>
<template>
    <div class="api-column-container">
        <div class="column-title">目录</div>
        <div
            v-for="(v, k) in item"
            :key="k"
            class="h1">
            <span class="h1-text" @click="scroll(`h1_${k}`)">{{ v.name }}</span>

            <div   
                v-for="(vv, kk) in v.item"
                :key="kk"
                class="h2">
                <span class="h2-text" @click="scroll(`h2_${kk}`)">{{ vv.name }}</span>

                <div
                    v-for="(vvv, kkk) in vv.item"
                    :key="kkk"
                    class="h3">
                    <span class="h3-text" @click="scroll(`h3_${kkk}`)">{{ vvv.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.VPDoc .aside {
    visibility: hidden !important;
}
</style>
<style scoped>
.api-column-container {
    width: 20vw;
    position: fixed;
    right: 0;
    font-size: small;
}
.api-column-container .column-title {
    font-size: large;
    font-weight: 600;
}
.api-column-container .h1-text {
    font-size: medium;
    font-weight: 600;
}
.api-column-container .h2-text {
    margin-left: 20px;
    font-weight: 500;
}
.api-column-container .h3-text {
    margin-left: 40px;
    font-weight: 400;
}
.api-column-container .h1-text:hover,
.api-column-container .h2-text:hover,
.api-column-container .h3-text:hover {
    cursor: pointer;
    text-decoration: underline;
}
</style>