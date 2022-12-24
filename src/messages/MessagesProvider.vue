<script setup>
import { computed } from "vue";
import Message from "./Message.vue";
import useMessages from "./";
import './style.css';
const message = useMessages();
const messages = computed(() => message.getMessages());
</script>

<template>
    <div class="messages-provider">
        <div class="messages-provider__wrapper">
          <TransitionGroup name="slide">
            <Message v-for="message in messages" :key="message.id" :message="message" />
          </TransitionGroup>
        </div>
      <slot />
    </div>
</template>

<style lang="scss">
.messages-provider {
  &__wrapper{
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 8px;
    width: calc(100% - 16px);
    z-index: 9999;
  }
}
</style>