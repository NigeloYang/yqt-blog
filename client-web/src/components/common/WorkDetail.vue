<template>
  <section class="work-detail">
    <h2 class="work-name">{{ viewData.title }}</h2>
    <ul class="work-tips">
      <li class="tips-item">
        <!--        <span class="iconfont icon-business-icon-sales-center"></span>-->
        <span>项目类别: {{ viewData.category }}</span>
      </li>
      <li class="tips-item">
        <span>语言框架: {{ viewData.framework }}</span>
      </li>
      <li class="tips-item">
        <span>源码地址:  <a :href="viewData.demoUrl" target="_blank">{{ viewData.sourceUrl }}</a></span>
      </li>
      <li class="tips-item">
        <span>预览地址: <a :href="viewData.demoUrl" target="_blank">{{ viewData.demoUrl }}</a></span>
      </li>
    </ul>
    <hr/>
    <div class="work-desc" id="work-desc" v-html="state.content"/>
  </section>
</template>

<script setup>
import {reactive} from 'vue'

import mdToHtml from '../../utils/util.mdToHtml'

const props = defineProps({
  viewData: {
    type: Object,
    default: () => {
    }
  }
})


const state = reactive({
  content: ''
})
state.content = mdToHtml(props.viewData.content)

</script>

<style scoped>

</style>
