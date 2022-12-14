<template>
  <BaseIcon>
    <svg
      t="1670080514386"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1933"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      :fill="fill"
    >
      <path
        d="M514.688 342.016a25.6 25.6 0 1 1-51.2 0l0-35.4944a76.8 76.8 0 0 1 119.4112-63.8976L900.1984 454.1568a76.8 76.8 0 0 1 0 127.808l-317.312 211.5328a76.8 76.8 0 0 1-119.3984-63.9104l1e-8-30.336a25.6 25.6 0 1 1 51.19999999 0l0 30.336a25.6 25.6 0 0 0 39.808 21.2992L871.7952 539.3664a25.6 25.6 0 0 0 0-42.6112l-317.312-211.5328a25.6 25.6 0 0 0-39.7952 21.2992l0 35.5072z"
        fill="#000000"
        p-id="1934"
      />
      <path
        d="M500.5952 539.3664a25.6 25.6 0 0 0 0-42.6112l-317.312-211.5328a25.6 25.6 0 0 0-39.7952 21.2992L143.48800001 729.6a25.6 25.6 0 0 0 39.80799999 21.2992L500.5952 539.3664z m-288.896 254.1312a76.8 76.8 0 0 1-119.4112-63.91040001l0-423.06559999a76.8 76.8 0 0 1 119.4112-63.89759999L528.99839999 454.1568a76.8 76.8 0 0 1 0 127.808l-317.31199999 211.5328z"
        fill="#000000"
        p-id="1935"
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
