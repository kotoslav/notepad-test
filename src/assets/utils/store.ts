import type { Tab } from '@/BaseApp'

export default class Store {
  _data: Tab[]

  constructor() {
    this._data = []
    try {
      this.loadFromLS()
    } catch (e) {
      this._data = []
    }
    console.log(this.data)
  }

  set data(data: Tab[]) {
    this._data = data
  }

  get data(): Tab[] {
    return this._data
  }

  loadFromLS() {
    this.data = JSON.parse(localStorage.getItem('data')) || []
  }

  saveToLS() {
    localStorage.setItem('data', JSON.stringify(this.data))
  }
}
