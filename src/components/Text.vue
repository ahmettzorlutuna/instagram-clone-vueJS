<template>
  <component :is="tag" :class="size">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'Text',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    size: {
      type: String,
      default: 'normal', //big:16 , normal:14 , small:12 , xsmall:10
      validator: (value) => {
        const selector =
          ['big', 'normal', 'small', 'xsmall'].indexOf(value) !== -1
        return selector
      }
    }
  }
}
</script>

<style scoped>
.big {
  font-size: 16px;
}

.small {
  font-size: 12px;
}

.xsmall {
  font-size: 10px;
}
</style>
