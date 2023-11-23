<template>
<div>
	<h1>文章模块开发中</h1>
</div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.yqt-blog-article {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  background-color: #fff;
  margin: 4rem 0;
  min-height: 350px;

  .blog-left {
    width: 35%;
    background-color: rgba(0, 0, 0, 0.5);
    background-image: url(https://blogcdn.dandyweng.com/backgrounds/08.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    transform-style: preserve-3d;
    transition: background-image 2s ease-in-out;
    will-change: transition;

    .blog-l-info {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);

      .info-title {
        color: #fff;
        font-size: 2.1rem;
        font-family: "plantc", "Source Han Serif", serif;
        letter-spacing: 2px;
      }

      .info-title-sub {
        color: #EEEEEE;
      }

      .ban-bred {
        padding: 5px 10px;
        cursor: pointer;
        transition: all .3s linear;

        &:hover {
          color: #ffffff;
        }

      }
    }
  }

  .blog-right {
    width: 65%;
    height: 100%;
  }

  .blog-list {
    margin: 0 auto;
    padding: 1rem 3rem 1rem;

    .blog-item {
      display: flex;
      justify-content: space-between;
      letter-spacing: 1px;
      cursor: pointer;
      opacity: .7;
      transition: all .3s linear;
      margin: 0 auto 2rem;

      &
      :last-child {
        margin-bottom: 0;
      }

      &
      :hover {
        opacity: 1;

        img {
          filter: brightness(1.1);
        }

      }

      .blog-header {
        width: 68%;

        h2 {
          margin-bottom: 20px;
          font-weight: bold;
        }

        .blog-tip {
          padding: 5px 0;
          font-size: .9rem;
          color: #a1a0a0;

          span {
            padding-right: 5px;
            line-height: 2rem;
          }

        }
      }

      .blog-cover {
        width: 30%;
        max-height: 160px;
        // width:260 px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 2px;
          transition: all .3s linear;
          box-shadow: 0 2px 5px rgba(0, 0, 25, 0.1), 0 5px 35px 1px rgba(0, 0, 50, 0.2) inset;
        }

      }

    }
  }

  @media screen and (max-width: 968px) {
    flex-direction: column;
    .blog-left {
      height: 180px;
      width: 100%;
      position: relative;
    }

    .blog-right {
      width: 100%;

      .blog-list {
        padding: 2rem 0 0 0;

        .blog-item {
          flex-direction: column-reverse;
          margin-bottom: 40px;

          .blog-header {
            width: 100%;
          }

          .blog-cover {
            width: 100%;
            height: 160px;
            margin-bottom: 2.5rem;
          }
        }

      }
    }
  }
}
</style>
