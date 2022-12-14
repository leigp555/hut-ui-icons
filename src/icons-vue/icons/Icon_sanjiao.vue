<template>
  <BaseIcon>
    <svg
      t="1668492007588"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="12548"
      :width="width"
      :height="height"
      :fill="fill"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M128.005 302.974l386.971 420.571 381.019-422.746z"
        fill=""
        p-id="12549"
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
