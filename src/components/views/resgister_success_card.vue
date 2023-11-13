<style scoped>
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
.tip {/*鼠标经过时，呈现可点击状态*/
  cursor: pointer;/*变为可点击状态*/
  transition: font-size 0.2s,transform 0.2s;/*变化率*/
  font-size: 12px;
  color: #999999;
}
.tip:hover{
  font-size: 13px;/*字体变化率*/
  transform: scale(1.1);/*图片变化*/
}

.non-clickable {
  pointer-events: none;
}
</style>

<template>
  <div id="login-rectangle">
    <span style="font-size: 20px;font-weight: 700;position: absolute;left: 78px;top: 60px">哈哈哈</span>

    <span style="font-size: 30px;font-weight: 700;position: absolute;left: 78px;top: 85px" >注册成功</span>
    <img  alt="用户图标" src="../icons/用户.png" style="width:24px;position: absolute;top:200px;left: 78px">
    <span style="font-size: 15px;font-weight: 700;position: absolute;top:200px;left: 105px">您的账号：1234567890</span>
    <img  alt="锁图标" src="../icons/锁定1.png" style="width:24px;position: absolute;top:240px;left: 78px">
    <span style="font-size: 15px;font-weight: 700;;position: absolute;top:240px;left: 105px">您的新密码：111111111</span>

    <div class="tip"  ref="clickableDiv"  :class="{ 'non-clickable': isNotClickable }"  @click="handleClick" style="position: absolute;left: 80px;top: 280px">
      <img
          :src="currentImage"
          alt="复制图标"
          class="copy"

          style="width:26px;position:absolute;top: -1px">
      <span style="position: relative;left: 30px;top: 2px">{{tip_word}}
      </span>
    </div>
    <el-button type="primary"  style="width: 300px;background-color: #181818;position: absolute;top: 320px;left: 75px"
    >返回登录</el-button>
  </div>
</template>


<script setup>
/*控制复制图标缩放的*/
const isNotClickable = ref(false);
const clickableDiv = ref(null);
const timer = ref(null);//定时器
import clipboard3 from "vue-clipboard3";
import { ref } from 'vue';
const copy_text =ref("哈哈哈")//待复制的内容
const { toClipboard } = clipboard3();
const currentImage = ref('/src/components/icons/复制.png');
const tip_word=ref("点击复制账号信息")
const handleClick = async () => {
  try {
    currentImage.value ='/src/components/icons/复制 (1).png';
    tip_word.value =  "复制成功";
    await toClipboard(copy_text.value);
    isNotClickable.value = true; // 设置为不可点击状态
    timer.value = setTimeout(() => {
      currentImage.value = '/src/components/icons/复制.png'; // 5秒后切回到 img1
      tip_word.value ="点击复制账号信息";
      isNotClickable.value = false;
    }, 5000);
  } catch (error) {
  }
};
</script>