<template>
  <div class="search_box">
    <div class="title_text">我的预约</div>
    <input type="text" class="input_class" placeholder="请输入预约的手机号进行查询" v-model="phone" />
    <el-button type="primary" class="send_button" @click="check">查询</el-button>
    <div class="orderDetail">
      <div v-show="haveOrder==1">
        <el-table :data="orderList" style="width: 100%">
          <el-table-column prop="serviceName" label="预约项目" width="180"></el-table-column>
          <el-table-column prop="orderDate" label="日期" width="180"></el-table-column>
          <el-table-column prop="orderTime" label="具体时间"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async check() {
      this.searchOrderEnity.phoneNumber = this.phone;
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone)) {
        return this.$message.error("手机号有误，请输入正确格式的手机号！");
      }
      const { data: res } = await this.$http.post(
        "/cloneorder/getOrder",
        JSON.stringify(this.searchOrderEnity)
      );
      this.orderList = res.data;
      if (this.orderList) {
        this.haveOrder = 1;
      } else {
        this.haveOrder = 2;
      }
    }
  },
  data() {
    return {
      searchOrderEnity: {
        phoneNumber: ""
      },
      phone: "",
      orderList: [],
      haveOrder: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.search_box {
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
    background-color: #37b3c2;
    border: #37b3c2;
    border-radius: 0;
    width: 200px;
    margin-top: 20px;
  }

  .orderDetail {
    margin-top: 20px;
  }
}
</style>