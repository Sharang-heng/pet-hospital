<template>
  <div class="menu_bar">
    <div class="menu_logo">
      <img src="../assets/img/logo.png" alt />
      <!-- <span class="logo_text">爱宠机密</span> -->
    </div>
    <div class="menu_text">
      <div>
        <ul class="nav_item">
            <li>
            <a href="#" @click="toHome">首页</a>
          </li>
          <li>
            <a href="#"  @click="toDoctor">宠物医生</a>
          </li>
          <li>
            <a href="#" @click="toKnowledge">宠物知识</a>
          </li>
          <li>
            <a href="#"  @click="toClone">宠物克隆</a>
          </li>
          <li>
            <a href="#" @click="toFuneral">宠物殡葬</a>
          </li>
          <li>
            <a href="#" @click="toPetCare">护理/美容</a>
          </li>
          <!-- <li>
            <a href="#" @click="toWalkDog">遛狗</a>
          </li> -->
          <li>
            <a @click="toTransport">宠物托运</a>
          </li>
          <li>
            <a>更多</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
     toWalkDog(){
      this.$router.push('/walkTheDog')
    },
    toHome(){
      this.$router.push('/home');
    },
    toDoctor(){
      this.$router.push('/doctor');
    },
    toKnowledge(){
      this.$router.push('/knowledge');
    },
    toClone(){
      this.$router.push('/clone');
    },
     toFuneral(){
      this.$router.push('/petFuneral');
    },
    toPetCare(){
      this.$router.push('/petCare');
    },
    toTransport(){
      this.$router.push('/petTransport');
    }
  }
};
</script>

<style lang="scss" scoped>
.menu_bar {
  width: 100%;
  display: flex;
  justify-content:space-between;
  background-color: #0f1925;
  height: 60px;
  //导航栏的logo
  .menu_logo {
    img {
      height: 60px;
      margin-left: 75px;
    }
    .logo_text{
        display: inline;
    }
  }
  //导航栏的文字
  .menu_text {
    .nav_item {
      li {
        //让li都在同一列，不需要使用浮动来实现
        display: inline;
        a {
          font-size: 15px;
          font-family:Microsoft YaHei;
          font-weight: 550;
          color:rgba(255, 255, 255, 0.966);
          line-height: 60px;
          cursor: pointer;
          padding: 0 20px;
        }
        a:hover {
            color: dodgerblue;
        }
      }
      li:last-child{
        margin-right: 55px;
    }
    }
  }
}
</style>