<template>
  <div class="container">
    <shortcut class="shortcut"></shortcut>
    <div class="videos">
      <img src="../assets/img/order_bg.jpg" />
    </div>
    <div class="box">
      <el-form label-width="100px" class="main">
        <div class="order_box">
          <div class="top_order">
            <el-radio v-model="petType" label="1">狗</el-radio>
            <el-radio v-model="petType" label="2">猫</el-radio>
            <el-radio v-model="petType" label="3">其它</el-radio>
          </div>
          <div class="top_order">
            <el-radio v-model="petMale" label="1">公</el-radio>
            <el-radio v-model="petMale" label="2">母</el-radio>
          </div>
          <div class="pricePicture">
            <a @click="changShow">价目表</a>
            <img
              v-show="showPriceJpg"
              src="../assets/img/price.png"
              alt
              class="priceJpg"
              @click="showPriceJpg=false"
            />
          </div>
          <div class="ecach_order">
            <span class="label">请选择您要预约的服务</span>
            <el-select v-model="ServiceName" placeholder="请选择" class="form_input">
              <el-option
                v-for="item in ServiceOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="ecach_order">
            <span class="label">请选择您要预约的时间</span>
            <el-date-picker
              v-model="timeValue"
              type="date"
              value-format="yyyy-MM-dd"
              @change="getTimeList"
              :picker-options="pickerOptions"
              placeholder="选择预约日期"
              :style="{ width: '300px', 'margin-bottom': '20px' }"
            ></el-date-picker>
          </div>
          <div class="ecach_order">
            <span class="label">请选择您要预约的时间</span>
            <el-select v-model="orderTime" placeholder="请选择" class="form_input">
              <el-option
                v-for="item in timeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="ecach_order">
            <span class="label">姓名</span>
            <el-input v-model="name" placeholder="请您的输入尊姓大名" class="form_input"></el-input>
          </div>
          <div class="ecach_order">
            <span class="label">联系方式</span>
            <el-input v-model="number" placeholder="请输入您的联系方式" class="form_input" prop="number"></el-input>
          </div>
          <div class="order_button">
            <el-button type="primary" @click="submitOrder">提交预约</el-button>
          </div>
        </div>
        <div class="order_dog">
          <img src="../assets/img/order_dog.jpg" alt />
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import shortcut from "../components/shortcut";
export default {
  components: {
    shortcut: shortcut
  },
  methods: {
    async getTimeList() {
      this.getTimeEnity.serviceName = this.ServiceName;
      this.getTimeEnity.searchTime = this.timeValue;
      const { data: res } = await this.$http.post(
        "/beautyorder/getTime",
        JSON.stringify(this.getTimeEnity)
      );
      this.timeOptions = [];
      for (var i = 0; i < res.data.length; i++) {
        var obj = {
          label: "",
          value: ""
        };
        obj.value = res.data[i];
        obj.label = res.data[i];
        this.timeOptions.push(obj);
      }
      // this.canOrderTime=res.data
      console.log(res);
    },
    async submitOrder() {
      this.orderEnity.petkind = this.petType;
      this.orderEnity.gender = this.petMale;
      this.orderEnity.serviceName = this.ServiceName;
      this.orderEnity.orderDate = this.timeValue;
      this.orderEnity.orderTime = this.orderTime;
      this.orderEnity.customerName = this.name;
      this.orderEnity.phoneNum = this.number;
      if (!this.orderEnity.petkind) {
        return this.$message.error("请选择宠物类型");
      } else if (!this.orderEnity.gender) {
        return this.$message.error("请选择宠物性别");
      } else if (!this.orderEnity.serviceName) {
        return this.$message.error("请选择项目类型");
      } else if (!this.orderEnity.orderDate || !this.orderEnity.orderTime) {
        return this.$message.error("请选择预约时间");
      } else if (!this.orderEnity.customerName) {
        return this.$message.error("请输入您的姓名");
      } else if (!this.orderEnity.phoneNum) {
        return this.$message.error("请输入您的联系方式");
      }
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.number)) {
        return this.$message.error("手机号有误，请输入正确格式的手机号！");
      }
      const { data: res } = await this.$http.post(
        "/beautyorder/order",
        JSON.stringify(this.orderEnity)
      );
      if (res.code == 200) {
        this.$message.success("预约成功！");
        this.$router.push("/home");
      } else {
        return this.$message.error("预约失败！");
      }
      console.log(res);
    },
    changShow() {
      this.showPriceJpg = !this.showPriceJpg;
    }
  },
  data() {
    return {
      showPriceJpg: false,
      petType: "",
      petMale: "",
      // 提交表单预约的医生
      ServiceName: "",
      // 提交表单预约的时间
      orderTime: "",
      timeValue: "",
      getTimeEnity: {
        serviceName: "",
        searchTime: ""
      },
      orderEnity: {
        petkind: "",
        gender: "",
        serviceName: "",
        orderDate: "",
        orderTime: "",
        customerName: "",
        phoneNum: ""
      },
      pickerOptions: {
        // 限制预约时间
        disabledDate(time) {
          return time.getTime() < Date.now() - 24 * 60 * 60 * 1000;
        }
      },
      // 下拉框选择医生
      ServiceOptions: [
        {
          value: "洗澡",
          label: "洗澡"
        },
        {
          value: "剃毛",
          label: "剃毛"
        },
        {
          value: "美容",
          label: "美容"
        }
      ],
      // 下拉框获取可以预约的时间
      timeOptions: [],
      name: "",
      number: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.top_order {
  margin: 0 0 2% 0;
  display: flex;
  width: 500px;
  justify-content: flex-end;
}
.order_dog {
  img {
    width: 400px;
    // opacity: 1;
    margin: 0 0 0 20%;
  }
}
.pricePicture {
  color: white;
  display: flex;
  justify-content: center;
  margin:0 0 10px 430px; 
  img {
    position: absolute;
    z-index: 3;
    margin-top: -100px;
  }
}
.ecach_order {
  margin: 0 0 0 10%;
  width: 500px;
  display: flex;
  justify-content: flex-end;
}

.box {
  display: flex;
  justify-content: space-around;
}

.label {
  color: #fff;
  margin: 0 10px 0 0;
}
.form_input {
  width: 300px;
  margin: 0 0 20px 0;
}
.shortcut {
  position: absolute;
  z-index: 2;
}
.container {
  .videos {
    background-color: rgba(1, 36, 63, 0.2);
    // 为什么设置成absolute就能100%
    // position: absolute;
    width: 100%;
    height: 100vh;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.8;
      // filter: blur(15px);
    }
  }
}
.order_button {
  width: 500px;
  display: flex;
  margin: 0 0 0 20%;
  justify-content: center;
}
.main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 75%;
  background-color: #000;
  // border-radius: 10px;
  opacity: 0.7;
  display: flex;
  // justify-content: space-around;
  //  flex-wrap:  wrap
  align-items: center;
  // flex-direction: column;
}
</style>