<template>
  <BaseIcon>
    <svg
      t="1669657349300"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1593"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      :fill="fill"
    >
      <path
        d="M897.18953635 503.87539624L632.06809834 768.99683426l-41.24111162-41.24111305 223.88032496-223.88032497-223.880325-223.88032636 41.24111166-41.24111168 265.12143801 265.12143804z m-695.20732545 0l223.880325 223.88032499-41.24111304 41.24111303L119.49998484 503.87539624 384.62142286 238.7539582l41.24111304 41.24111168-223.880325 223.88032636z"
        p-id="1594"
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
