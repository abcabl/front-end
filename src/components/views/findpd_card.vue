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
  background-image: url('../icons/青色背景图.png'); /* 设置背景图 */
  display: flex;
  align-items: center;
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
  <div id="login-rectangle">
    <span style="font-size: 20px;font-weight: 700;position: absolute;left: 78px;top: 90px">RECOVER</span>
    <span style="font-size: 30px;font-weight: 700;position: absolute;left: 78px;top: 120px" >找回</span>
    <span style="font-size: 15px;font-weight: 100;position: absolute;left: 78px;top: 170px">请输入绑定手机号进行验证</span>
<!--
    <a href="about.html" style="font-size: 15px;font-weight: 100;position: absolute;left: 346px;top:90px">返回登录</a>
-->
    <router-link  style="font-size: 15px;font-weight: 100;position: absolute;left: 346px;top:90px" to="/login">返回登录</router-link>

    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
    >
      <el-form-item  prop="pass" style="margin-top: 250px;margin-left: -60px">
        <el-input  type="password" autocomplete="off" placeholder="请输入绑定手机号" style="width: 300px"/>
      </el-form-item>
      <el-form-item  prop="checkPass" style="margin-top: 10px;margin-left: -60px">
        <el-input
            type="password"
            autocomplete="off"
            placeholder="请输入验证码"
            style="width: 205px"
        />
      </el-form-item>
      <el-button style="background: #181818;color: white;width: 85px;position: absolute;top:300px;left: 274px">发送验证码</el-button>
      <a href="http://" style="font-size: 15px;font-weight: 100;position: absolute;top:335px;left: 286px">无法验证?</a>

      <el-form-item style="margin-top: 34px;margin-left: -60px" >
        <el-button type="primary"  style="width: 300px;background-color: #181818"
        >下一步</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>


<script setup>
import register from "./resgister_card.vue"
</script>