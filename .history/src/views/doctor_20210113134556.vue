<template>
  <div>
    <shortcut class="chortcut"></shortcut>
    <div>
      <div class="doctorList">
        <ul>
          <li v-for="(item,index) in doctor" :key="index" v-show="item.id==showDoctor">
            <div>
              <img :src="item.src" class="bgc" />
              <div class="wenzi">
                <div class="wenzi1">{{item.wenzi1}}</div>
                <div class="wenzi2">{{item.wenzi2}}</div>
                <div class="wenzi3">
                  <p>{{item.wenzi3}}</p>
                  <br />
                  <p>{{item.wenzi4}}</p>
                  <br />
                  <p>{{item.wenzi5}}</p>
                  <br />
                  <p>{{item.wenzi6}}</p>
                </div>
                <button class="btn" @click="order(item.wenzi1)">立即预约</button>
              </div>
            </div>
          </li>
        </ul>
        <ul class="click_doctor">
          <li
            v-for="(item,index) in doctor2"
            :key="index"
            @click="changeDoctor(item.id)"
            class="each_doctor"
          >
            <div>
              <img :src="item.src" alt />
            </div>
          </li>
        </ul>
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
      showDoctor: 1,
      doctor: [
        {
          id: 1,
          src: require("../assets/img/刘朗.png"),
          wenzi1: "刘朗",
          wenzi2: "-中国农业大学动医学院高级兽医师-",
          wenzi3: " 中国兽医协会理事",
          wenzi4: " 中国兽医协会宠物诊疗协会副会长",
          wenzi5: "高级兽医职称",
          wenzi6: "中国兽医外科学会副理事长"
        },
        {
          id: 2,
          src: require("../assets/img/潘庆山.png"),
          wenzi1: "潘庆山",
          wenzi2: "-中国农业大学动医学院高级兽医师-",
          wenzi3: " 中国兽医协会理事",
          wenzi4: " 中国兽医协会宠物诊疗协会副会长",
          wenzi5: "北京小动物诊疗行业协会副理事长",
          wenzi6: "中国兽医协会授课专家"
        },
        {
          id: 3,
          src: require("../assets/img/张志红.png"),
          wenzi1: "张志红",
          wenzi2: "-中国农业大学临床兽医学硕士-",
          wenzi3: " 心脏科专家",
          wenzi4: " 北京宠物医院继续教育讲师",
          wenzi5: "杰出青年兽医获得者",
          wenzi6: "北京农学院畜牧业特邀讲师"
        },
        {
          id: 4,
          src: require("../assets/img/李晋飞.png"),
          wenzi1: "李晋飞",
          wenzi2: "-兽医硕士-",
          wenzi3: " 宠物医院眼科、肿瘤科专家",
          wenzi4: " 宠物行业高峰论坛高级讲师",
          wenzi5: "优秀兽医师",
          wenzi6: "优秀青年兽医师"
        },
        {
          id: 5,
          src: require("../assets/img/陈宏武.png"),
          wenzi1: "陈宏武",
          wenzi2: "-农业部认证中级兽医师-",
          wenzi3: " 执业兽医师",
          wenzi4: " 中国兽医协会宠物诊疗协会理事",
          wenzi5: "北京小动物诊疗行业协会理事",
          wenzi6: "北京恒爱动物医院院长"
        },
        {
          id: 6,
          src: require("../assets/img/李贞玉.png"),
          wenzi1: "李贞玉",
          wenzi2: "-中国农业大学临床兽医硕士-",
          wenzi3: " 中兽医专家",
          wenzi4: " 中国农业大学临床兽医硕士",
          wenzi5: "北京小动物诊疗行业协会副理事长",
          wenzi6: "中国兽医协会宠物诊疗协会理事"
        },
        {
          id: 7,
          src: require("../assets/img/邱志钊.png"),
          wenzi1: "邱志钊",
          wenzi2: "-中国农业大学临床兽医硕士-",
          wenzi3: " 内科专家",
          wenzi4: " 北京小动物诊疗行业协会特邀讲师",
          wenzi5: "北京农业职业学院特邀讲师",
          wenzi6: "继续教育讲师"
        },
        {
          id: 8,
          src: require("../assets/img/邓立新.png"),
          wenzi1: "邓力新",
          wenzi2: "-河南农业大学教授-",
          wenzi3: " 河南农业大学教授，兽医博士",
          wenzi4: " 保健宠物医院创始人",
          wenzi5: "河南大学附属兽医院主治医师",
          wenzi6: "集团学顾问、影像学专家"
        }
      ],
      doctor2: [
        { id: 1, src: require("../assets/img/刘朗2.png") },
        { id: 2, src: require("../assets/img/潘庆山2.png") },
        { id: 3, src: require("../assets/img/张志红2.png") },
        { id: 4, src: require("../assets/img/李晋飞2.png") },
        { id: 5, src: require("../assets/img/陈宏武2.png") },
        { id: 6, src: require("../assets/img/李贞玉2.png") },
        { id: 7, src: require("../assets/img/邱志钊2.png") },
        { id: 8, src: require("../assets/img/邓立新2.png") }
      ]
    };
  },
  methods: {
    changeDoctor(id) {
      this.showDoctor = id;
      clearInterval(this.timer);
      this.timer = setInterval(this.change, 3000);
    },
    change() {
      if (this.showDoctor == 8) {
        this.showDoctor = 1;
      } else {
        this.showDoctor++;
      }
    },
    order(value) {
      sessionStorage.setItem("doctorName", value)
      this.$router.push('/orderDoctor');
      console.log(value)
    }
  },
  mounted() {
    this.timer = setInterval(this.change, 3000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.btn{
  width: 100px;
  height: 35px;
  margin-top: 20px;
  background-color: #1E90FF;
  border: none;
  color: #fff;
  cursor: pointer;
}
.doctorList {
  margin-top: 80px;
  .bgc {
    width: 100%;
  }
  .wenzi {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 230px;
    top: 220px;
    width: 400px;
    .wenzi1 {
      font-size: 41px;
      color: #000;
      margin-bottom: 10px;
    }
    .wenzi2 {
      color: #353535;
      font-size: 21px;
      margin-bottom: 2%;
      padding-bottom: 20px;
      border-bottom: 3px solid #aacd06;
    }

    .wenzi3 {
      color: #686868;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 40px;
    }
  }
}
.click_doctor {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  img {
    width: 100px;
    height: 100px;
    margin: 20px 20px;
    cursor: pointer;
    border-radius:50%; 
    transition: all ease 0.3s
  }
  img:hover {
    transform: scale(1.3);
    filter:brightness(70%);
  }
}
</style>