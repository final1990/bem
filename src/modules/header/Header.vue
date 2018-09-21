<template>
  <div class="bem-header">
    <LayoutLeft/>
    <LayoutRight/>
  </div>
</template>

<script>
import LayoutLeft from './LayoutLeft'
import LayoutRight from './LayoutRight'

export default {
  components: {LayoutLeft, LayoutRight}
}
</script>

