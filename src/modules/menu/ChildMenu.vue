<template>
  <dl class="leftmenu-nav-child">
    <dd :class="[{'leftmenu-itemed': (menu.type==='folder'&&selectedItem1 !=='' && selectedItem1 === menu.id)}]">
      <a @click="onNodeClick(menu.id, menu.type, menu.url)">
        {{menu.name}}
        <span :class="[{'leftmenu-item-more': menu.type==='folder'}]"></span>
      </a>
      <ChildMenu v-if="menu.children && menu.children.length > 0" v-for="cmenu in menu.children" :key="cmenu.id" :menu="cmenu"
        @onNodeClick="onNodeClick1" />
    </dd>
  </dl>
</template>

<script>
  export default {
    name: 'ChildMenu',
    props: {
      menu: {
        type: Object,
        required: true
      },
    },
    data() {
      return {
        selectedItem1: '',
      }
    },
    methods: {
      onNodeClick(itemId, type, url) {
         this.$emit('onNodeClick', itemId, type, url)
      },
      onNodeClick1(itemId, type, url){
        this.$emit('onNodeClick', itemId, type, url)
      }
    }
  }
</script>