<template>
  <div class="container">
    <h4>请您遵循以下提示，对爱宠进行保存：</h4>
    <ul>
      <li v-for="(item,index) in Tips" :key="index">
        <p>{{item.tip}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Tips: [
        { tip: "年轻的体细胞相比年老的体细胞，克隆实验成功率更高；" },
        {
          tip:
            "存活个体上采集的体细胞相比尸体上采集的体细胞，克隆实验成功率更高；"
        },
        { tip: "我们建议尽早做好细胞保存工作，方便未来克隆实验开展。" },
        {
          tip:
            "如果您的爱宠亡故，请您尽快将爱宠的身体用湿毛巾包裹并冷藏（2~8℃）"
        },
        { tip: "并尽快拨打400-616-2206热线电话联系取样事宜！" },
        {
          tip:
            "如果无法做到在冰箱中保存，可以自制一些冰块，与宠物身体放在一起，定期添加冰块，也可达到在冰箱中的保存效果；"
        },
        {
          tip: "如果常温保存或者掩埋尸体，克隆实验的成功率将会下降，请您知悉！"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-left:100px; 
}
h4 {
  margin-top: 90px;
  text-align: center;
  color: rgb(55, 179, 194);
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
}

ul {
    margin-left:-80px; 
  li {
    color: black;
    font-size: 14px;
    margin-bottom: 30px;
  }
}
</style>