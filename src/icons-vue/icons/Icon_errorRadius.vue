<template>
  <BaseIcon>
    <svg
      t="1670038833655"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1661"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      :fill="fill"
    >
      <path
        d="M438.171875 708.87499973L438.171875 708.87499973 438.171875 708.87499973zM512 90.125C279.96874998 90.125 90.125 279.96874998 90.125 512s189.84375001 421.875 421.875 421.875 421.875-189.84375001 421.875-421.875S744.03125002 90.125 512 90.125zM512 881.140625C308.09374973 881.140625 142.859375 715.90625027 142.859375 512S308.09374973 142.859375 512 142.859375 881.140625 308.09374973 881.140625 512 715.90625027 881.140625 512 881.140625zM661.15390625 323.06468777l42.26027344 42.26027344-338.0821875 338.0821875-42.26027344-42.26027344 338.0821875-338.0821875ZM323.06468777 362.84609375l42.26027344-42.26027344 338.0821875 338.0821875-42.26027344 42.26027344-338.0821875-338.0821875Z"
        p-id="1662"
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
