<script setup lang="ts">
import { BaseApp } from '@/BaseApp'

const { tabs, selectedTab, selectTab, newTab, deleteTab } = BaseApp()
</script>
<template>
  <header class="tabs">
    <div v-if="tabs.length > 0" class="tab-wrapper">
      <div
        class="tab"
        v-for="({ id }, index) in tabs"
        :key="id"
        @click="selectTab(id)"
        :class="selectedTab!.id == id ? 'tab-active' : ''"
      >
        {{ index + 1 }}
        <button @click.stop="deleteTab(index)" class="close-button">x</button>
      </div>
    </div>
    <div class="tab" @click="newTab">+</div>
  </header>
  <textarea v-if="selectedTab !== null" v-model="selectedTab.text" class="textarea"> </textarea>
</template>

<style scoped>
.tabs {
  height: 50px;
  width: 100%;
  background-color: rgb(108, 116, 116);
  display: flex;
  flex-wrap: nowrap;
  gap: 1em;
  padding: 5px;
}

.tab {
  background-color: rgb(110, 255, 255);
  box-shadow: 2px 2px #3790a0;
  width: 5em;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: black;
  cursor: pointer;
}

.tab-active {
  background-color: rgb(29, 25, 6);
  color: #fff;
  box-shadow: none;
}

.tab-active .close-button {
  opacity: 1;
  display: block;
}

.tab-wrapper {
  display: flex;
  gap: 1em;
}

.textarea {
  height: 100%;
  width: 100%;
  color: #eefcff;
  background-color: black;
  flex-grow: 1;
  resize: none;
}

.close-button {
  background-color: #ff0000;
  color: #ffffff;
  opacity: 0;
  display: none;
}
</style>
