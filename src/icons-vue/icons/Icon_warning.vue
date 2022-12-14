<template>
  <BaseIcon>
    <svg
      t="1668666654834"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1616"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      :fill="fill"
    >
      <path
        d="M512 56.88888853C260.77866667 56.88888853 56.88888853 260.77866667 56.88888853 512S260.77866667 967.11111147 512 967.11111147 967.11111147 763.22133333 967.11111147 512 763.22133333 56.88888853 512 56.88888853zM481.65925973 293.54666667c0-16.99081493 13.3499264-30.34074027 30.34074027-30.34074027s30.34074027 13.3499264 30.34074027 30.34074027v254.86222186c0 16.99081493-13.3499264 30.34074027-30.34074027 30.34074134s-30.34074027-13.3499264-30.34074027-30.34074134V293.54666667zM512 736.5214816c-23.0589632 0-42.4770368-19.4180736-42.4770368-42.4770368s19.4180736-42.4770368 42.4770368-42.47703787 42.4770368 19.4180736 42.4770368 42.47703787-19.4180736 42.4770368-42.4770368 42.4770368z"
        p-id="1617"
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
