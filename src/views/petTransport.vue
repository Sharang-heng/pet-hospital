<template>
  <div>
    <shortcut class="chortcut"></shortcut>
    <div class="topImg">
      <img src="../assets/img/consign_logo.jpg" alt />
      <div class="transport_nav">
        <ul>
          <li v-for="(item, index) in transportNavArr" @click="switchCss(index)" :key="index">
            <a :class="[{ currentNav: index == showDetail }]">
              {{ item.topTest }}
              <p>{{ item.bottomTest }}</p>
            </a>
            <br />
          </li>
        </ul>
        <div class="nav_content">
          <div v-show="showDetail == 0">
            <div>
              <div class="title_text">详细查询</div>
              <input type="text" class="input_class" placeholder="请输入手机号" v-model="phone"/>
              <el-button type="primary" class="send_button" @click="check">查询</el-button>
            </div>
            <div class="stepOne" v-show="showStep">
              <el-steps :active="active" align-center>
                <el-step title="您没有在运输的宠物或您的爱宠还在准备运输中" description="不要着急哦！"></el-step>
                <el-step title="您的爱宠正在被运往目的地" description="很快就送达啦~不要着急哦"></el-step>
                <el-step title="您的爱宠已经到达目的地啦" description="快去接它吧~"></el-step>
              </el-steps>
            </div>
          </div>
          <div v-show="showDetail == 1">
            <div class="bottom_container">
              <div class="order_title">
                <p>在线预约</p>
              </div>
              <div class="orderForm">
                <div class="detail_msg">
                  <li>
                    <input v-model="orderEnity.customerName" placeholder="您的姓名" class="input_text" />
                  </li>

                  <li>
                    <input v-model="orderEnity.phoneNumber" placeholder="联系方式" class="input_text" />
                  </li>
                </div>
                <div class="area_container">
                  <input
                    type="textarea"
                    :rows="2"
                    placeholder="留言"
                    v-model="orderEnity.message"
                    class="input_area"
                  />
                </div>
                <div class="area_container">
                  <input
                    type="textarea"
                    :rows="2"
                    placeholder="目的地"
                    v-model="orderEnity.destination"
                    class="input_area"
                  />
                </div>
                <div class="button_container">
                  <el-button type="primary" round class="button" @click="orderTransport">预约</el-button>
                </div>
              </div>
            </div>
          </div>
          <div v-show="showDetail == 2">
            <div class="bottom_container">
              <div class="order_title">
                <p>在线预约</p>
              </div>
              <div class="orderForm">
                <div class="detail_msg">
                  <li>
                    <input v-model="orderEnity.customerName" placeholder="您的姓名" class="input_text" />
                  </li>

                  <li>
                    <input v-model="orderEnity.phoneNumber" placeholder="联系方式" class="input_text" />
                  </li>
                </div>
                <div class="area_container">
                  <input
                    type="textarea"
                    :rows="2"
                    placeholder="留言"
                    v-model="orderEnity.message"
                    class="input_area"
                  />
                </div>
                <div class="area_container">
                  <input
                    type="textarea"
                    :rows="2"
                    placeholder="目的地"
                    v-model="orderEnity.destination"
                    class="input_area"
                  />
                </div>
                <div class="button_container">
                  <el-button type="primary" round class="button" @click="orderTransport">预约</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shortcut from "../components/shortcut";
export default {
  components: {
    shortcut: shortcut
  },
  data() {
    return {
      transportNavArr: [
        { topTest: "运单查询", bottomTest: "BILL OF LADING INQUIRY" },
        { topTest: "宠物国内托运", bottomTest: " PET RELOCATION" },
        { topTest: "宠物国际托运", bottomTest: "PET  RELOCATION" }
      ],
      showStep: false,
      showDetail: 0,
      active: 1,
      orderEnity: {
        customerName: "",
        phoneNumber: "",
        destination: "",
        message: "",
        transport: ""
      },
      phone:''
    };
  },
  methods: {
    switchCss(index) {
      this.showDetail = index;
      this.orderEnity.transport='';
      this.orderEnity.customerName='';
      this.orderEnity.destination='';
      this.orderEnity.message=''
    },
    async check() {
      if(!this.phone){
        return this.$message.error("请输入需要查询的手机号！");
      }
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone)) {
        return this.$message.error("手机号有误，请输入正确格式的手机号！");
      }
      this.showStep = true;
      var searchEntity={
        phone:''
      };
      searchEntity.phone=this.phone
       const { data: res } = await this.$http.post(
        "/transportorder/getState",
        JSON.stringify(searchEntity)
      );
      this.active=res.data;
      console.log(res)
    },
    async orderTransport() {
      if (this.showDetail == 1) {
        this.orderEnity.transport = 1;
      } else {
        this.orderEnity.transport = 2;
      }
      if (!this.orderEnity.customerName) {
        return this.$message.error("请输入您的姓名！");
      } else if (!this.orderEnity.phoneNumber) {
        return this.$message.error("请输入您的联系方式！");
      } else if (!this.orderEnity.destination) {
        return this.$message.error("请输入要寄往的目的地！");
      }
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.orderEnity.phoneNumber)) {
        return this.$message.error("手机号有误，请输入正确格式的手机号！");
      }
      const { data: res } = await this.$http.post(
        "/transportorder/order",
        JSON.stringify(this.orderEnity)
      );
      if (res.code == 200) {
        this.$message.success("预约成功！");
        // this.$router.push("/petTransport");
        this.showDetail=0;
      } else {
        return this.$message.error("预约失败！");
      }
      // this.canOrderTime=res.data
      console.log(res);
    }
  }
};
</script>

<style lang="scss" scoped>
.is-finish {
  color: #f6ab00;
  border-color: #f6ab00;
}
.topImg {
  img {
    width: 100%;
  }
  .transport_nav {
    ul {
      padding: 0 10%;
      width: 100%;
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      li {
        margin: 0 30px;
        text-align: center;
        a {
          cursor: pointer;
          display: block;
          font-size: 22px;
          font-weight: 700;
          color: #222;
        }
        p {
          margin-top: 5px;
          width: 205px;
          font-size: 14px;
          // text-align: center;
          // color: #abcd03;
          border-bottom: 3px solid #f6ab00;
        }
        a:hover {
          color: #f6ab00;
        }
      }
    }
  }
  .currentNav {
    color: #f6ab00 !important;
  }
  .nav_content {
    padding: 20px 10%;
    .title_text {
      color: #666;
      font-size: 18px;
      margin: 0 0 10px 0;
    }

    .input_class {
      width: 400px;
      height: 38px;
      margin: 0 20px 0 0;
      border: 1px solid #f0f0f0;
      outline: none;
      padding: 0 0 0 5px;
    }

    .send_button {
      background-color: #f6ab00;
      border: #f6ab00;
      border-radius: 0;
      width: 200px;
    }
  }
}
.stepOne {
  margin: 80px 0 0 0;
  .el-step.is-horizontal.stepActive {
    .el-step__head.is-finish {
      .el-step__line {
        // 当前步骤数横线样式设置
        .el-step__line-inner {
          width: 50% !important;
          border-width: 1px !important;
        }
      }
      // 当前步骤数圆圈样式设置
      .el-step__icon.is-text {
        background: #409eff;
        color: #fff;
      }
    }
  }
}
.bottom_container {
  background-color: #fefef3;
  .order_title {
    display: flex;
    justify-content: center;
    font-size: 28px;
    color: #353535;
    // margin: 80px 0;
    // padding: 80px 0 0 0;
  }
  .orderForm {
    width: 100%;
    margin-top: 50px;
    .detail_msg {
      padding: 0 5%;
      display: flex;
      justify-content: flex-start;
      width: 100%;
      .input_text {
        width: 300px;
        border: none;
        border-bottom: 1px solid #ababab;
        font-size: 16px;
        color: #ababab;
        padding: 0 0 5px 0;
        margin-right: 100px;
        outline: none;
        background-color: #fefef3;
      }
    }
    .area_container {
      // background-color: #fefef3;
      padding: 0 5%;
      margin: 40px 0 0 0;
      .input_area {
        width: 100%;
        border: none;
        border-bottom: 1px solid #ababab;
        font-size: 16px;
        color: #ababab;
        padding: 0 0 5px 0;
        outline: none;
        background-color: #fefef3;
      }
    }
    .button_container {
      display: flex;
      justify-content: center;
      padding: 40px 0 40px 0;
      .button {
        background-color: #f3be04;
        border: #f3be04;
        width: 200px;
      }
    }
  }
}
</style>