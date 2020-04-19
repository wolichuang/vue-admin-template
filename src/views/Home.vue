<template>
  <el-container class="home-container">
    <!-- 页头 -->
    <el-header>
      <div class="logo">
        <img src="../assets/logo.png"
             alt="">
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info"
                 @click="logout"
                 class="logo-out">退出</el-button>
    </el-header>
    <!-- end -->
    <!-- 内容 -->
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <!-- 切换 -->
        <div class="toggle-button"
             @click="toggleCollapse">|||</div>
        <!-- end -->
        <!-- 侧边栏 -->
        <el-menu background-color="#333744"
                 text-color="#fff"
                 active-text-color="#409EFF"
                 router
                 unique-opened
                 :default-active="activePath"
                 :collapse="isCollapse"
                 :collapse-transition="false">
          <!--一级菜单 -->
          <el-submenu v-for="item in menulist"
                      :key="item.id"
                      :index="'/' + item.path">
            <template slot="title">
              <i :class="iconsMap[item.id]"></i>
              <span>{{item.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item v-for="subItem in item.children"
                          :key="subItem.id"
                          :index="'/' + subItem.path"
                          @click="saveAsideState('/' + subItem.path)">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
            <!-- end -->
          </el-submenu>
          <!-- end -->
        </el-menu>
        <!-- end -->
      </el-aside>
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- end -->
  </el-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      menulist: [],
      iconsMap: {
        125: 'iconfont icon-user',
        103: 'iconfont icon-tijikongjian',
        101: 'iconfont icon-shangpin',
        102: 'iconfont icon-danju',
        145: 'iconfont icon-baobiao'
      },
      // 是否折叠
      isCollapse: false,
      // 被激活的链接地址
      activePath: ''
    }
  },
  created () {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath') // 获取高亮菜单
  },
  methods: {
    async getMenuList () {
      // 获取列表信息
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
      // console.log(this.menulist)
    },
    // 保存侧边栏状态
    saveAsideState (activePath) {
      this.activePath = activePath
      window.sessionStorage.setItem('activePath', activePath)
    },
    // 切换
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    // 退出
    logout () {
      window.sessionStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #373d41;
  font-size: 20px;
  color: #fff;
  > .logo {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
    }
    span {
      margin-left: 15px;
    }
  }
  > .logo-out {
    background: none;
    border: 0;
  }
}

.el-aside {
  background-color: #333744;
  height: 100%;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
.iconfont {
  margin-right: 10px;
}

.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
