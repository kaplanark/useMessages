<script setup>
import {computed} from "vue";
const props = defineProps({
  duration: { type: Number, default: 5000 },
  active: { type: Boolean, default: true },
});
const progressDuration = computed(() => {
  if (props.active) return props.duration / 1000;
  return 0;
});
</script>
<template>
  <div class="progress">
    <svg class="progress__ring"  width="30" height="30">
      <circle class="progress__circle" stroke="#6e6e6e" stroke-width="1" fill="transparent" r="14" cx="15" cy="15" :style="{animationDuration: progressDuration + 's'}" />
    </svg>
    <div class="progress__content">
      <slot name="icon"/>
    </div>
  </div>
</template>

<style lang="scss">
.progress{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &__circle {
    transition: 0.35s stroke-dashoffset;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    animation-name: progress;
    animation-timing-function: linear;
  }
  &__content{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
  100% {
    stroke-dasharray: 100 100;
  }
}
</style>