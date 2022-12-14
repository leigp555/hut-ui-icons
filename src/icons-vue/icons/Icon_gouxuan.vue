<template>
  <BaseIcon>
    <svg
      t="1668865575881"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1249"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      :fill="fill"
    >
      <path
        d="M450.15904373 824.18601663c-7.65538153 10.48886689-18.83328799 16.90011083-30.86041154 17.71618776-0.86026382 0.05385279-1.71086178 0.05385279-2.56836393 0.0538528-11.12405367 0-21.86147191-4.80394523-29.94353325-13.51705081l-230.517567-248.71566821c-17.26327197-18.58749833-17.86117603-49.49623931-1.32008383-68.92605053 16.53833055-19.46433223 43.938355-20.10366155 61.21129284-1.48992725l196.80433831 212.2959915 375.92700986-472.83165715c15.18786821-20.83274549 42.4774254-23.80431494 60.93374386-6.70260135 18.45631844 17.1320921 21.1033903 47.86546629 5.92242628 68.66921413L450.15628206 824.18463579 450.15904373 824.18601663z"
        p-id="1250"
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
