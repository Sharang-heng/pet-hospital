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
    <div class="middle">
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
        <input
          type="textarea"
          :rows="2"
          placeholder="留言"
          v-model="textarea"
          class="input_area"
        />
      </div>
      <div>
        <el-button type="primary" round>主要按钮</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import shortcut from "../components/shortcut";
export default {
  components: {
    shortcut: shortcut,
  },
  data() {
    return {
      name: "",
      mail: "",
      phone: "",
      textarea: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  background: url("../assets/img/funeralLogo.jpg");
  background-repeat: no-repeat; //不重复
  background-size: 100% 100%;
  height: 670px;
}
.middle {
  display: flex;
  justify-content: center;
  font-size: 28px;
  color: #353535;
  margin: 80px 0;
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
        font-size: 16px;
        color: #ababab;
        padding: 0 0 5px 0;
        outline: none;
      }
    }
    .area_container {
      padding: 0 5%;
      margin: 40px 0 0 0;
      .input_area {
        width: 80%;
        border: none;
        border-bottom: 1px solid #ababab;
        font-size: 16px;
        color: #ababab;
        padding: 0 0 5px 0;
        outline: none;
      }
    }
  }
}
</style>