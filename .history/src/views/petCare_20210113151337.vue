<template>
  <div>
    <shortcut class="shortcut"></shortcut>
    <div class="videos">
      <img src="../assets/img/dog4.jpg" />
    </div>
    <div class>
      <el-form label-width="100px" class="main">
        <div>
          <el-radio v-model="petType" label="1">狗</el-radio>
          <el-radio v-model="petType" label="2">猫</el-radio>
          <el-radio v-model="petType" label="3">其它</el-radio>
        </div>
        <div>
          <el-radio v-model="petMale" label="1">公</el-radio>
          <el-radio v-model="petMale" label="2">母</el-radio>
        </div>
        <el-select
          v-model="ServiceName"
          placeholder="请选择"
          class="form_input"
        >
          <el-option
            v-for="item in ServiceOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-date-picker
          v-model="timeValue"
          type="date"
          value-format="yyyy-MM-dd"
          @change="getTimeList"
          :picker-options="pickerOptions"
          placeholder="选择预约日期"
          :style="{ width: '300px', 'margin-bottom': '20px' }"
        ></el-date-picker>
        <el-select v-model="orderTime" placeholder="请选择" class="form_input">
          <el-option
            v-for="item in timeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <!-- <el-input v-model="number" placeholder="请输入" class="form_input" prop="number"></el-input> -->
        <el-input
          v-model="name"
          placeholder="请输入您的尊姓大名"
          class="form_input"
        ></el-input>
        <el-input
          v-model="number"
          placeholder="请输入您的联系方式"
          class="form_input"
          prop="number"
        ></el-input>
        <el-button type="primary" @click="submitOrder">提交预约</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import shortcut from "../components/shortcut";
export default {
  components: {
    shortcut: shortcut,
  },
  methods: {
    async submitOrder() {
      //  const { data: res } = await this.$http.post(
      //   "/api/register/shop",
      //   JSON.stringify(this.timeValue)
      // );
      // this.canOrderTime=res.data
      console.log(this.ServiceName);
    },
  },
  data() {
    return {
      petType: "",
      petMale: "",
      // 提交表单预约的医生
      ServiceName: "",
      // 提交表单预约的时间
      orderTime: "",
      timeValue: "",
      pickerOptions: {
        // 限制预约时间
        disabledDate(time) {
          return time.getTime() < Date.now() - 24 * 60 * 60 * 1000;
        },
      },
      // 下拉框选择医生
      ServiceOptions: [
        {
          value: "洗澡",
          label: "洗澡",
        },
        {
          value: "剃毛",
          label: "剃毛",
        },
        {
          value: "美容",
          label: "美容",
        },
      ],
      // 下拉框获取可以预约的时间
      timeOptions: [
        {
          value: "8:30",
          label: "8:30",
        },
        {
          value: "9:30",
          label: "9:30",
        },
        {
          value: "11:30",
          label: "11:30",
        },
        {
          value: "4:30",
          label: "4:30",
        },
        {
          value: "5:30",
          label: "5:30",
        },
      ],
      name: "",
      number: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.form_input {
  width: 300px;
  margin: 0 0 20px 0;
}
.shortcut {
  position: absolute;
  z-index: 2;
}
.videos {
  background-color: rgba(1, 36, 63, 0.2);
  // 为什么设置成absolute就能100%
  position: absolute;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    // opacity: 0.8;
    filter: blur(15px);
  }
}
.main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 75%;
  background-color: #fff;
  border-radius: 10px;
  // opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>