<script setup>
import { computed } from "vue";
import { icons } from "./icons";
const props = defineProps(["name", "size", "color"]);

const path = computed(() => {
  return icons.find((icon) => icon.name === props.name).path;
});
const color = computed(() => {
  if (props.name === "close") return props.color || "#dcdcdc";
  if(props.name === "success") return props.color || "#38d782";
  if(props.name === "error") return  props.color || "#f67e64";
  if(props.name === "warning") return props.color || "#e4a459";
  if(props.name === "info") return props.color || "#1db09e";
  if(props.name === "default") return props.color || "#dcdcdc";
  return "#dcdcdc";
});
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="props.size" :height="props.size" :fill="color" class="svg" viewBox="0 0 16 16" v-html="path"></svg>
</template>