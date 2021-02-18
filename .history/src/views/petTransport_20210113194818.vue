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
            <div>
              <div class="title_text">详细查询</div>
              <input
                type="text"
                class="input_class"
                placeholder="请输入手机号"
              />
              <el-button type="primary" class="send_button">主要按钮</el-button>
            </div>
            <div  class="stepOne">
              <el-steps :active="2" align-center>
                <el-step
                  title="步骤1"
                  description="这是一段很长很长很长的描述性文字"
                ></el-step>
                <el-step
                  title="步骤2"
                  description="这是一段很长很长很长的描述性文字"
                ></el-step>
                <el-step
                  title="步骤3"
                  description="这是一段很长很长很长的描述性文字"
                ></el-step>
                <el-step
                  title="步骤4"
                  description="这是一段很长很长很长的描述性文字"
                ></el-step>
              </el-steps>
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
.is-finish {
    color: #f6ab00 ;
    border-color: #f6ab00 ;
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
.stepOne{
 .el-step.is-horizontal.stepActive{
   .el-step__head.is-finish{
     .el-step__line{
       // 当前步骤数横线样式设置
       .el-step__line-inner{
         width: 50% !important;
         border-width: 1px !important;
       }
     }
     // 当前步骤数圆圈样式设置
     .el-step__icon.is-text{
       background: #409eff;
       color:#fff;
     }
   }
 }
}
</style>