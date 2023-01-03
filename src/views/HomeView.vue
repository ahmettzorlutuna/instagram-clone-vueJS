<template>
  <div class="home">
    <h1>Home</h1>
    <Text>Merahaba Dünya</Text>
    <Text tag="p" class="a1">Merahaba Dünya</Text>
    <Text tag="b" size="big">Merahaba Dünya2</Text>
    //Svg but not like this component needed
    <svg
      aria-label="Ana Sayfa"
      class="_ab6-"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
        fill="none"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-width="2"
      ></path>
    </svg>
  </div>
</template>

<script>
// @ is an alias to /src
import Text from '@/components/Text.vue'

export default {
  name: 'HomeViews',
  components: {
    Text
  }
}
</script>

<style scoped>
.a1 {
  color: rgb(var(--ig-elevated-separator));
}
</style>
