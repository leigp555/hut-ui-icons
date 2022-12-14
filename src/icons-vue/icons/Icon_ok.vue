<template>
  <BaseIcon>
    <svg
      t="1667417004071"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4927"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      :fill="fill"
    >
      <path
        d="M892.064 261.888a31.936 31.936 0 0 0-45.216 1.472L421.664 717.248l-220.448-185.216a32 32 0 1 0-41.152 48.992l243.648 204.704a31.872 31.872 0 0 0 20.576 7.488 31.808 31.808 0 0 0 23.36-10.112L893.536 307.136a32 32 0 0 0-1.472-45.248z"
        p-id="4928"
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
