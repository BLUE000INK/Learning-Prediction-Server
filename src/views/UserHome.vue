<template>
  <div>
    <h3 style="font-size: 50px;font-family: 隶书" align="center">用户中心</h3>
    <h2>当前用户：{{userName}}</h2>
    <h2>用户密码：{{pwd}}</h2>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        userName: '',
        pwd:''
      }
    },
    mounted() {
      this.userName = sessionStorage.getItem('username')
      this.pwd = sessionStorage.getItem('pwd')
    }
  }
</script>

<style scoped>

</style>
