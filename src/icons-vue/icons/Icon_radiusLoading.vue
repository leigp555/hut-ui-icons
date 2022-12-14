<template>
  <BaseIcon>
    <svg
      t="1668927952762"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1346"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      :fill="fill"
    >
      <path
        d="M258.875 258.875m-168.75 0a168.75 168.75 0 1 0 337.5 0 168.75 168.75 0 1 0-337.5 0Z"
        fill="#EBF2FC"
        p-id="1347"
      />
      <path
        d="M765.125 258.875m-168.75 0a168.75 168.75 0 1 0 337.5 0 168.75 168.75 0 1 0-337.5 0Z"
        fill="#B5D2F3"
        p-id="1348"
      />
      <path
        d="M765.125 765.125m-168.75 0a168.75 168.75 0 1 0 337.5 0 168.75 168.75 0 1 0-337.5 0Z"
        fill="#7FB0EA"
        p-id="1349"
      />
      <path
        d="M258.875 765.125m-168.75 0a168.75 168.75 0 1 0 337.5 0 168.75 168.75 0 1 0-337.5 0Z"
        fill="#4A90E2"
        p-id="1350"
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
