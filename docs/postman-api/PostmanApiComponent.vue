<script setup>
import { onMounted, ref } from 'vue'
import PostmanApiItemComponent from './PostmanApiItemComponent.vue'
import PostmanApiColumnComponent from './PostmanApiColumnComponent.vue'

const loadingJson = ref(true)

const data = ref({
    collection: {
        info: {},
        item: []
    }
})
const clickJump = (url) => {
    open(url)
}
const api = ref([])

onMounted(async () => {
    const response = await fetch('https://api.postman.com/collections/17286891-5d3019f5-e708-4166-9f70-e6ddd63c0a0a?access_key=PMAT-01HQ5AJXHW74V2SY7BEG14FEP7')
    if (response.ok) {
        data.value = await response.json()
        api.value = data.value.collection.item
        loadingJson.value = false
    }
})
</script>
<template>
<div class="document-container">
    <div class="loading" v-show="loadingJson">Loading API Data from Postman...</div>
    <PostmanApiColumnComponent v-show="!loadingJson" :item="api"/>
    <input type="text" id="myText" style="display: none;">
    <div class="postman-baseinfo" v-show="!loadingJson">
        <div class="row">
            <div class="label">postman_id</div>
            <div class="value">
                {{ data.collection.info._postman_id }}
            </div>
        </div>
        <div class="row">
            <div class="label">schema</div>
            <div class="value a" @click="clickJump(data.collection.info.schema)">{{ data.collection.info.schema }}</div>
        </div>
    </div>
    <div class="api" v-show="!loadingJson">
        <div
            v-for="(v, k) in api"
            :key="k"
            class="h1"
            :id="`h1_${k}`">
            {{ v.name }}

            <div   
                v-for="(vv, kk) in v.item"
                :key="kk"
                class="h2"
                :id="`h2_${kk}`">
                {{ vv.name }}

                <div
                    v-for="(vvv, kkk) in vv.item"
                    :key="kkk"
                    class="h3"
                    :id="`h3_${kkk}`">
                    <PostmanApiItemComponent :item="vvv"></PostmanApiItemComponent>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style>
.VPNavBarTranslations {
    display: none !important;
}
</style>
<style scoped>
.document-container {
    display: flex;
    flex-direction: column;
}
.document-container .loading {
    margin-top: 20px;
}
.a:hover {
    cursor: pointer;
    color: #2B8ED3 !important;
}
.document-container .postman-baseinfo {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #efeff5;
    padding: 10px 20px;
    border-radius: 10px;
    margin-top: 20px;

}
.document-container .postman-baseinfo .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: smaller;
}

.document-container .postman-baseinfo .row .label {
    color: #333;
    width: 100px;
}
.document-container .postman-baseinfo .row .value {
    color: gray;
    width: calc(100% - 100px);
}
.document-container .api {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}
.document-container .api .h1 {
    font-size: x-large;
    font-weight: 700;
    margin-top: 10px;
}
.document-container .api .h1 .h2 {
    font-size: large;
    font-weight: 600;
    margin-top: 10px;
}
.document-container .api .h1 .h2 .h3 {
    font-size: medium;
    font-weight: 500;
    margin-top: 10px;
}
</style>