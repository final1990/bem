<template>
  <div class="bem-leftmenu">
    <MenuHeader></MenuHeader>
    <div class="leftmenu-scroll">
      <ul class="leftmenu-nav">
        <li v-for="menu in menus" :key="menu.id" :id="menu.id" :class="['leftmenu-item', {'leftmenu-itemed': !!menu.state}]">
          <a to="menu.url===undefined||menu.url===''?'/':menu.url" @click="onMenuClick(menu)">
            <i class="fa fa-home"></i>
            <cite>{{menu.name}}</cite>
            <span :class="[{'leftmenu-item-more': menu.type==='folder'}]"></span>
          </a>
          <ChildMenu v-if="menu.children && menu.children.length > 0" v-for="cmenu in menu.children" :key="cmenu.id"
            :menu="cmenu" @onNodeClick="onNodeClick">
          </ChildMenu>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import MenuHeader from "./MenuHeader";
  import ChildMenu from "./ChildMenu"
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  require('@/mock/mockServer')
  Vue.use(VueResource)

  const MENU_FOLDER = 'folder';

  export default {
    name: 'Menu',
    components: {
      MenuHeader,
      ChildMenu
    },
    created() {
      this.$http.get('/api/menu').then((response) => {
        this.menus = response.body
        console.log(response.body)
      }, (response) => {
        console.log("失败了")
      })
    },
    data() {
      return {
        menus: [],
        selectedItems: [],
        selectedLevel: 0
      }
    },
    methods: {
      onMenuClick(menu) {
        console.log(arguments)
        if (MENU_FOLDER === type) {
          //如果是文件夹, 更改文件夹状态
          menu.state = !menu.state
          return;
        }
        if (url === undefined || url === '') {
          url = '/';
        }

        this.$router.push(menu.url);
      },
      onNodeClick(itemId, type, url) {
        this.onMenuClick(itemId, type, url)
      },
      itemed(menu) {
        return !!menu.state
      }
    }
  };
</script>