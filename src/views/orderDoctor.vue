<template>
  <div>
    <el-calendar :range="timeArr"></el-calendar>
    {{this.doctorName}}
  </div>
</template>

<script>
export default {
  created() {
    this.doctorName = sessionStorage.getItem("doctorName");
  },
  mounted() {
    this.getTime();
  },
  methods: {
    getTime() {
      const nowDate = new Date();
      const date = {
        year: nowDate.getFullYear(),
        month: nowDate.getMonth() + 1,
        date: nowDate.getDate()
      };
      const newmonth = date.month > 10 ? date.month : "0" + date.month;
      const day = date.date > 10 ? date.date : "0" + date.date;
      this.startTime = date.year + "-" + newmonth + "-" + day;
      console.log(this.startTime)
      this.$set(this.timeArr,0,this.startTime)
    }
  },
  data() {
    return {
      doctorName: "",
      startTime: "",
      timeArr:['2019-03-04', '2019-12-31']
    };
  }
};
</script>

<style lang="scss" scoped>
</style>