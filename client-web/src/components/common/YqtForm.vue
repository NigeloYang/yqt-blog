<template>
	<section class="yqt-form">
		<form @submit="handleSubmit" class="cont-form" id="contact-form" method="POST">
			<div class="row">
				<input type="text" v-model="state.form.name" placeholder="昵称">
				<input type="email" v-model="state.form.email" required="" placeholder="邮箱">
				<input type="text" v-model="state.form.website" placeholder="您的个人站点">
			</div>
			<textarea id="message" v-model="state.form.content" required="" placeholder="留言内容"></textarea>
			<div class="text-center">
				<button type="submit" class="site-btn" data-wow-delay="0.2s" id="send-form">Send Message</button>
			</div>
		</form>
	</section>
</template>

<script setup>
import {ref,reactive} from "vue";

const props = defineProps({
	defaultUser:{
		type:Object
	}
})

const emits = defineEmits(['submit-form'])
const userinfo = localStorage.getItem('YQT-CLIENT-USERINFO')
const state = reactive({
	form:{
		name: '',
		email:'',
		website: '',
		content:''
	}
})

if (userinfo) {
	let info = JSON.stringify(userinfo)
	state.form.name = info
}

const handleSubmit = (event) => {
	event.preventDefault();
	emits('submit-form',state.form)
}
</script>

<style scoped lang="scss">
.yqt-form {
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .cont-form {
    width: 100%;
    background-color: #fff;
    @media screen and (max-width: 768px) {
      padding: 0;
    }

    input {
      width: 100%;
      height: 50px;
      margin-bottom: 30px;
      padding: 10px;
      border: none;
      -webkit-box-shadow: 0 0 90px rgba(0, 0, 0, 0.15);
      box-shadow: 0 0 90px rgba(0, 0, 0, 0.15);
      font-family: "Poppins", sans-serif;

      &:first-child {
        margin-right: 1rem;
      }

    }

    textarea {
      width: 100%;
      height: 150px;
      margin-bottom: 30px;
      padding: 10px;
      border: none;
      -webkit-box-shadow: 0 0 90px rgba(0, 0, 0, 0.15);
      box-shadow: 0 0 90px rgba(0, 0, 0, 0.15);
      font-family: "Poppins", sans-serif;
      line-height: 1.5rem;
    }

    .site-btn {
      position: relative;
      display: inline-block;
      color: #fff;
      padding: 14px 40px;
      border: none;
      font-family: "Poppins", sans-serif;
      line-height: normal;
      text-transform: uppercase;
      border-radius: 50px;
      font-size: 12px;
      letter-spacing: 1px;
      background: #333;
    }
  }
}
</style>
