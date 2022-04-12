/* eslint-disable */
<template>
  <div id="app">
    <div id="nav">
      <vue-particles
        color="#e5e9f2"
        :particleOpacity="0.7"
        :particlesNumber="150"
        shapeType="circle"
        :particleSize="4"
        linesColor="#e5e9f2"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="250"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
        class="lizi"
      />
    </div>
    <router-view/>
  </div>
</template>

<style>
  body{
    background-color: rgb(60, 63, 65);

  }
  .lizi{
    position:fixed;
    top:0;
    width:100%;
  }
</style>
<script>
  const BASE_URL = 'http://localhost:8084'; //定义全局接口地址
  export default {
    name: 'App',
    provide(){
      return{
        reload: this.reload
      }
    },
    data(){
      return{
        isRouterAlive: true
      }
    },
    methods:{
      reload(){
        this.isRouterAlive = false
        this.$nextTick(function (){
          this.isRouterAlive = true
        })
      }
    }
  }
</script>
