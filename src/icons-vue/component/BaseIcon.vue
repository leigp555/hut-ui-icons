<template>
  <Component
    :is="slots[0]"
    aria-hidden="true"
  />
</template>

<script lang="ts" setup>
import { toRefs, useSlots } from 'vue';

type IconProps={
  width?:string
  height?:string
  fill?:string
}

const props = withDefaults(defineProps<IconProps>(), {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
})

const slots = useSlots()?.default?.()

const { width, height, fill } = toRefs(props)
</script>

<style>
.icon {
  vertical-align: -0.15em;
  overflow: hidden;
}
</style>
