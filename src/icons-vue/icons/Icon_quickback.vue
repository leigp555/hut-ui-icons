<template>
  <BaseIcon>
    <svg
      t="1670080543968"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2536"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      :fill="fill"
    >
      <path
        d="M509.312 681.984a25.6 25.6 0 1 1 51.2 0v35.4944a76.8 76.8 0 0 1-119.4112 63.8976L123.8016 569.8432a76.8 76.8 0 0 1 0-127.808l317.312-211.5328a76.8 76.8 0 0 1 119.3984 63.9104v30.336a25.6 25.6 0 1 1-51.2 0v-30.336a25.6 25.6 0 0 0-39.808-21.2992L152.2048 484.6336a25.6 25.6 0 0 0 0 42.6112l317.312 211.5328a25.6 25.6 0 0 0 39.7952-21.2992v-35.5072z"
        fill="#000000"
        p-id="2537"
      />
      <path
        d="M523.4048 484.6336a25.6 25.6 0 0 0 0 42.6112l317.312 211.5328a25.6 25.6 0 0 0 39.7952-21.2992V294.4a25.6 25.6 0 0 0-39.808-21.2992L523.4048 484.6336z m288.896-254.1312a76.8 76.8 0 0 1 119.4112 63.9104v423.0656a76.8 76.8 0 0 1-119.4112 63.8976L495.0016 569.8432a76.8 76.8 0 0 1 0-127.808l317.312-211.5328z"
        fill="#000000"
        p-id="2538"
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
