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
    <div class="message__body">
      <Progress :active="props.message.autoClose" :duration="props.message.duration">
        <template #icon>
          <Icon :name="props.message.type" size="16"/>
        </template>
      </Progress>
      <div class="message__content">
        <template v-if="props.message.type === 'confirm'">
          {{ props.message.content.text}}
        </template>
        <template v-else>
          {{ props.message.content }}
        </template>
      </div>
      <button type="button" class="message__close" v-if="!props.message.autoClose">
        <Icon name="close" size="20" color="#777777"/>
      </button>
    </div>
    <div class="message__actions" v-if="props.message.type === 'confirm'">
      <button class="yes" @click="props.message.content.onConfirm()">{{props.message.content.confirmText}}</button>
      <button class="no" @click="props.message.content.onCancel()"> {{props.message.content.cancelText}}</button>
    </div>
  </div>
</template>
<style lang="scss">
.message{
  display: flex;
  flex-direction: column;
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
  &__body{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
  &__actions{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    width: 100%;
    .yes,.no{
      border: none;
      border-radius: 32px;
      padding: 8px 12px;
      font-size: 12px;
      cursor: pointer;
      width: 100%;
    }
    .yes{
      background-color: #36bb70;
      color: #fff;
    }
    .no{
      background-color: #ea584c;
      color: #fff;
    }
  }
}
</style>