<template>
  <div>
    <shortcut class="chortcut"></shortcut>
    <div class="topImg">
      <img src="../assets/img/consign_logo.jpg" alt />
      <div class="transport_nav">
        <ul>
          <li v-for="(item, index) in transportNavArr" @click="switchCss(index)" :key="index">
            <a :class="[{currentNav: index == showDetail}]">
              {{item.topTest}}
              <p>{{item.bottomTest}}</p>
            </a>
            <br />
          </li>
        </ul>
        <div class="nav_content">
          <div v-show="showDetail==0">
              
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
        { topTest: "宠物托运", bottomTest: " PET RELOCATION" },
        { topTest: "宠物运输保险", bottomTest: "PET  INSURANCE" },
        { topTest: "其他", bottomTest: "OTHER" }
      ],
      showDetail: 0
    };
  },
  methods: {
    switchCss(index) {
      this.showDetail = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.topImg {
  img {
    width: 100%;
  }
  .transport_nav {
    // position: absolute;
    // left: 50%;
    // transform: translateX(-50%);
    ul {
      padding: 0 5%;
      width: 100%;
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      li {
        // float: left;
        // width: 300px;
        // flex:1;
        margin: 0 30px;
        text-align: center;
        a {
          cursor: pointer;
          display: block;
          // width: 205px;
          // height: 27px;
          font-size: 22px;
          // line-height: 27px;
          font-weight: 700;
          color: #222;
          // text-align: center;
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
}
</style>