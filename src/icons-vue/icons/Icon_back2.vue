<template>
  <BaseIcon>
    <svg
      t="1670080529955"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2232"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      :fill="fill"
    >
      <path
        d="M586.24 819.20000001c-5.12 0-7.68 0-12.8-2.56L102.4 542.72000001c-7.68-5.12-12.8-12.8-12.8-23.04s5.12-17.92 12.8-23.04l471.04-273.92c7.68-5.12 17.92-5.12 25.6 0 7.68 5.12 12.8 12.8 12.8 23.04v112.64l232.96-135.68c7.68-5.12 17.92-5.12 25.6 0 7.68 5.12 12.8 12.8 12.8 23.04v545.28c0 10.24-5.12 17.92-12.8 23.04-7.68 5.12-17.92 5.12-25.6 0L609.28 678.40000001v112.64c2.56 15.36-7.68 28.16-23.04 28.16zM166.4 519.68000001L563.2 747.52000001v-112.64c0-10.24 5.12-17.92 12.8-23.04 7.68-5.12 17.92-5.12 25.6 0l235.52 135.68V291.84000001l-232.96 135.68c-7.68 5.12-17.92 5.12-25.6 0-7.68-5.12-12.8-12.8-12.8-23.04v-112.64L166.4 519.68000001z"
        p-id="2233"
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
