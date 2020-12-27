<template>
  <div>
    <shortcut class="chortcut"></shortcut>
    <div class="logo"></div>
    <div class="middle">
      <p>宠物善终服务</p>
    </div>
    <div class="box">
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
  </div>
</template>

<script>
import shortcut from "../components/shortcut";
export default {
    components: {
    shortcut: shortcut
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
    margin:80px 0; 
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
  .big_box:hover img{
      transform: scale(1.2);
      filter:brightness(70%);
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
</style>