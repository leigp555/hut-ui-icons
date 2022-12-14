<template>
  <BaseIcon>
    <svg
      t="1668666645148"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1462"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      :fill="fill"
    >
      <path
        d="M512 62C263.27304688 62 62 263.27304688 62 512s201.27304688 450 450 450 450-201.27304688 450-450S760.72695312 62 512 62z m229.09130859 373.90869141L495.63652345 681.36347657c-4.90957031 4.90957031-11.45478516 8.18261719-18.81826173 8.18261718-9 1.63564453-18-0.81914063-24.54521485-7.36435547L297.63652343 526.72695312a27.16347655 27.16347655 0 0 1 0-38.45390624l13.0904297-13.0913086c10.63652345-10.63652345 27.81826172-10.63652345 38.45478515 0l124.36347656 124.36347656 215.18261719-215.18173829c10.63564453-10.63652345 27.81738281-10.63652345 38.45390625 0l13.90957031 13.09130861c10.63564453 10.63652345 10.63564453 27.81738281 0 38.45390625z"
        p-id="1463"
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
