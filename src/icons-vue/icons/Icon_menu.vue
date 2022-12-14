<template>
  <BaseIcon>
    <svg
      t="1670385444894"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1843"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      :fill="fill"
    >
      <path
        d="M332.6 530.31666666h582c24.7 0 44.8 20 44.8 44.8 0 24.7-20 44.8-44.8 44.8h-582c-24.7 0-44.8-20-44.8-44.8 0-24.7 20-44.8 44.8-44.8zM108.7 530.31666666h44.8c24.7 0 44.8 20 44.8 44.8 0 24.7-20 44.8-44.8 44.8h-44.8c-24.7 0-44.8-20-44.8-44.8 0.1-24.7 20.1-44.8 44.8-44.8zM108.7 798.91666666h805.8c24.7 0 44.8 20 44.8 44.79999999 0 24.7-20 44.8-44.8 44.80000001H108.7C84 888.51666666 64 868.41666666 64 843.71666665c0-24.7 20-44.8 44.7-44.79999999zM108.7 261.71666666h805.8c24.7 0 44.8 20 44.8 44.79999999 0 24.7-20 44.8-44.8 44.8H108.7c-24.7 0-44.8-20-44.8-44.8 0.1-24.7 20.1-44.8 44.8-44.79999999z"
        fill=""
        p-id="1844"
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
