import Vue from 'Vue'
import App from '@/components/App'

describe('App.vue', () => {
  let vm
  beforeAll(() => {
    const Constructor = Vue.extend(App)
    vm = new Constructor().$mount()
  })
  test('it should have a sidebar', () => {
    expect(vm.$el.querySelector('.sidebar')).not.toBeNull()
  })
  test('it should have a content panel', () => {
    expect(vm.$el.querySelector('.content')).not.toBeNull()
  })
  test('it\'s a content panel, it should have a editor', () => {
    expect(vm.$el.querySelector('.content .editor')).not.toBeNull()
  })
  test('it\'s a content panel. it should have a renderer', () => {
    expect(vm.$el.querySelector('.content .renderer')).not.toBeNull()
  })
})
