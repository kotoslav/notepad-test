<script setup lang="ts">
import { ref } from 'vue'

let id = 0

const tabs = ref([
  { id: id++, text: 'hello, world1' },
  { id: id++, text: 'hello, world2' },
  { id: id++, text: 'hello, world3' }
])

let selectedTab = ref(tabs.value[0].id)

function selectTab(id: number) {
  selectedTab.value = id
}

function newTab() {
  const tabId = id++
  tabs.value.push({ id: tabId, text: '' })
  selectTab(tabId)
}
</script>
<template>
  <header class="tabs">
    <div
      class="tab"
      v-for="tab in tabs"
      :key="tab.id"
      @click="selectTab(tab.id)"
      :class="selectedTab == tab.id ? 'tab-active' : ''"
    >
      {{ tab.id }}
    </div>
    <div class="tab" @click="newTab">+</div>
  </header>
  <textarea v-model="tabs[selectedTab].text" contenteditable="true" class="textarea"> </textarea>
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
  color: black;
}

.tab-active {
  background-color: rgb(29, 25, 6);
  color: #fff;
  box-shadow: none;
}

.textarea {
  height: 100%;
  width: 100%;
  color: #eefcff;
  background-color: black;
  flex-grow: 1;
}
</style>
