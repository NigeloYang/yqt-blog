<script setup>
import {RouterView } from 'vue-router'
import {onMounted} from "vue"
import lazyLoadImage from "./utils/util.lazyload.js"

import YqtLoading from "./components/common/YqtLoading.vue"

onMounted( () => {
	lazyLoadImage()
})

</script>

<template>
  <RouterView />
	<YqtLoading />
</template>

<style scoped lang="scss">

</style>
