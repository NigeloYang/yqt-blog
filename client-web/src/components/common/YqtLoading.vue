<script setup>
import {computed} from "vue";
import {useLoadingStore} from "../../stores/loading";

const loadingStore = useLoadingStore()
const  loadingState = computed(() => {
	return loadingStore.loading
})
</script>

<template>
	<div id="loading" v-show="loadingState">
		<div class="yqt-loading"></div>
	</div>
</template>



<style scoped  lang="scss">
#loading {
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #F9F9F9;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
