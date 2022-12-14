<template>
  <BaseIcon>
    <svg
      t="1668272582494"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2921"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      :fill="fill"
    >
      <path
        d="M512.3 901.7c-52.6 0-103.6-10.3-151.6-30.6-46.4-19.6-88-47.7-123.8-83.5s-63.8-77.4-83.5-123.8c-20.3-48-30.6-99.1-30.6-151.6 0-52.6 10.3-103.6 30.6-151.6 19.6-46.4 47.7-88 83.5-123.8s77.4-63.8 123.8-83.5c48-20.3 99.1-30.6 151.6-30.6s103.6 10.3 151.6 30.6c46.4 19.6 88 47.7 123.8 83.5s63.8 77.4 83.5 123.8c20.3 48 30.6 99.1 30.6 151.6 0 52.6-10.3 103.6-30.6 151.6-19.6 46.4-47.7 88-83.5 123.8s-77.4 63.8-123.8 83.5c-48 20.3-99 30.6-151.6 30.6z m0-709c-176.2 0-319.5 143.3-319.5 319.5s143.3 319.5 319.5 319.5 319.5-143.3 319.5-319.5c0-176.1-143.3-319.5-319.5-319.5z"
        p-id="2922"
      />
      <path
        d="M560.4 676.5c-9 0-17.9-3.4-24.7-10.3L408.8 539.3c-13.7-13.7-13.7-35.8 0-49.5l126.9-126.9c13.7-13.7 35.8-13.7 49.5 0 13.7 13.7 13.7 35.8 0 49.5L483 514.6l102.2 102.2c13.7 13.7 13.7 35.8 0 49.5-6.8 6.8-15.8 10.2-24.8 10.2z"
        p-id="2923"
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
