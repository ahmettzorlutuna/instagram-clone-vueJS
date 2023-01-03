<template>
  <div class="home">
    <h1>Home</h1>
    <Text>Merahaba Dünya</Text>
    <Text tag="p" class="a1">Merahaba Dünya</Text>
    <Text tag="b" size="big">Merahaba Dünya</Text>
    <HomeSvg />
  </div>
</template>

<script>
// @ is an alias to /src
import Text from '@/components/Text.vue'
import HomeSvg from '@/icons/home.svg'

export default {
  name: 'HomeViews',
  components: {
    Text,
    HomeSvg
  }
}
</script>

<style scoped>
.a1 {
  color: rgb(var(--ig-elevated-separator));
}
</style>
