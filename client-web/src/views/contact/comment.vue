<template>
  <section class="comment" v-if="comment.userInfo.length">
    <a-comment :id="'comment-'+comment._id">
      <template #actions>
        <span>来自{{ comment.userInfo[0].platform || '未知' }}</span>
        <template v-if="!comment.toUser">
          <span :class="{active:state.likeActive}" @click="likeComment(comment._id)">
            赞同({{ comment.likeNum || 0 }})
          </span>
          <span :class="{active:state.opposeActive}" @click="opposeComment(comment._id)">
            反对({{ comment.opposeNum || 0 }})
          </span>
        </template>
        <span @click="handleReply">回复</span>
      </template>
      <template #author>
        <!--没有回复信息-->
        <template v-if="!comment.toUser">
          <a-popover v-if="comment.userInfo[0].website">
            <template #content>
              <p>点击访问 {{ comment.userInfo[0].nickname }} 的主页</p>
            </template>
            <a :href="comment.userInfo[0].website" target="_blank">
              <span class="nickname">{{ comment.userInfo[0].nickname }}</span>
              <span class="author" v-if="comment.userInfo[0].username === 'admin'"></span>
            </a>
          </a-popover>
          <a v-else :href="comment.userInfo[0].website" target="_blank">
            <span class="nickname">{{ comment.userInfo[0].nickname }}</span>
            <span class="author" v-if="comment.userInfo[0].username === 'admin'"></span>
          </a>
        </template>
        <template v-if="comment.toUser">
          <template v-if="comment.userInfo[0].website">
            <a-popover>
              <template #content>
                <p>点击访问 {{ comment.userInfo[0].nickname }} 的主页</p>
              </template>
              <a :href="comment.userInfo[0].website" target="_blank">
                <span class="nickname">{{ comment.userInfo[0].nickname }}</span>
                <span class="author" v-if="comment.userInfo[0].username === 'admin'"></span>
              </a>
            </a-popover>
            @
            <a-popover>
              <template #content>
                <p>点击访问 {{ comment.toUserInfo[0].nickname }} 的主页</p>
              </template>
              <a :href="comment.toUserInfo[0].website" target="_blank">
                <span class="nickname">{{ comment.toUserInfo[0].nickname }}</span>
                <span class="author" v-if="comment.toUserInfo[0].username === 'admin'"></span>
              </a>
            </a-popover>
          </template>
          <template v-else>
            <a :href="comment.userInfo[0].website" target="_blank">
              <span class="nickname">{{ comment.userInfo[0].nickname }}</span>
            </a>
            <span class="author" v-if="comment.userInfo[0].username === 'admin'"></span>
            @
            <a :href="comment.toUserInfo[0].website" target="_blank">
              <span class="nickname">{{ comment.toUserInfo[0].nickname }}</span>
              <span class="author" v-if="comment.toUserInfo[0].username === 'admin'"></span>
            </a>
          </template>
        </template>
        <div class="date">在 {{ TimeUtils.formatRelativeTime(comment.createdAt) }} 说:</div>
      </template>
      <template #avatar>
        <a-image :previewMask="false" :width="40" :src="comment.userInfo[0].avatar" alt="匿名"/>
      </template>
      <template #content>
        <p>
          {{ comment.content }}
        </p>
      </template>
      <template v-if="comment.toUser">
        <div class="reply-box">
          <slot/>
        </div>
        <YqtForm v-if="state.show.replies" @submitForm="submitReply"/>
      </template>
      <template v-if="!comment.toUser">
        <YqtForm v-if="state.show.replies" @submitForm="submitReply"/>
        <div class="reply-box">
          <slot/>
        </div>
      </template>
    </a-comment>
  </section>
</template>

<script setup>
import {reactive} from "vue";
import YqtForm from "@/components/common/YqtForm.vue";

import {TimeUtils} from "@/utils/util.time";
import {getCookie} from "@/utils/util.cookie";

const props = defineProps({
  comment: {
    type: Object
  },
  pid: {
    type: String
  }
})

const state = reactive({
  show: {
    replies: false
  },
  likeActive: getCookie(`comment-like-${props.comment._id}`),
  opposeActive: getCookie(`comment-oppose-${props.comment._id}`)
})

const emits = defineEmits(['reply', 'like', 'oppose'])

const likeComment = (id) => {
  if (state.likeActive) return
  state.likeActive = true
  emits('like', id)
}

const opposeComment = (id) => {
  if (state.opposeActive) return
  state.opposeActive = true
  emits('oppose', id)
}

const handleReply = () => {
  state.show.replies = !state.show.replies
}

const submitReply = (form) => {
  let newInfo = {...props.comment, pid: props.pid}
  emits('reply', [newInfo, form])
}
</script>

<style scoped lang="scss">
.comment {
  margin-bottom: 1rem;

  .active {
    color: #b60101;
  }

  .nickname {
    font-weight: 600;
    font-size: .9rem;
  }

  .date {
    font-size: .7rem;
  }

  /*.reply-box {*/
  /*    height: 150px;*/
  /*    overflow: hidden;*/
  /*    transition: all .3s linear;*/
  /*}*/
  .reply-box-active {
    height: auto;
    overflow: hidden;
  }

  .author:after {
    content: '管理员';
    background: #03658c;
    color: #FFF;
    font-size: 12px;
    padding: 3px 5px;
    font-weight: 700;
    margin-left: 10px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
}

.ant-comment-content-author {
  .ant-comment-content-author-name {

  }

}

.ant-comment-avatar {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>