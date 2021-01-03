<template>
  <div>
    <shortcut></shortcut>
    <div class="topImg">
      <img src="../assets/img/knowledgeMain.jpg" alt />
    </div>
    <br />
    <br />
    <h3 class=" wow animated bounceIn midImg ">
      <img src="../assets/img/wxr.png" alt />
    </h3>
    <div class="nav wow animated bounceIn">
      <ul>
        <li v-for="(item, index) in dogNavArr" @click="switchDog(index)" :key="index">
          <a :class="[{currentNav: index == selectedDog}]">
            {{item.topTest}}
            <p>{{item.bottomTest}}</p>
          </a>
          <br />
        </li>
      </ul>
    </div>
    <div v-show="selectedDog==0" class="detail clearfloat wow animated bounceIn">
      <ul>
        <li v-for="(item,index) in threeMonth" :key="index" class="detail_content">
          <div class="big_box">
            <div class="bgc_box">
              <div class="content_top">
                <img :src="item.src" alt class="detail_img" />
              </div>
              <div class="content_bottom">
                <p>{{item.test}}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="selectedDog==1" class="detail clearfloa wow animated bounceIn">
      <ul>
        <li v-for="(item,index) in oneYear" :key="index" class="detail_content">
          <div class="big_box">
            <div class="bgc_box">
              <div class="content_top">
                <img :src="item.src" alt class="detail_img" />
              </div>
              <div class="content_bottom">
                <p>{{item.test}}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="selectedDog==2" class="detail clearfloat wow animated bounceIn">
      <ul>
        <li v-for="(item,index) in sixYear" :key="index" class="detail_content">
          <div class="big_box">
            <div class="bgc_box">
              <div class="content_top">
                <img :src="item.src" alt class="detail_img" />
              </div>
              <div class="content_bottom">
                <p>{{item.test}}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="selectedDog==3" class="detail clearfloat wow animated bounceIn">
      <ul>
        <li v-for="(item,index) in overSixYear" :key="index" class="detail_content">
          <div class="big_box">
            <div class="bgc_box">
              <div class="content_top">
                <img :src="item.src" alt class="detail_img" />
              </div>
              <div class="content_bottom">
                <p>{{item.test}}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <h3 class="midImg wow animated bounceIn">
      <img src="../assets/img/mxr.png" />
    </h3>
     <div class="nav wow animated bounceIn">
      <ul>
        <li v-for="(item, index) in dogNavArr" @click="switchCat(index)" :key="index">
          <a :class="[{currentNav: index == selectedCat}]">
            {{item.topTest}}
            <p>{{item.bottomTest}}</p>
          </a>
          <br />
        </li>
      </ul>
    </div>
    <div v-show="selectedCat==0" class="detail clearfloat wow animated bounceIn">
      <ul>
        <li v-for="(item,index) in threeMonthCat" :key="index" class="detail_content">
          <div class="big_box">
            <div class="bgc_box">
              <div class="content_top">
                <img :src="item.src" alt class="detail_img" />
              </div>
              <div class="content_bottom">
                <p>{{item.test}}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="selectedCat==1" class="detail clearfloa wow animated bounceIn">
      <ul>
        <li v-for="(item,index) in oneYearCat" :key="index" class="detail_content">
          <div class="big_box">
            <div class="bgc_box">
              <div class="content_top">
                <img :src="item.src" alt class="detail_img" />
              </div>
              <div class="content_bottom">
                <p>{{item.test}}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="selectedCat==2" class="detail clearfloat wow animated bounceIn">
      <ul>
        <li v-for="(item,index) in sevenYearCat" :key="index" class="detail_content">
          <div class="big_box">
            <div class="bgc_box">
              <div class="content_top">
                <img :src="item.src" alt class="detail_img" />
              </div>
              <div class="content_bottom">
                <p>{{item.test}}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="selectedCat==3" class="detail clearfloat wow animated bounceIn">
      <ul>
        <li v-for="(item,index) in oversevenYearCat" :key="index" class="detail_content">
          <div class="big_box">
            <div class="bgc_box">
              <div class="content_top">
                <img :src="item.src" alt class="detail_img" />
              </div>
              <div class="content_bottom">
                <p>{{item.test}}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
import shortcut from "../components/shortcut";
export default {
  components: {
    shortcut: shortcut
  },
  mounted() {
    new WOW().init();
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
      threeMonth: [
        {
          src: require("../assets/img/dog1.jpg"),
          test:
            "狗狗在未满三个月之前第天必须呆在狗笼子里，不能让它跑出来乱吃东西。"
        },
        {
          src: require("../assets/img/dog3.jpg"),
          test:
            "在给狗狗洗澡的时候，选择适量的温度和人差不多，而且要洗完尽快的吹干，以免着凉感冒。"
        },
        {
          src: require("../assets/img/dog4.jpg"),
          test:
            "狗狗必须每天只能给吃狗粮，而且要泡软点再给食用。狗狗不能吃到除狗粮以外的任何食物，包括：牛奶、火腿肠、生熟肉、米饭等。"
        },
        {
          src: require("../assets/img/dog5.jpg"),
          test:
            "狗狗定时出去散步，最好是牵着它出去，以免接处到别的狗狗或是地面上的食物。"
        }
      ],
      oneYear: [
        {
          src: require("../assets/img/dog7.jpg"),
          test:
            "不要给小狗吃人吃的东西。特别是：香肠，剩菜饭，人的食物含盐太多。如果爱它，为了它的健康，吃狗粮已经足够了。"
        },
        {
          src: require("../assets/img/dog6.jpg"),
          test:
            "专业配方的狗粮是专门为狗狗的成长定制的，营养成分均衡，是狗狗各阶段的最佳食物。"
        },
        {
          src: require("../assets/img/dog8.jpg"),
          test:
            "狗狗打好疫苗。如果之前没打过疫苗，第一次打需要打三针加一针狂犬，如果之前有打过，那现在注意看期限，一年一次就可以了。"
        },
        {
          src: require("../assets/img/dog9.jpg"),
          test:
            " 平时要多注意狗狗的鼻头干不干， 便便是否干燥成型，拉不拉稀等， 这些都是狗狗健康的体现。"
        }
      ],
      sixYear: [
        {
          src: require("../assets/img/dog10.jpg"),
          test: "不要给它喝牛奶；不能吃巧克力和任何动物骨头。"
        },
        {
          src: require("../assets/img/dog11.jpg"),
          test:
            "如果家里有人就多和狗狗玩，培养狗狗友善的性格，不要让狗狗养成胆小，敏感见陌生人就乱叫的习惯"
        },
        {
          src: require("../assets/img/dog12.jpg"),
          test: "每天梳理狗狗的背毛，每隔一周给狗狗在家洗澡。"
        },
        {
          src: require("../assets/img/dog13.jpg"),
          test:
            "狗狗的衰老从6岁开始身体各项机能就已经开始走下坡路所以这样的阶段，优质细心的照料能够让狗狗的晚年生活更加健康和自如6岁以后的狗狗，需要做的就是让它们在零压力中生活。"
        }
      ],
      overSixYear: [
        {
          src: require("../assets/img/dog14.jpg"),
          test:
            "家居环境要整洁卫生,随着狗狗年龄增大抵抗力减弱,稍有不慎或者消毒不严格,可能会让狗狗增加皮肤或肠胃疾病发病几率。"
        },
        {
          src: require("../assets/img/dog15.jpg"),
          test:
            "有的狗狗可能出现食欲减退挑食,这时候可以少食多餐，配合补充钙和维生素等,千万不要过于溺爱，而喂食太多高脂肪食物。"
        },
        {
          src: require("../assets/img/dog16.jpg"),
          test:
            "如果想要做家庭装修或搬家,请在狗狗6岁以前完成以上工作,6岁以后的狗狗抗压适应力减弱,如果突然大幅度的改变固有家居环境,这样会令狗狗变得焦躁不安。"
        },
        {
          src: require("../assets/img/dog17.jpg"),
          test:
            "不要以为只有年轻狗狗才运动,上了年纪的狗狗更加需要运动,注意一定不要做过于剧烈的运动"
        }
      ],
      threeMonthCat: [
        {
          src: require("../assets/img/cat1.jpg"),
          test:
            "虫子是分体内体外的，如果是从外面抱回的话，猫咪的妈妈没有做过疫苗的话，一般肚子里或者体外都会有虫子，正确的方法是体外用那种滴露。"
        },
        {
          src: require("../assets/img/cat2.jpg"),
          test:
            "然后人类的食物不能乱给，2-3个月的小猫还小，消化系统还不完全，很多人类吃得东西它根本就不会消化。"
        },
        {
          src: require("../assets/img/cat3.jpg"),
          test:
            "猫咪小的时候很怕冷，如果他不停叫，一方面是因为冷，一方面是因为害怕。所以要给他一个暖和的地方。"
        },
        {
          src: require("../assets/img/cat4.jpg"),
          test:
            "小猫不能洗澡！一洗澡就感冒，就死翘翘了。"
        }
      ],
      oneYearCat: [
        {
          src: require("../assets/img/cat5.jpg"),
          test:
            "准备一个阴暗狭窄不受打扰的位置给它，一般猫到新环境都或多或少会有点应激，这个狭窄的“秘密基地”可以让它有点安全感。"
        },
        {
          src: require("../assets/img/cat6.jpg"),
          test:
            "准备干净的水和食物放在离它的小基地不远处。有条件的话可以准备两个猫砂盆。"
        },
        {
          src: require("../assets/img/cat7.jpg"),
          test:
            "女性和猫接触时，试着减少使用高且尖锐的语调，较平缓的音频更容易让猫放松。"
        },
        {
          src: require("../assets/img/cat8.jpg"),
          test:
            "逗猫时少用人体，改为玩具，减少受伤。"
        }
      ],
      sevenYearCat: [
        {
          src: require("../assets/img/cat9.jpg"),
          test: "猫的眼泪是褐色的，特别是（异短）这类短鼻子的眼泪很多，主人要勤跟小猫用纸巾搽搽，平时保健，用点眼药水。"
        },
        {
          src: require("../assets/img/cat10.jpg"),
          test:
            "猫癣不是绝症，只要养猫都会遇见猫癣（猫癣就是皮肤真菌，潮湿温暖的环境就会滋生真菌）"
        },
        {
          src: require("../assets/img/cat11.jpg"),
          test: "注意饮水的卫生，猫粮更换的比例，是否着凉，或吃进异物，如果拉稀的时间较长、有血便，应驱虫，大便特臭应用药调节大肠菌群。"
        },
        {
          src: require("../assets/img/cat12.jpg"),
          test:
            "猫在觉得安全的环境中就会打呼噜自我调节、放松，猫打呼噜还可以治愈一些人类发现不了的小毛病呢。"
        }
      ],
      oversevenYearCat: [
        {
          src: require("../assets/img/cat13.jpg"),
          test:
            "猫的最大的杀手之一是肾衰竭(CKD)，有时被称为慢性肾脏病或慢性肾损伤。基本上意味着75%的肾脏功能是无效的和不起作用的。"
        },
        {
          src: require("../assets/img/cat14.jpg"),
          test:
            "牙结石和牙龈炎发生时，首先以流涎最常见，吃食量逐渐减少，想吃但是不张嘴，逐渐消瘦，口臭明显。"
        },
        {
          src: require("../assets/img/cat15.jpg"),
          test:
            "现在很多品牌的猫粮也推出了控体重的猫粮，如果你的猫咪肥胖了，建议更换成控体重粮。"
        },
        {
          src: require("../assets/img/cat16.jpg"),
          test:
            "食欲减退和体重减轻是甲状腺机能减退的一般症状，可以用高能量、适口性好的食物饲喂，同时要避免猫长期食欲不振(尤其是胖猫)以防脂肪肝的发生。"
        }
      ],
      selectedDog: 0,
      selectedCat: 0
    };
  },
  methods: {
    switchDog(index) {
      this.selectedDog = index;
      console.log(this.selectedDog, "sele");
    },
    switchCat(index) {
      this.selectedCat = index;
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
  margin-top: 60px;
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
.detail {
  // display: flex;
  // justify-content: center;
  // overflow: hidden;
  width: 100%;
  margin: 30px;
  padding: 0 80px;
  .detail_content {
    height: 500px;
    width: 50%;
    float: left;
    .big_box {
      padding: 0 20px;
      margin-top: 20px;
      .bgc_box {
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
        padding: 20px;
        .detail_img {
          // margin: 0 20px 0 0;
          width: 100%;
          height: 350px;
        }
        p {
          margin-top: 20px;
          width: 500px;
          height: 60px;
          font-size: 18px;
          color: #393f56;
        }
      }
    }
  }
}
</style>