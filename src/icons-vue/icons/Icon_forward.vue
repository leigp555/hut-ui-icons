<template>
  <BaseIcon>
    <svg
      t="1670080566021"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1783"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      :fill="fill"
    >
      <path
        d="M437.76 204.79999999c5.12 0 7.68 0 12.8 2.56L921.6 481.27999999c7.68 5.12 12.8 12.8 12.8 23.04s-5.12 17.92-12.8 23.04l-471.04 273.92c-7.68 5.12-17.92 5.12-25.6 0-7.68-5.12-12.8-12.8-12.8-23.04l0-112.64-232.95999999 135.68c-7.68 5.12-17.92 5.12-25.60000001 0-7.68-5.12-12.8-12.8-12.8-23.04l-1e-8-545.28c0-10.24 5.12-17.92 12.80000001-23.04 7.68-5.12 17.92-5.12 25.6 0L414.72 345.59999999l1e-8-112.64c-2.56-15.36 7.68-28.16 23.03999999-28.16zM857.6 504.31999999L460.8 276.47999999l0 112.64c0 10.24-5.12 17.92-12.80000001 23.04-7.68 5.12-17.92 5.12-25.59999999-1e-8l-235.52-135.67999999L186.88 732.15999999l232.96-135.68c7.68-5.12 17.92-5.12 25.6 0 7.68 5.12 12.8 12.8 12.8 23.04l0 112.64L857.6 504.31999999z"
        fill="#333333"
        p-id="1784"
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
