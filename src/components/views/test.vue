<script setup>
import {ref} from "vue";

const img_list=["/src/components/icons/welcome.png","/src/components//icons/beyour.png","/src/components//icons/efficiency.png"]
const imgList = [//背景图
  '/src/components//icons/青色背景图.png',
  '/src/components//icons/橙红背景图.png',
 ' /src/components/icons/蓝色背景图.png',
];
const backgroundImage = ref('url(src/components/icons/青色背景图.png)');
const changeBackground = (val) => {
  console.log(val)

  if(val===0)
    backgroundImage.value=`url(${imgList[0]})`//需要注意路径格式！！${}语法在字符串中插入变量或表达式
  if(val===1)
    backgroundImage.value=`url(${imgList[1]})`
  if(val===2)
    backgroundImage.value=`url(${imgList[2]})`
}
</script>

<template>
  <div  class="rectangle_middle" :style="{ backgroundImage: backgroundImage }" ><!--动态绑定！！！-->
    <el-carousel  style="width: 800px;height:420px;margin-left: 50px" @change="changeBackground " >
      <el-carousel-item v-for="item in img_list" :key="item" style="height: 500px;margin-top: -0px">
        <img :src="item" alt="背景图片" style="margin-left:170px;margin-top:5px;width: 450px" >
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<style scoped>
.rectangle_middle{
  position: absolute;
  background-color: deepskyblue;
  width: 100%;
  height: 600px;
  left: 0;
  top: 125px;
  background-size: cover; /* 设置背景图填充方式 */
  //background-image: url('../icons/青色背景图.png'); /* 设置背景图 */
  display: flex;
  align-items: center;
  transition: background-image 0.5s ease;
}
</style>