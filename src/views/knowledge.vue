<template>
  <div>
    <shortcut></shortcut>
    <div class="topImg">
      <img src="../assets/img/knowledgeMain.jpg" alt />
    </div>
    <br />
    <br />
    <h3 class="midImg animated bounce">
      <img src="../assets/img/wxr.png" alt />
    </h3>
    <div class="nav">
      <ul>
        <li
          v-for="(item, index) in dogNavArr"
          @click="switchDog(index)"
          :key="index"
        >
          <a :class="[{currentNav: index == selectedDog}]">
            {{item.topTest}}
            <p>{{item.bottomTest}}</p>
          </a>
          <br />
        </li>
      </ul>
    </div>
    <div v-show="selectedDog==0">
       <img src="../assets/img/dog1.jpg" alt="">
    </div>
  <h3 class="midImg animated bounce">
      <img src="../assets/img/mxr.png" alt />
    </h3>
    <div class="nav">
      <ul>
        <li
          v-for="(item, index) in catNavArr"
          @click="switchCat(index)"
          :key="index"
        >
          <a :class="[{currentNav: index == selectedCat}]">
            {{item.topTest}}
            <p>{{item.bottomTest}}</p>
          </a>
          <br />
        </li>
      </ul>
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
      dogNavArr: [
        { topTest: "0-3月龄", bottomTest: "0-3 MONTHS" },
        { topTest: "3-12月龄", bottomTest: "3-12 MONTHS" },
        { topTest: "1-6岁", bottomTest: "1-6 YEARS OLD" },
        { topTest: "6岁以上", bottomTest: "OVER 6 YEARS OF AGE" }
      ],
      catNavArr: [
        { topTest: "0-3月龄", bottomTest: "0-3 MONTHS" },
        { topTest: "3-12月龄", bottomTest: "3-12 MONTHS" },
        { topTest: "1-7岁", bottomTest: "1-7 YEARS OLD" },
        { topTest: "7岁以上", bottomTest: "OVER 7 YEARS OF AGE" }
      ],
      dogNavListArr:[
        {src:'../assets/img/dog1',test:'狗狗呕吐有很多原因，可能有以下几种原因。肠道寄生虫，尤其是蛔虫，严重的时候会钻进胃部被胃酸刺激后挣扎，导致呕吐。所以铲屎官一定要做好定期的体内驱虫，让狗狗免受痛苦。如果狗狗拉稀的同时伴随精神不佳、食欲下降、体温升高，那很有可能就是感染了肠炎。此时首先要止泻消炎，因为幼犬很容易因为拉稀而迅速脱水。症状严重的建议马上送医院治疗。'},
        {src:'../assets/img/dog2.jpg'},
        {src:'../assets/img/egg.jpg'}
      ],
      selectedDog: 0,
      selectedCat: 0,
    };
  },
  methods: {
      switchDog(index){
        this.selectedDog=index;
      },
      switchCat(index){
        this.selectedCat=index;
      }
  }
};
</script>

<style lang="scss" scoped>
.topImg {
  img {
    width: 100%;
  }
}
.midImg {
  img {
    width: 310px;
    margin: 0 auto;
  }
}
.nav {
  // position: absolute;
  // left: 50%;
  // transform: translateX(-50%);
  ul {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    li {
      // float: left;
      // width: 300px;
      // flex:1;
      margin:0 30px;
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
        border-bottom: 3px solid #abcd03;
      }
      a:hover {
        color: #abcd03;
      }
    }
  }
}
.currentNav {
  color: #abcd03 !important;
}
</style>