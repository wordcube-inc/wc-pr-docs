<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    item: {}
})

// const copy = text => {
//     console.log('copy.text1:', text);
//     const copyText = document.getElementById("myText")
//     copyText.value = text
//     copyText.focus()
//     copyText.select()
//     document.execCommand("copy")
// }
const body = computed(() => {
    return props.item.request.body.urlencoded
})

const response = computed(() => {
    return props.item.response
})
</script>
<template>
    <div class="postman-api-item-container">
        <div class="title">
            <span :class="['method', item.request.method]">{{ item.request.method }}</span>
            <span class="name">{{ item.name }}</span>
        </div>
        <div class="subtitle">URL</div>
        <div class="url">
            {{ item.request.url.raw }}
            <!-- <span class="copy" @click="copy(item.request.url.raw)">copy</span> -->
        </div>
        <div class="subtitle" v-if="item.request.header && item.request.header.length > 0">Request.Headers</div>
        <div class="list" v-if="item.request.header && item.request.header.length > 0">
            <div class="list-row">
                <div class="label"></div>
            </div>
        </div>
        <div class="subtitle" v-if="body && body.length > 0">Request.Params/Body</div>
        <div class="list" v-if="body && body.length > 0">
            <div class="list-row">
                <div class="key">Key</div>
                <div class="type">Type</div>
                <div class="description">Description</div>
                <div class="value">Value</div>
            </div>
            <div class="list-row" v-for="(v, k) in body" :key="k">
                <div class="key">{{ v.key }}</div>
                <div class="type">{{ v.type }}</div>
                <div class="description">{{ v.description }}</div>
                <div class="value">{{ v.value }}</div>
            </div>
        </div>
        <div class="subtitle" v-if="response && response.length > 0">Response Body</div>
        <div class="response" v-if="response && response.length > 0">
            <div class="response-item" v-for="(v, k) in response" :key="k">
                {{ v.body }}
            </div>
        </div>
    </div>
</template>
<style scoped>
.postman-api-item-container {
    font-size: medium;
    font-weight: 400;
    margin-bottom: 30px;
}
.postman-api-item-container .title .method {
    background-color: gary;
    color: #fff;
    padding: 2px 5px;
    border-radius: 5px;
}
.postman-api-item-container .title .method.POST {
    background-color: #084FAE;
}
.postman-api-item-container .title .method.GET {
    background-color: #047330;
    
}
.postman-api-item-container .title .name {
    margin-left: 10px;
}
.postman-api-item-container .subtitle {
    margin-top: 10px;
}
.postman-api-item-container .url {
    background-color: #efeff5;
    padding: 5px 10px;
    /* margin-top: 10px; */
    border-radius: 7px;
    font-size: small;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.postman-api-item-container .url .copy {
    background-color: lightgray;
    color: #fff;
    padding: 2px 5px;
    border-radius: 5px;
}

.postman-api-item-container .url .copy:hover {
    background-color: gray;
    cursor: pointer;
}
.postman-api-item-container .list {
    display: flex;
    flex-direction: column;
    background-color: #efeff5;
    padding: 5px 10px;
    border-radius: 7px;
}
.postman-api-item-container .list .list-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: small;
    padding: 5px 0;
    
}
.postman-api-item-container .list .list-row:not(:last-of-type) {
    border-bottom: 1px solid lightgray;
}
.postman-api-item-container .list .list-row .key {
    width: 30%;
}
.postman-api-item-container .list .list-row .value {
    width: 30%;
}
.postman-api-item-container .list .list-row .type {
    width: 20%;
}
.postman-api-item-container .list .list-row .description {
    width: 20%;
}
.postman-api-item-container .response {
    display: flex;
    flex-direction: column;
    background-color: #efeff5;
    padding: 5px 10px;
    border-radius: 7px;
}
</style>