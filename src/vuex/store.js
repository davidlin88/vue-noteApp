import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const changeListStatus = 'changeListStatus'
const addNote = 'addNote'
const editNote = 'editNote'
const deleteNote = 'deleteNote'
const toggleFavorite = 'toggleFavorite'
const setActiveNote = 'setActiveNote'

const state = {
  isAllList: true,
  notes: [],
  activeNote: {}
}

const mutations = {
  [changeListStatus] (state, bool) {
    state.isAllList = bool
  },
  [addNote] (state) {
    const newNote = {
      text: 'New note',
      favorite: !state.isAllList,
      _rm: Math.random() // 创建一个0~1的随机数作id
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },
  [editNote] (state, text) {
    state.activeNote.text = text // text从哪里来?
  },
  [deleteNote] (state) {
    let rm = state.activeNote['_rm']
    // 获取当前笔记索引
    let index = state.notes.findIndex((v, i) => {
      if (rm === v['_rm']) {
        return true
      }
    })
    // 笔记不为空,则删除当前笔记
    if (index >= 0) {
      state.notes.splice(index, 1)
    }
    // 将当前笔记设为第一个笔记或为空
    state.activeNote = state.notes[0] || {}
  },
  [toggleFavorite] (state) {
    // return 是否可以?
    state.activeNote['favorite'] = !state.activeNote['favorite']
  },
  [setActiveNote] (state, note) {
    state.activeNote = note
  }
}

const actions = {
  // 为什么括号变红?
  [changeListStatus] ({commit}, {bool}) {
    commit('changeListStatus', bool)
  },
  [addNote] ({commit}) {
    commit('addNote')
  },
  [editNote] ({commit}, {text}) {
    commit('editNote', text)
  },
  [deleteNote] ({commit}) {
    commit('deleteNote')
  },
  [toggleFavorite] ({commit}) {
    commit('toggleFavorite')
  },
  [setActiveNote] ({commit}, {note}) {
    commit('setActiveNote', note)
  }
}

const getters = {
  favoriteNotes: state => {
    // i可省略吗?
    return state.notes.filter((v, i) => v['favorite'])
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})