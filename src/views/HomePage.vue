<template>
  <div class="home">
    <homeShort></homeShort>
    <!-- <a :href="downUrl" target="_blank" :download="downNm">点击此处下载简历模板</a> -->
    <div class="videos">
      <video src="../assets/video/homepage.mp4" loop muted autoplay></video>
    </div>
    <div class="introduce">
      <p>爱宠机密</p>
      <p>爱宠机密宠物医院是一家以宠物医疗服务为主营的大型综合性系统</p>
      <p>
        业务涵盖：宠物医疗保健、实验室诊断、宠物美容造型、宠物商品贸易、宠物供应链、宠物医疗器械、远程互联网诊断、医疗信息化平台建设、兽医继续教育、宠物美容学校、
        <br />宠物文化传播等，覆盖了宠物产业链的主要环节
      </p>
    </div>
  </div>
</template>

<script>
import shortcut from "../components/shortcut";
import homeShort from "../components/home_short";
export default {
  data() {
    return {
      downUrl: "./resume/resume.doc",
      downNm: "resume.doc"
    };
  },
  components: {
    homeShort: homeShort
  }
};
</script>

<style lang="scss" scoped>

.home {
  // height: 100%;
  // background-color: blue;
  // position: relative;
  .videos {
    background-color:rgba(1, 36, 63, 0.2);
    // 为什么设置成absolute就能100%
    
    position: absolute;
    width: 100%;
    height: 100%;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.8;
    }
  }
  .introduce {
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%, -50%);
    p:first-child {
      font-size: 36px;
      color: black;
      text-align: center;
      font-family: STXinwei;
    }
    p:nth-child(2){
      font-size: 22px;
      font-family: 'DFQingGothicSC24-W4'!important;
      color: aliceblue;
      text-align: center;
      margin-top:10px;
    }
    p:nth-child(3) {
      font-size:14px; 
      font-family: 'DFQingGothicSC24-W4'!important;
      color: aliceblue;
      text-align: center;
    }
  }
}
</style>