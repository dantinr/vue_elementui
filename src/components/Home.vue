<template>
  <el-container>
    <el-header>
      <div>
        <h2 class="web-title">电商管理后台</h2>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
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
    background-color: antiquewhite;
    height: 100%;
  }
  .el-main {
    background-color: bisque;
  }
</style>
