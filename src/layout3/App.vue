<script setup lang="ts">
import { BaseApp } from '@/BaseApp'
import { ref, type Ref } from 'vue'

const { tabs, selectedTab, selectTab, newTab, deleteTab } = BaseApp()
const tabsClosed: Ref<boolean> = ref(false)

function openTab(id: number) {
  selectTab(id)
  tabsClosed.value = true
}
</script>
<template>
  <div class="tabs" :class="tabsClosed ? 'tabs-closed' : ''">
    <div v-if="tabs.length > 0" class="tab-wrapper">
      <div
        class="tab"
        v-for="({ id }, index) in tabs"
        :key="id"
        @click="openTab(id)"
        :class="selectedTab!.id == id ? 'tab-active' : ''"
      >
        {{ index + 1 }}
        <button @click.stop="deleteTab(index)" class="close-button">x</button>
      </div>
    </div>
    <div class="tab" @click="newTab">+</div>
  </div>
  <div class="input">
    <button class="return" @click="tabsClosed = false">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#e8eaed"
      >
        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
      </svg>
    </button>
    <textarea v-if="selectedTab !== null" v-model="selectedTab.text" class="textarea"> </textarea>
  </div>
</template>

<style scoped>
.tabs {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgb(108, 116, 116);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 5px;
  z-index: 100;
}

.tabs-closed {
  left: -100vw;
}

.tab {
  background-color: rgb(110, 255, 255);
  box-shadow: 2px 2px #3790a0;
  width: 100%;
  height: 3em;
  max-width: 720px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: black;
  cursor: pointer;
  position: relative;
}

.tab-active {
  background-color: rgb(29, 25, 6);
  color: #fff;
  box-shadow: none;
}

.tab-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 1em;
}

.textarea {
  height: 100%;
  width: 100%;
  color: #eefcff;
  background-color: black;
  resize: none;
}

.input {
  position: fixed;
  height: 100vh;
  width: 100vw;
}

.return {
  position: absolute;
  top: 2em;
  right: 2em;
  border: 0;
  background: none;
  cursor: pointer;
}

.close-button {
  background-color: #ff0000;
  color: #ffffff;
  position: absolute;
  height: 100%;
  border-radius: inherit;
  right: 0;
}
</style>
