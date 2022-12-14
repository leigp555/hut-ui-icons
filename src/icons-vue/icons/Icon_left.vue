<template>
  <BaseIcon>
    <svg
      t="1667372931603"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3318"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      :fill="fill"
    >
      <path
        d="M901.12 570.0608H187.7504V453.9392H901.12a29.0304 29.0304 0 0 1 29.0304 29.0304v58.0608a29.0304 29.0304 0 0 1-29.0304 29.0304z"
        p-id="3319"
      />
      <path
        d="M419.3792 807.8848L123.4944 512l295.8848-295.8848a29.0304 29.0304 0 0 1 40.96 0l40.96 40.96a28.928 28.928 0 0 1 0 40.96L287.6928 512l213.76 213.8112a28.928 28.928 0 0 1 0 40.96l-40.96 40.96a28.928 28.928 0 0 1-41.1136 0.1536z"
        p-id="3320"
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
