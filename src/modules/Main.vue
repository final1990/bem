<template>
<div class="main-container">
  <Header/>
  <Menu/>
  <Body/>
</div>
</template>

<script>
import Menu from '@/modules/menu/Menu'
import Header from '@/modules/header/Header'
import Body from '@/modules/body/Body'

export default {
  components:{
    Menu,
    Header,
    Body,
  }
}
</script>

<style lang="stylus" scoped>
.main-container
  width 100%
  height 100%
</style>
