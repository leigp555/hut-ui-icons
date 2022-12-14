<template>
  <BaseIcon>
    <svg
      t="1670576099278"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2143"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      :fill="fill"
    >
      <path
        d="M92 92l840 0C965.104 92 992 118.864 992 152c0 33.136-26.896 60-60 60L92 212C58.864 212 32 185.136 32 152 32 118.864 58.864 92 92 92z"
        p-id="2144"
      />
      <path
        d="M92 452l840 0c33.104 0 60 26.864 60 60 0 33.104-26.896 60-60 60L92 572C58.864 572 32 545.104 32 512 32 478.864 58.864 452 92 452z"
        p-id="2145"
      />
      <path
        d="M92 812l840 0c33.104 0 60 26.896 60 60s-26.896 60-60 60L92 932C58.864 932 32 905.104 32 872S58.864 812 92 812z"
        p-id="2146"
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
