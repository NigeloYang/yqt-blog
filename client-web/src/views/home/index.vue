<template>
	<section class="home-container" id="home">
		<!--特效渲染页-->
		<Intro @moss="scrollToSection1"/>
		<!--主要内容-->
		<section class="main-warp" id="about">
			<!--主要内容 背景banner-->
			<section class="banner">
				<img class="banner-cover" alt="banner" src="@/assets/img/banner.jpg">
				<div class="banner-content">
					<div class="banner-container">
						<div class="row">
							<div class="row-col-left"></div>
							<div class="row-col-right">
								<div class="banner-text" :style="`transform: translateX(-${state.titleAnimation?0:50}%)`">
									<p class="text-tip">Hi! I'm {{ setting.websiteInfo.name || 'Richard Yang' }}</p>
									<p class="text-main">
										{{ setting.websiteInfo.motto || "Welcome To My Personal Homepage! Let's Go!" }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!--主要内容 展示内容-->
			<section class="main-container">

				<!--主要内容 个人简介-->
				<div class="container-row">
					<div class="container-left">
						<div class="sidebar" :style="`transform: translateY(-${state.titleAnimation?40:0}%)`">
							<div class="sidebar-card">
								<div class="sidebar-avatar">
									<!--									<img class="avatar-img lazy-image " :data-src="`https://www.vickyadrii.my.id/images/about-image.svg`">-->
									<img class="avatar-img lazy-image " src="@/assets/img/yqt.jpg">
								</div>
								<div class="sidebar-name">{{ setting.websiteInfo.occupation }}</div>
								<div class="sidebar-label">{{ setting.websiteInfo.occupationEn }}</div>
								<div class="c-divider c-mb-40"></div>
								<div class="sidebar-social">
									<GitlabOutlined/>
									<a :href="setting.userInfo.github" target="_blank">GitHub<i class="iconfont icon-github"></i></a>
									<a :href="setting.userInfo.gitee" target="_blank">Gitee<i class="iconfont icon-gitee"></i></a>
									<!--									<a href="https://github.com" target="_blank">GitHub<i class="iconfont icon-github"></i></a>-->
									<!--									<a href="https://github.com" target="_blank">Gitee<i class="iconfont icon-gitee"></i></a>-->
								</div>
								<div class="c-divider c-mb-40 c-mt-40"></div>
								<ul class="sidebar-other">
									<li class="other-item">
										<span class="item-label">城市：</span>
										<span class="item-label-light">{{ setting.userInfo.city || '-' }}</span>
									</li>
									<li class="other-item">
										<span class="item-label">年龄：</span>
										<span class="item-label-light">{{ setting.userInfo.age }}</span>
									</li>

									<li class="other-item">
										<span class="item-label">微信/QQ：</span>
									</li>
									<div class="social">
										<!--										<img width="80"-->
										<!--												 class="lazy-image"-->
										<!--												 :data-src="setting.userInfo.wx">-->
										<!--										<img width="80"-->
										<!--												 class="lazy-image"-->
										<!--												 :data-src="setting.userInfo.qq">-->
										<img width="80" class="profile-logo" src="@/assets/img/yqt.jpg">
										<img width="80" class="profile-logo" src="@/assets/img/yqt.jpg">
									</div>
								</ul>
								<div class="c-divider c-mb-40"></div>

								<div class="sidebar-btn" @click="scrollToSection1('contact')">
									<span>在线留言</span>
									<!--                  <i class="iconfont icon-github"></i>-->
								</div>
								<span class="downResume" v-if="setting.userInfo.showResumeUrl" @click="downloadResume">下载简历</span>
							</div>
						</div>
					</div>
					<div class="container-right">
						<div class="container-right-content">
							<div class="brand-card-list">
								<div class="brand-card-item">
									<div class="card-item">
										<h3 class="card-item-title">14+</h3>
										<div class="c-divider"></div>
										<div class="card-item-content">开源项目</div>
									</div>
								</div>
								<div class="brand-card-item">
									<div class="card-item">
										<h3 class="card-item-title">3 +</h3>
										<div class="c-divider"></div>
										<div class="card-item-content">实战经验</div>
									</div>
								</div>
								<div class="brand-card-item">
									<div class="card-item">
										<h3 class="card-item-title">50+</h3>
										<div class="c-divider"></div>
										<div class="card-item-content">项目合作</div>
									</div>
								</div>
							</div>
							<section class="notice ">
								<div class="notice-line">
									<span class="notice-title">📢 NOTICE：</span>
									<div class="notice-desc">
										{{ setting.websiteInfo.notice || '-' }}
									</div>
								</div>
							</section>
							<section class="brand-tips">
								<YqtSectionHeader title="Tips" titleNum="01"/>
								<blockquote class="my-story">
									无趣的人想过着有趣的生活。
									<br/>
									每一步都是奇迹，每一天都是新的起点。
									<!--									<img class="wx-logo lazy-image" width="120"-->
									<!--											 :data-src="setting.websiteInfo.wxMini">-->
									<img class="wx-logo lazy-image" width="120"
											 src="@/assets/img/yqt.jpg"
									>
								</blockquote>
							</section>
						</div>
					</div>
				</div>

				<!--主要内容 重要提示-->
				<section class="notice notice-temp c-mb-40">
					<div class="notice-line">
						<span class="notice-title">公告：</span>
						<div class="notice-desc">{{ setting.websiteInfo.notice || '-' }}
						</div>
					</div>
				</section>

				<!--主要内容 文字介绍-->
				<section class="about">
					<YqtSectionHeader title="Tips" titleNum="02"/>
					<section class="animate-me">
						"<span class="me-text me-text-a">三年前</span>，我踏上了<span class="me-text me-text-b">前端开发</span>的旅程
						，从那时起，对前端技术<span class="me-text me-text-c">充满热情</span>，
						并迫不及待地构建各种<span class="me-text me-text-d">响应式</span>设计和<span class="me-text me-text-c">移动端</span>的开发。我比较注重
						<span class="me-text me-text-e">用户体验</span>、界面设计和<span class="me-text me-text-a">代码质量</span>，并具有<span
						class="me-text me-text-c">优化性能</span>和解决兼容性问题的经验。
						热衷于<span class="me-text me-text-c">创新</span>思维，喜欢思考和
						<span class="me-text me-text-c">解决问题</span>。追求自己的兴趣和激情，让每一天都充满<span class="me-text me-text-c">活力</span>和乐趣
					</section>
				</section>

				<!--主要内容 博客文章展示-->
				<section class="blog c-mt-40 c-mb-40" id="blog">
					<YqtSectionHeader title="Selected Articles" titleNum="03"/>
					<ArticleSection/>
				</section>

				<!--主要内容 联系模块-->
				<section class="connect c-mt-40 c-mb-40" id="contact">
					<YqtSectionHeader title="Contact Me" titleNum="04"/>
					<p class="message-tips">留下你的足迹，让我知道你在这里看过我的留言板。</p>
					<div class="connect-bos">
						<div class="contact-form">
							<YqtForm @submitForm="submitMessage"/>
						</div>
						<ul class="contact-basic">
							<li class="basic-item" v-for="item in state.messageList" :key="item._id">
								<a-avatar :size="40" :src="item.userInfo[0].avatar" alt="匿名"/>
								<a-avatar :size="40" v-if="!item.userInfo[0].avatar">
									<template #icon>
										<i style="font-size:1.6rem" class="iconfont icon-customer-bussinessmam"></i>
									</template>
								</a-avatar>
								<div class="item-r">
									<p class="r-t">
										<span class="r-t-name">{{ item.userInfo[0].nickname }}</span>
										<span class="author" v-if="item.userInfo[0].username==='admin'"></span>
										<span class="r-t-time">{{ TimeUtils.formatRelativeTime(item.createdAt) }}</span>
									</p>
								</div>
							</li>
							<li class="more-msg" @click="goToPage('/contact')">
								<i class="iconfont icon-click"></i> 查看更多
							</li>
						</ul>
					</div>
				</section>

			</section>
		</section>

		<!--地理位置模块-->
		<WorldMap/>

		<YqtModal :minWidth="350" :show="state.show.work" title="项目详情" key="ViewUserInfo" @close="close">
			<WorkDetail :viewData="state.viewData"></WorkDetail>
		</YqtModal>

	</section>
</template>

<script setup>
import {onMounted, onBeforeUnmount, nextTick, watch, reactive} from 'vue';
import {useRouter} from 'vue-router'

import YqtSectionHeader from "../../components/common/YqtSectionHeader.vue"
import YqtForm from "../../components/common/YqtForm.vue"
import YqtModal from "../../components/common/YqtModal.vue"
import WorkDetail from "../../components/common/WorkDetail.vue"

import Intro from "./components/intro.vue"
import ArticleSection from "./components/ArticleSection.vue"
import WorldMap from "./components/WorldMap.vue"

import {goToPage} from "../../utils/util.router";
import lazyLoadImages from "../../utils/util.lazyLoad";
import {TimeUtils} from "../../utils/util.time";
import observeAndAnimate from "../../utils/util.viewportObserve";

import {useMenusStore} from '../../stores/menus'

import {portfoliosList} from "../../api/modules/api.portfolios";
import {messagesCreate, messagesList} from "../../api/modules/api.messages";

import setting from "../../setting"

const router = useRouter()
const menusAction = useMenusStore()

const state = reactive({
	scrollHeight: 0,
	bannerWidth: 100,
	titleAnimation: true,
	textAnimation: false,
	show: {
		work: false
	},
	portfoliosQuery: {
		params: {
			recommended: true,
			status: true,
		},
		pagination: {
			current: 1,
			pageSize: 5,
		},
	},
	portfoliosData: [],
	viewData: {},
	messageQuery: {
		pagination: {
			current: 1,
			pageSize: 5,
		},
	},
	messageList: []
})

// 数据更新后使用 nextTick 来确保在 DOM 更新后执行 lazyLoadImages 方法
watch(() => state.portfoliosData, () => {
	nextTick(() => {
		lazyLoadImages();
	})
});

const scrollToSection1 = (id) => {
	const dom = document.getElementById(id)
	dom.scrollIntoView({behavior: 'smooth'});
}

watch(() => menusAction.page, (val) => {
	if (val) {
		scrollToSection1(val)
	}
})

const downloadResume = () => {
	alert('抱歉！功能正在开发中...')
}

const submitMessage = (form) => {
	messagesCreate(form).then(res => {
		if (res.status) {
			let info = {
				name: form.name,
				email: form.email,
				website: form.website
			}
			localStorage.setItem('YQT-CLIENT-USERINFO', JSON.stringify(info))
			getMessageList()
		}
	})
}

const getMessageList = () => {
	messagesList(state.messageQuery).then(res => {
		state.messageList = res.data.result
	})
}

getMessageList()

const handleScroll = (e) => {
	// 滚动事件处理逻辑
	state.titleAnimation = window.scrollY - window.innerHeight / 2.2 > 0;
};

const getPortfolioList = () => {
	portfoliosList(state.portfoliosQuery).then(res => {
		state.portfoliosData = res.data.result || []
	})
}

getPortfolioList()

onMounted(() => {
	window.addEventListener('scroll', handleScroll);

	observeAndAnimate('.news-block-two', (element) => {
		// 自定义动画效果
		element.style.opacity = 1;
		element.style.transform = 'translateX(0px)';
	});

	observeAndAnimate('.box-item', (element) => {
		// 自定义动画效果
		element.style.opacity = 1;
		element.style.transform = 'translateY(0px)';
	});

	// 懒加载图片
	lazyLoadImages();

})

onBeforeUnmount(() => {
	window.removeEventListener('scroll', handleScroll);
});

</script>

<style scoped lang="scss">
@import "style/index";
</style>
