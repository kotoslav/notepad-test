<script setup lang="ts">
import { BaseApp } from '@/BaseApp'

const { tabs, selectedTab, selectTab, newTab, deleteTab } = BaseApp()
if (tabs.length == 0) {
  newTab()
} else {
  tabs.length = 1
}
selectTab(tabs[0].id)
</script>
<template>
  <textarea v-if="selectedTab !== null" v-model="selectedTab.text" class="textarea"> </textarea>
</template>

<style scoped>
.textarea {
  height: 100%;
  width: 100%;
  color: #eefcff;
  background-color: black;
  flex-grow: 1;
  resize: none;
}
</style>
