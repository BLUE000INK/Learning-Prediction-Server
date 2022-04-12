<template>
  <div>
    <el-col :span="12" >
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo left_bar"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">
          <i class="el-icon-tickets"></i>
          <span slot="title">简介</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-coin"></i>
          <span slot="title">数据库1</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-coin"></i>
          <span slot="title">数据库2</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <div class="datatable">
      <el-table
        :data="tableData"
        height="100%"
        border
        style="width: 100%"
        :header-cell-style="{background:'green',color:'#fff'}"
      >
        <el-table-column
          fixed
          prop="id"
          label="id"
          width="50px">
        </el-table-column>
        <el-table-column
          prop="codeModule"
          label="codeModule"
          width="120px">
        </el-table-column>
        <el-table-column
          prop="codePresentation"
          label="codePresentation"
          width="150px">
        </el-table-column>
        <el-table-column
          prop="idStudent"
          label="idStudent"
          width="100px">
        </el-table-column>
        <el-table-column
          prop="gender"
          label="gender"
          width="80px">
        </el-table-column>
        <el-table-column
          prop="region"
          label="region"
          width="70px">
        </el-table-column>
        <el-table-column
          prop="highestEducation"
          label="highestEducation"
          width="150px">
        </el-table-column>
        <el-table-column
          prop="imdBand"
          label="imdBand"
          width="100px">
        </el-table-column>
        <el-table-column
          prop="ageBand"
          label="ageBand"
          width="90px">
        </el-table-column>
        <el-table-column
          prop="numOfPrevAttempts"
          label="numOfPrevAttempts"
          width="170px">
        </el-table-column>
        <el-table-column
          prop="studiedCredits"
          label="studiedCredits"
          width="130px">
        </el-table-column>
        <el-table-column
          prop="disability"
          label="disability"
          width="90px">
        </el-table-column>
        <el-table-column
          prop="finalResult"
          label="finalResult"
          width="100px">
        </el-table-column>
        <el-table-column
          prop="modulePresentationLength"
          label="modulePresentationLength"
          width="220px">
        </el-table-column>
        <el-table-column
          prop="sumClick"
          label="sumClick"
          width="90px">
        </el-table-column>
        <el-table-column
          fixed="right"
          prop="score"
          label="score"
          width="60px">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
      }
    },
    created () {
      this.$axios.get('http://localhost:8084/moocData/getAllData').then(res => {
        this.tableData = res.data
      })
    },
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>
<style>
  .left_bar{
    position: absolute;
    left: 30px;
    top: 70px;
    width: 200px;
    bottom: 9px;
    border: 5px solid #579242;
  }
  .datatable{
    position: fixed;
    top: 80px;
    left: 250px;
    right: 40px;
    bottom: 19px;
    border: 5px solid #FF5511;
    opacity: 90%;
  }
  /* 修改表头*/
  .el-table__header th {
    padding: 0;
    height: 30px;
    line-height: 30px;
  }
  /*列表中间的竖线*/
  .el-table--border td,
  .el-table--border th {
    border-right: 2px solid black !important;
  }
  .el-table td,
  .el-table th.is-leaf {
    border-bottom: 2px solid black !important;
  }
</style>
