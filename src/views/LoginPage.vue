<template>
  <div class="loginpage">
    <div class="container">
      <div class="container1" >
       <el-image :src="require('@/assets/login_logo.png')" >
       </el-image>
      </div>
      <div class="container2" v-if="this.signIn_form">
        <h3 style="font-size: 50px;font-family: 隶书" align="center">SignIn</h3>
        <el-form :model="loginForm"  style="position: relative;left: 50px" status-icon :rules="rules"  ref="loginForm">
          <el-form-item  prop="userName">
            <el-input v-model="loginForm.userName" placeholder="用户名" prefix-icon="el-icon-user-solid" style="width: 70%" clearable></el-input>
          </el-form-item >
          <el-form-item  prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="密码" prefix-icon="el-icon-lock" style="width: 70%" show-password clearable></el-input>
          </el-form-item >
          <el-form-item >
            <el-button type="primary" @click="login('loginForm')" style="width: 70%">登录</el-button>
          </el-form-item>
          <el-link type="primary" style="position: absolute;right: 80px" v-on:click="click_regist()">还没有账号？去注册</el-link>
        </el-form>
      </div>
      <div class="container3" v-if="this.signUp_form">
        <h3 style="font-size: 50px;font-family: 隶书" align="center">SignUp</h3>
        <el-form :model="registForm"  style="position: relative;left: 50px" status-icon :rules="rules" ref="registForm">
          <el-form-item prop="userName">
            <el-input v-model="registForm.userName" placeholder="用户名" prefix-icon="el-icon-user-solid" style="width: 70%" clearable ></el-input>
          </el-form-item >
          <el-form-item prop="password">
            <el-input type="password" v-model="registForm.password" placeholder="密码" prefix-icon="el-icon-lock" style="width: 70%" show-password clearable></el-input>
          </el-form-item >
          <el-form-item prop="check_pwd">
            <el-input type="password" v-model="registForm.check_pwd" placeholder="确认密码" prefix-icon="el-icon-lock" style="width: 70%" show-password clearable></el-input>
          </el-form-item>
          <el-form-item >
            <el-button type="primary" @click="login" style="width: 70%">注册</el-button>
          </el-form-item>
          <el-link type="primary" style="position: absolute;right: 60px" v-on:click="click_login()">注册完成？去登录</el-link>
        </el-form>
      </div>
    </div>
  </div>

</template>
<script>
  export default {

    data () {
      const checkPwd = (rule, value, callback) => {
        if (value == '') {
          alert("")
          console.log('!!!!!!')
          callback(new Error('请再次输入密码'))
        } else if (value !== this.registForm.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      };
      return {
        signIn_form: true,
        signUp_form: false,
        loginForm: {
          userName: '',
          password: '',
        },
        registForm: {
          userName:'',
          password:'',
          check_pwd:'',
        },
        rules:{
          userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          check_pwd: [
            {validator: checkPwd, trigger: 'blur'}
          ],
        },
      }
    },
    created () {
      sessionStorage.clear()
    },
    methods: {
      login (loginForm) {
        this.$refs[loginForm].validate((valid) => {
          if (valid) {
            console.log(this.loginForm.userName)
            console.log(this.loginForm.password)
            this.$axios.post( 'http://localhost:8084/users/findUser', {
              username: this.loginForm.userName,
              password: this.loginForm.password
            })
              .then(response => {
                console.log(response)
                if (response.data == 1) {
                  sessionStorage.setItem('username',this.loginForm.userName);
                  sessionStorage.setItem('pwd',this.loginForm.password);
                  this.$router.push({name: 'Home'})
                } else if(response.data == 2){
                  alert('该用户不存在');
                }else if(response.data == 0){
                  alert('密码错误')
                }
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      click_regist(){
        this.signIn_form = false
        this.signUp_form = true
        //表单重置
        this.$refs['loginForm'].resetFields();
      },
      click_login(){
        this.signIn_form = true
        this.signUp_form = false
        //表单重置
        this.$refs['registForm'].resetFields();
      }
    }
  }
</script>
<style>
  .loginpage{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  }
  .container{
    position: relative;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
    background-color: #4239c7;
    border-radius: 10px;
    overflow: hidden;
    opacity: 0.9;
  }
  .container1{
    position: absolute;
    left: 0;
    width: 768px;
    max-width: 50%;
    min-height: 480px;
    background-color: white;
    boder-top-right-radius: 20px;
    boder-bottom-left-radius: 20px;
    overflow: hidden;
    opacity: 0.9;
  }
  .container2{
    position: absolute;
    right: 0;
    width: 768px;
    max-width: 50%;
    min-height: 480px;
    background-color: #4239c7;
    boder-top-right-radius: 20px;
    boder-bottom-left-radius: 20px;
    overflow: hidden;
    opacity: 0.9;
  }
  .container3{
    position: absolute;
    right: 0;
    width: 768px;
    max-width: 50%;
    min-height: 480px;
    background-color: #579242;
    boder-top-right-radius: 20px;
    boder-bottom-left-radius: 20px;
    overflow: hidden;
    opacity: 0.9;
  }
</style>
