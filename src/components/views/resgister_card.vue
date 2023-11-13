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
    <span style="  font-size: 20px;font-weight: 700;position: absolute;left: 78px;top: 52px">SIGN UP</span>
    <span style="font-size: 30px;font-weight: 700;position: absolute;left: 78px;top: 80px" >注册</span>
    <span style="font-size: 15px;font-weight: 100;position: absolute;left: 78px;top: 125px">注册一个新的账户</span>
    <span style="font-size: 15px;font-weight: 100;position: absolute;left: 313px;top: 55px">已有账号?</span>
<!--
    <a href="about.html" style="font-size: 15px;font-weight: 100;position: absolute;left: 346px;top:75px">返回登录</a>
-->
    <router-link  style="font-size: 15px;font-weight: 100;position: absolute;left: 346px;top:75px" to="/login">返回登录</router-link>

    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
    >
      <el-form-item  prop="checkPass" style="margin-top: 180px;margin-left: -60px">
        <el-input
            type="password"
            autocomplete="off"
            placeholder="请输入绑定手机号"
            style="width: 300px"/>
        <el-input
            type="password"
            autocomplete="off"
            placeholder="请输入验证码"
            style="width: 300px;margin-top: 20px"/>
        <el-input
            type="password"
            autocomplete="off"
            placeholder="请输入新密码"
            style="width: 300px;margin-top: 20px"/>
        <el-input
            type="password"
            autocomplete="off"
            placeholder="请再次输入密码"
            style="width: 200px;margin-top: 20px"/>
      </el-form-item>
      <el-button id="sendmesg-button" style="background-color: #181818;color: white;position: absolute;top:336px;left: 270px;width: 90px">发送验证码</el-button>


      <el-form-item style="margin-top: 30px;margin-left: -60px" >
        <el-button type="primary"  style="width: 300px;background-color: #181818"
        >注册</el-button
        >
      </el-form-item>
      <el-radio-group style="margin-left: 100px" size="small"><!--调整位置-->
        <el-radio label="我已阅读并同意服务协议和隐私政策"  />
      </el-radio-group>
    </el-form>
  </div>
</template>
<script setup>

</script>