<template>
  <div>
    <shortcut class="chortcut"></shortcut>
    <div class="topImg">
      <img src="../assets/img/clone_home.jpg" alt />
    </div>
    <div class="box">
      <div>
        <h3>
          <i>宠物克隆与细胞保存</i>
          <p>Pets and cells</p>
        </h3>
        <ul class="clone_ul">
          <li
            v-for="(item, index) in cloneNavArr"
            @click="switchCssPath(index,item.path)"
            :key="index"
          >
            <a :class="[{currentNav: index == selected}]">
              <i class="iconfont icon-iconfontjiantou5"></i>
              {{item.test}}
            </a>
          </li>
        </ul>
      </div>
      <div class="details">
        <router-view></router-view>
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
      cloneNavArr: [
        { test: "犬/猫克隆服务", path: "/clonedog" },
        { test: "细胞保存服务", path: "/keepsell" },
        { test: "宠物组织保存" ,path: "/keepTissue" },
        { test: "克隆技术" ,path:"/cloneTechnology"},
        { test: "重要提示" ,path:"/importantTip"},
        { test: "常见问题" }
      ],
      selected: 0
    };
  },
  methods: {
    switchCssPath(index, path) {
      this.selected = index;
      this.$router.push({ path: path });
      console.log(this.$router);
    }
  }
};
</script>

<style lang="scss" scoped>
.topImg {
  width: 100%;
  img {
    background: url("../assets/img/clone.jpg") no-repeat;
    width: 100%;
  }
}

.box {
  position: absolute;
  left: 10px;
  display: flex;
  margin-top:30px; 
  justify-content: space-around;
  h3 {
    margin-left: 40px;
    i {
      display: block;
      height: 62px;
      line-height: 62px;
      font-size: 34px;
      color: #37b3c2;
      font-style: normal;
      width: 400px;
    }
    p {
      height: 70px;
      width: 400px;
      line-height: 70px;
      font-size: 40px;
      color: #dddddd;
      font-family: Arial;
      text-transform: uppercase;
    }
  }
  .clone_ul {
    width: 200px;
    li {
      margin-left: 40px;
      cursor: pointer;
      a {
        display: block;
        height: 80px;
        line-height: 80px;
        width: 300px;
        background: #eceded;
        font-size: 16px;
        color: #666666;
        text-indent: 75px;
        margin-bottom: 2px;
        transition: all 0.5s ease 0s;
      }
    }
    li :hover {
      background-color: #37b3c2;
      color: #fff;
    }
  }
}
.currentNav {
  background-color: #37b3c2 !important;
  color: #fff !important;
}
.details {
  // width: 100%;
  position: relative;
}
</style>