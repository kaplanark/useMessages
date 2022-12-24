<script setup>
import useMessages from "./";
import Icon from "./icons/Icon.vue";
import Progress from "./Progress.vue";

const message = useMessages();

const props = defineProps({message: {type: Object, default: () => ({})},});
const handleRemove = (id) => message.removeMessage(id);
</script>
<template>
  <div class="message" :class="'message--' + props.message.type" @click="handleRemove(props.message.id)">
    <Progress :active="props.message.autoClose" :duration="props.message.duration">
      <template #icon>
        <Icon :name="props.message.type" size="16"/>
      </template>
    </Progress>
    <div class="message__content">{{ props.message.content}}</div>
    <button type="button" class="message__close" v-if="!props.message.autoClose">
      <Icon name="close" size="20" color="#777777"/>
    </button>
  </div>
</template>
<style lang="scss">
.message{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: fit-content;
  padding: 12px 32px;
  border-radius: 12px;
  cursor: pointer;
  background-color: #2c2c2c;

  &__content{
    font-size: 12px;
    flex: 1;
  }
  &__close{
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>