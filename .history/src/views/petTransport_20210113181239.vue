<template>
  <div>
    <shortcut class="chortcut"></shortcut>
    <div class="topImg">
      <img src="../assets/img/consign_logo.jpg" alt />
      <div class="transport_nav">
        <ul>
          <li
            v-for="(item, index) in transportNavArr"
            @click="switchCss(index)"
            :key="index"
          >
            <a :class="[{ currentNav: index == showDetail }]">
              {{ item.topTest }}
              <p>{{ item.bottomTest }}</p>
            </a>
            <br />
          </li>
        </ul>
        <div class="nav_content">
          <div v-show="showDetail == 0">
            <div class="title_text">详细查询</div>
            <input type="text" class="input_class" placeholder="请输入手机号" />
            <el-button type="primary" class="send_button">主要按钮</el-button>
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
    shortcut: shortcut,
  },
  data() {
    return {
      transportNavArr: [
        { topTest: "运单查询", bottomTest: "BILL OF LADING INQUIRY" },
        { topTest: "宠物国内托运", bottomTest: " PET RELOCATION" },
        { topTest: "宠物国际托运", bottomTest: "PET  RELOCATION" },
        { topTest: "宠物运输保险", bottomTest: "PET  INSURANCE" },
      ],
      showDetail: 0,
    };
  },
  methods: {
    switchCss(index) {
      this.showDetail = index;
    },
  },
};
</script>

<style lang="scss" scoped>
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
    .title_text{
      color: #666;
      font-size: 18px;
    }
    
    .input_class{
      width: 400px;
      height: 40px;
    }

    .send_button {
      background-color: #F6AB00;
      border: #F6AB00;
      border-radius: 0;
      width: 200px;
    }
  }
}
</style>