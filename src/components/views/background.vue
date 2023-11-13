<style scoped>
.rectangle_top{
  position: absolute;
  background-color: #e0f5fa;
  width: 100%;
  height: 64px;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
}

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

.rectangle_down{
  position: absolute;
  background-color: #c6d6db;
  width: 100%;
  height: 58px;
  left: 0;
  top: 785px;
  display: flex;
  align-items: center;
}
.CPSLOGO{
  position: absolute;
  width: 90px;
  left: 64px;
}

#name{
  position: absolute;
  left:195px;
  font-size: 25px;
  font-weight: 700;
}

a {
  color: black;
  text-decoration: none; /* 可以去除超链接的下划线 */
}
#download{
  width: 110px;
  height: 36px;
  border: 1px solid #181818;
  border-radius: 10px;/*圆角*/
  position: absolute;
  left: 1300px;
  display: flex;
  align-items: center;/*竖直居中*/
  justify-content: center;/*水平居中*/

}
#login-rectangle{
  width: 420px;
  height: 520px;
  background-color: white;
  position: absolute;
  left: 900px;
  top: 94px;
  border-radius: 5px;/*圆角*/
  box-shadow: 2px 2px 2px #e6e6e6, -2px -2px 2px #e6e6e6; /* 设置两组阴影，分别为右下和左上方向的阴影 */
}
#qq-login{
  width: 140px;
  height: 30px;
  border: 1px solid #c1c1c1;
  border-radius: 4px;/*圆角*/
  position: absolute;
  left: 60px;
  top:440px;
  display: flex;
  align-items: center;/*竖直居中*/
  justify-content: center;/*水平居中*/
  color: rgb(193, 198, 211)/*调整文字颜色，控制深浅*/

}
#weixin-login{
  width: 140px;
  height: 30px;
  border: 1px solid #c1c1c1;
  border-radius: 4px;/*圆角*/
  position: absolute;
  left: 230px;
  top:440px;
  display: flex;
  align-items: center;/*竖直居中*/
  justify-content: center;/*水平居中*/
  color: rgb(193, 198, 211)/*调整文字颜色，控制深浅*/
}
</style>

<template>
  <div class="rectangle_top">
    <img src="../icons/CPSLOGO.png" alt="标志图" class="CPSLOGO">
    <span id="name">CreatePtr* Studio</span>
    <a href="about.html" style="position: absolute;left: 900px">关于产品</a>
    <span style="margin-left: 1000px"> |</span>
    <a href="about.html" style="position: absolute;left:1050px">操作手册</a>
    <span style="margin-left: 150px">|</span>
    <a href="about.html" style="position: absolute;left: 1200px">联系我们</a>
    <span id="download">
      <a href="about.html"  >下载客户端</a>
    </span>
  </div>
  <div  class="rectangle_middle" :style="{ backgroundImage: backgroundImage }" ><!--动态绑定！！！-->
    <el-carousel  style="width: 800px;height:440px;margin-left: 50px" @change="changeBackground " >
      <el-carousel-item v-for="item in img_list" :key="item" style="height: 500px;margin-top: -0px">
        <img :src="item" alt="背景图片" style="margin-left:150px;margin-top:5px;width: 500px" >
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="rectangle_down">
    <img src="../icons/bilibili.png" alt="哔哩哔哩" style="width: 32px;margin-left: 56px">
    <img src="../icons/微信.png" alt="微信" style="width: 32px;margin-left: 20px">
    <img src="../icons/抖音.png" alt="抖音" style="width: 32px;margin-left: 20px">
    <span style="font-size: 11px;margin-left: 850px">© 2014-2023 CPS公司版权所有</span>
    <span style="font-size: 11px;margin-left: 25px">隐私政策</span>
    <span style="font-size: 11px;margin-left: 25px">服务协议</span>
    <span style="font-size: 11px;margin-left: 25px">法律声明</span>
  </div>



</template>


<script setup>
import register from "./resgister_card.vue"
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