import Vue from 'Vue'
import Editor from '@/components/Editor'

describe('Editor.vue', () => {
  let vm, Constructor

  beforeAll(() => {

    Constructor = Vue.extend(Editor)
    vm = new Constructor().$mount()

  })

  test('it should have a class editor', () => {
    expect(vm.$el.className).toBe('editor')
  })
  test('it should have textarea', () => {
    expect(vm.$el.querySelector('textarea')).not.toBeNull()
  })
  
  test('it should display the content in textarea when passed as a prop', () => {
    vm = new Constructor( { propsData: { 'value': 'hello' } }).$mount()
    expect(vm.$el.querySelector('textarea').value).toBe('hello')
  })
})
