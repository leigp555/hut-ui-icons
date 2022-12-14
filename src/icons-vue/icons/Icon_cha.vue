<template>
  <BaseIcon>
    <svg
      t="1658577292511"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2273"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      :fill="fill"
    >
      <path
        d="M557.3 512l329.3-329.4a32 32 0 1 0-45.2-45.2L512 466.7 182.6 137.4a32 32 0 1 0-45.2 45.2L466.7 512 137.4 841.4a31.9 31.9 0 0 0 0 45.2 31.9 31.9 0 0 0 45.2 0L512 557.3l329.4 329.3a31.9 31.9 0 0 0 45.2 0 31.9 31.9 0 0 0 0-45.2z"
        p-id="2274"
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
