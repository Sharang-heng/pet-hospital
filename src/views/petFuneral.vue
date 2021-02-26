<template>
  <div class="container">
    <shortcut class="chortcut"></shortcut>
    <div class="logo"></div>
    <div class="middle">
      <p>宠物善终服务</p>
    </div>
    <div class="box wow animated bounceIn midImg">
      <div class="big_box">
        <div class="bgc_box">
          <img src="../assets/img/f1.jpg" alt />
        </div>
      </div>
      <div class="big_box">
        <div class="bgc_box">
          <img src="../assets/img/f2.jpg" alt />
        </div>
      </div>
      <div class="big_box">
        <div class="bgc_box">
          <img src="../assets/img/f3.jpg" alt />
        </div>
      </div>
      <div class="big_box">
        <div class="bgc_box">
          <img src="../assets/img/f4.jpg" alt />
        </div>
      </div>
    </div>
    <div class="about">
      <img src="../assets/img/about.jpg" alt="">
      <!-- <img src="../assets/img/about2.jpg" alt=""> -->
    </div>
    <div class="about2">
      <!-- <img src="../assets/img/about.jpg" alt=""> -->
      <img src="../assets/img/about2.jpg" alt="">
    </div>
    <div class="bottom_container">
      <div class="order_title">
        <p>在线预约</p>
      </div>
      <div class="orderForm">
        <div class="detail_msg">
          <li>
            <input v-model="name" placeholder="您的姓名" class="input_text" />
          </li>
          <li>
            <input v-model="mail" placeholder="电子邮箱" class="input_text" />
          </li>
          <li>
            <input v-model="phone" placeholder="联系方式" class="input_text" />
          </li>
        </div>
        <div class="area_container">
          <input type="textarea" :rows="2" placeholder="留言" v-model="textarea" class="input_area" />
        </div>
        <div class="button_container">
          <el-button type="primary" round class="button" @click="orderFunal">预约</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shortcut from "../components/shortcut";
// import { log } from 'util';
export default {
  components: {
    shortcut: shortcut
  },
  data() {
    return {
      name: "",
      mail: "",
      phone: "",
      textarea: "",
      orderEnity: {
        customerName: "",
        email: "",
        phoneNumber: "",
        message: ""
      }
    };
  },
  methods: {
    async orderFunal() {
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone)) {
        return this.$message.error("手机号有误，请输入正确格式的手机号！");
      }
      if (!/^([a-zA-Z]|[0-9])(\w)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.mail)) {
        return this.$message.error("邮箱格式有误，请输入正确格式的邮箱！");
      }
      this.orderEnity.customerName = this.name;
      this.orderEnity.email = this.mail;
      this.orderEnity.phoneNumber = this.phone;
      this.orderEnity.message = this.textarea;
      const { data: res } = await this.$http.post(
        "/funeral/order",
        JSON.stringify(this.orderEnity)
      );
      if (res.code == 200) {
        this.$message.success("预约成功！请保持邮箱和手机号畅通");
        this.$router.push("/home");
      } else {
        return this.$message.error("预约失败！");
      }
      console.log(res);
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  background: url("../assets/img/funeralLogo.jpg");
  background-repeat: no-repeat; //不重复
  background-size: 100% 150%;
  height: 670px;
}

.about {
  display: flex;
  //  flex-direction: row
  justify-content: center

}

.about2{
  display: flex;
  //  flex-direction: row
  justify-content: center;
  width: 100%;
  img{
    width: 100%;
  }
}

.box {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  overflow: hidden;
  .big_box {
    width: 25%;
    padding: 0 15px;
    height: 360px;
    overflow: hidden;
  }
  .big_box:hover img {
    transform: scale(1.2);
    filter: brightness(70%);
    //   overflow: hidden;
  }
  .bgc_box {
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
      width: 100%;
      transition: all ease 0.5s;
    }
  }
}
.container {
  width: 100%;
  .middle {
    display: flex;
    justify-content: center;
    font-size: 28px;
    color: #353535;
    margin: 50px 0;
    padding: 80px 0 0 0;
  }
  .bottom_container {
    background-color: #fefef3;
    .order_title {
      display: flex;
      justify-content: center;
      font-size: 28px;
      color: #353535;
      margin: 0 0 80px 0;
      padding: 80px 0 0 0;
    }
    .orderForm {
      width: 100%;
      .detail_msg {
        padding: 0 5%;
        display: flex;
        justify-content: space-between;
        width: 100%;
        .input_text {
          width: 300px;
          border: none;
          border-bottom: 1px solid #ababab;
          font-size: 18px;
          color: #ababab;
          padding: 0 0 5px 0;
          outline: none;
          background-color: #fefef3;
        }
      }
      .area_container {
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
}
</style>