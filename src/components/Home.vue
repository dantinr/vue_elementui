<template>
  <el-container>
    <el-header>
      <div>
        <h2 class="web-title">电商管理后台</h2>
      </div>
    </el-header>
    <el-container>
      <el-aside width="250px">

<!--        菜单开始-->
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1" to="/users">用户列表</el-menu-item>
          </el-submenu>
        </el-menu>
<!--        菜单结束-->

      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

  .el-container {
    height: 100%;
  }
  .el-header {
    background-color: #2b3b4b;
    color: #fff;
    display: flex;
  }
  .el-header .web-title {
    display: flex;
    align-content: center;
  }
  .el-aside {
    background-color: #545c64;
    height: 100%;
  }
  .el-main {
    background-color: bisque;
  }
</style>
