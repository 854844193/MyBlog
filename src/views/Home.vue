<template>
  <div class="home">
    <video
      :style="fixStyle"
      autoplay
      loop
      preload
      muted
      x-webkit-airplay="true"
      airplay="true"
      webkit-playsinline="true"
      playsinline="true"
      class="fillWidth"
      v-on:canplay="canplay"
    >
      <source :src="videoUrl" type="video/mp4" />
      浏览器不支持 video 标签，建议升级浏览器。
      <source :src="videoUrl" type="video/webm" />
      浏览器不支持 video 标签，建议升级浏览器。
    </video>
    <HeaderNav />
    <div class="content">
      <div class="contentLogo">
        <img src="../assets/images/lawyer.png" alt="HongKuanglogo" />
      </div>
      <div class="contentTitle">始于初心，不负重托</div>
      <div class="contentTxt">
        <p>珍惜每一份信任，忠于每一份委托</p>
        <p>为客服提供优质、专业高效的法律服务</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  font-family: STHeiti;
  color: aliceblue;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

/* .home video {
  z-index: 0;
} */

.content {
  width: 100%;
  padding: 0.625rem 1.875rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.content .contentLogo {
  width: 25rem;
  height: 6.25rem;
}
.contentLogo img {
  width: 100%;
  height: 100%;
}
.content .contentTitle {
  margin: 3.125rem 0;
  font-size: 3.75rem;
}
.content .contentTxt {
  text-align: center;
  font-size: 1.75rem;
}
</style>

<script>
import HeaderNav from "../components/HeaderNav";
export default {
  name: "Home",
  components: {
    HeaderNav,
  },
  data() {
    return {
      vedioCanPlay: false,
      fixStyle: "",
      activeIndex: 0,
      videoUrl: require("../assets/video/bgVideo.mp4"),
    };
  },
  methods: {
    canplay() {
      this.vedioCanPlay = true;
    },
    changeIndex(i) {
      console.log(this.activeIndex);
      console.log(i);
      this.activeIndex = i;
      console.log(this.activeIndex);
    },
  },
  mounted() {
    window.onresize = () => {
      const windowWidth = document.body.clientWidth;
      const windowHeight = document.body.clientHeight;
      const windowAspectRatio = windowHeight / windowWidth;
      let videoWidth;
      let videoHeight;
      if (windowAspectRatio < 0.5625) {
        videoWidth = windowWidth;
        videoHeight = videoWidth * 0.5625;
        this.fixStyle = {
          height: windowWidth * 0.5625 + "px",
          width: windowWidth + "px",
          "margin-bottom": (windowHeight - videoHeight) / 2 + "px",
          "margin-left": "initial",
        };
      } else {
        videoHeight = windowHeight;
        videoWidth = videoHeight / 0.5625;
        this.fixStyle = {
          height: windowHeight + "px",
          width: windowHeight / 0.5625 + "px",
          "margin-left": (windowWidth - videoWidth) / 2 + "px",
          "margin-bottom": "initial",
        };
      }
    };
    window.onresize();
  },
};
</script>
