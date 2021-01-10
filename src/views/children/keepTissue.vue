<template>
  <div>
    <div class="box">
      <img src="../../assets/img/cill.jpg" alt />
      <div>
        <div class="topRight">
          <div>
            <p>希望-组织保存</p>
            <span>HOPE - ORGANIZATION  PRESERVATION</span>
          </div>
          <div class="ser_div">
            <p
              style="height: 66px; color: rgb(55, 179, 194); line-height: 66px; font-size: 16px; font-weight: bold;"
            >宠物特殊组织保存，为您爱宠的未来收藏一份希望。</p>
            <p
              style="color: rgb(102, 102, 102); line-height: 30px; font-size: 14px;"
            >您爱着同时也被爱着，这就是生命里最幸福的事，没有之一。</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3 style="height: 90px; line-height: 90px; font-size: 30px;">组织保存服务流程</h3>
      <div class="ser_li">
        <ul>
          <li v-for="(item, index) in serveList" :key="index">
            <!-- <img :src="item.src" alt /> -->
            <div>
              <h4 class="listTitle">{{item.title}}</h4>
              <p class="listContent">{{item.content}}</p>
              <span v-if="item.title=='预约服务'" class="order" @click="order">预约</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serveList: [
        {
          src: "../../assets/img/ser.jpg",
          title: "预约服务",
          content:
            "您可以通过定点医院、公众号联系或者拨打咨询热线400-616-2206，也可以点击下面链接进行预约："
        },
        {
          src: "../../assets/img/ser1.jpg",
          title: "签订服务协议",
          content:
            "全面了解组织保存服务后，定制克隆服务，我们与您签订服务协议，启动克隆服务"
        },
        {
          src: "../../assets/img/ser2.jpg",
          title: "组织保存样本采集",
          content:
            "用干净干燥的毛巾/纸巾清理组织，保证洁净无灰尘；将清理好的组织放入磨砂自封袋中，封闭袋口；根据信息卡上的内容，填写真实有效的信息。"
        },
        {
          src: "../../assets/img/ser3.jpg",
          title: "保存服务",
          content:
            "将装有组织样本且密的磨砂袋与填好的信息卡装入取样盒中，根据取样盒上的寄送地址将取样盒寄出。我们会根据保存服务进展情况与您及时沟通或者您也可以随时联系我们了解保存的服务进度。"
        },
        {
          src: "../../assets/img/ser4.jpg",
          title: "服务证书",
          content:
            "当您爱宠的保存成功后，我们会颁发给您《组织保存证书》。"
        }
      ]
    };
  },
  methods:{
  order(){
      sessionStorage.setItem("ServiceName", "宠物组织保存")
      this.$router.push('/cloneOrder');
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: space-between;
  img {
    margin-left: 30px;
  }
  .topRight {
    margin: 50px 40px 0 0;
    p {
      display: block;
      height: 50px;
      line-height: 50px;
      font-size: 30px;
    }
    span {
      display: block;
      height: 42px;
      line-height: 42px;
      color: #999999;
      font-size: 16px;
      font-family: Arial;
      text-transform: uppercase;
      border-bottom: 1px solid;
    }
  }
}

h3 {
  margin-left: 30px;
}

.ser_li {
  li {
    margin-bottom: 25px;
    margin-left: 30px;
    width: 70%;
    display: flex;
    justify-content: flex-start;
    .listTitle {
      height: 36px;
      line-height: 36px;
      font-size: 16px;
      font-weight: bold;
      color: #37b3c2;
    }
    .listContent {
      font-size: 14px;
      line-height: 28px;
      color: #666666;
    }
    .order {
      color: #37b3c2;
      font-size: 16px;
      cursor: pointer;
    }
  }
}
</style>