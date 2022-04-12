<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <router-link :to="{name:'Home'}">
          <el-menu-item index="1" style="display:inline-block">
            首页
          </el-menu-item>
        </router-link>
        <router-link :to="{name:'DataBase'}">
          <el-menu-item index="2" style="display:inline-block">
            数据库
          </el-menu-item>
        </router-link>
        <router-link :to="{name:'Analyze'}">
          <el-menu-item index="3" style="display:inline-block">
            数据分析
          </el-menu-item>
        </router-link>
        <router-link :to="{name:'UserHome'}">
          <el-menu-item index="4" style="display:inline-block">
            个人中心
          </el-menu-item>
        </router-link>
        <router-link :to="{name:'UserManage'}">
          <el-menu-item index="5" style="display:inline-block">
            用户管理
          </el-menu-item>
        </router-link>
        <el-button type="danger" icon="el-icon-close" circle style="position: absolute; right: 10px;top: 8px" @click="exit_page"></el-button>
      </el-menu>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      exit_page(){
        sessionStorage.clear()
        this.$router.replace({path: '/'})
        this.reload()
        sessionStorage.clear()
      }
    }
  }
</script>
<style>
  .el-container{
    position: absolute;
    border: 10px solid #4239c7;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
  }
  .el-main {
    text-align: center;
    line-height: 160px;
    border: 10px solid #545c64;
    margin-left: 20px;
    margin-right: 20px;
    height: auto;
  }
</style>

