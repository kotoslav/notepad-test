import { ref, reactive, watch, getCurrentInstance } from 'vue'
import type { Ref } from 'vue'
import Store from './utils/store'
import { sendApi, getApi } from './utils/api'

export interface Tab {
  id: number
  text: string
}

export function BaseApp() {
  const store = new Store()

  const tabs: Tab[] = reactive(store.data)

  getApi().then((result) => {
    if (!(result instanceof Error)) {
      tabs.splice(0, tabs.length, ...result)
    }
  })

  let id: number = 1

  if (tabs.length > 0) {
    id = tabs[tabs.length - 1].id + 1
  }

  const selectedTab: Ref<Tab | null> = ref(tabs[0] || null)

  watch(tabs, () => {
    store.saveToLS()
    sendApi(tabs)
  })

  function selectTab(id: number) {
    selectedTab.value = tabs.find((tab) => tab.id == id) || null
  }

  function newTab() {
    const tabId: number = id++
    tabs.push({ id: tabId, text: '' })
    selectTab(tabId)
  }

  function deleteTab(index: number) {
    tabs.splice(index, 1)
    if (selectedTab.value !== null) {
      const previousTab: Tab | null =
        [...tabs].reverse().find((tab) => tab.id < selectedTab.value!.id) || null
      if (tabs.length !== 0) {
        selectTab(previousTab === null ? tabs[0].id : previousTab.id)
      } else selectTab(0)
    }
  }

  return { tabs, selectedTab, selectTab, newTab, deleteTab }
}
