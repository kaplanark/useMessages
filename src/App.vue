<script setup>
import { ref } from "vue";
import MessagesProvider from "./messages/MessagesProvider.vue";
import useMessages from "./messages";

const message = useMessages();

const duration = ref(3000);
const autoClose = ref(true);
const content = ref('');

const handleClick = (type) => {
  message.addMessage({
    type : type,
    content: content.value || 'This is a message with type ' + type,
    autoClose : autoClose.value,
    duration: duration.value,
  });
};

const handleShortcutClick = ()=>{
  message.error('This is a message with type error');
}
</script>

<template>
  <MessagesProvider>
    <form class="form">
      <div class="form__group">
        <input type="checkbox" v-model="autoClose" id="autoClose" />
        <label for="autoClose">Auto close</label>
      </div>
      <div class="form__group">
        <label for="content">Content</label>
        <input type="text" v-model="content" id="content" />
      </div>
      <div class="form__group">
        <label for="duration">Duration</label>
        <input type="number" v-model="duration" id="duration" />
      </div>
      <div class="form__group">
        <div class="btn-group">
          <button type="button" class="btn btn--error" @click="handleClick('error',)">Error</button>
          <button type="button" class="btn btn--error" @click="handleShortcutClick">Error Shortcut</button>
          <button type="button"  class="btn btn--success" @click="handleClick('success')">Success</button>
          <button type="button" class="btn btn--warning" @click="handleClick('warning')">Warning</button>
          <button type="button" class="btn btn-default" @click="handleClick('default')">Default</button>
          <button type="button" class="btn btn--info" @click="handleClick('info')">Info</button>
        </div>
      </div>
    </form>
  </MessagesProvider>
</template>

<style lang="scss">
.form {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  &__group{
    display: flex;
    align-items: center;
    gap: 16px;
  }
}
.btn{
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #2c2c2c;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  &--error{
    background-color: #f67e64;
  }
  &--success{
    background-color: #38d782;
  }
  &--warning{
    background-color: #e4a459;
  }
  &--info{
    background-color: #1db09e;
  }
  &--default{
    background-color: #2c2c2c;
  }
}

.btn-group{
  display: flex;
  gap: 16px;
}
</style>
