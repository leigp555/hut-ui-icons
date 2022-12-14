<template>
  <BaseIcon>
    <svg
      t="1667385693019"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4000"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      :fill="fill"
    >
      <path
        d="M632.68 903.968a29.984 29.984 0 0 1-21.28-8.824L249.528 533.256a30.088 30.088 0 0 1 0-42.568l361.864-361.848a30.08 30.08 0 0 1 42.56 0 30.08 30.08 0 0 1 0 42.568l-340.576 340.56 340.576 340.608a30.08 30.08 0 0 1 0 42.568 29.952 29.952 0 0 1-21.272 8.824z"
        p-id="4001"
      />
    </svg>
  </BaseIcon>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import BaseIcon from '../component/BaseIcon.vue'

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

const { width, height, fill } = toRefs(props)
</script>
