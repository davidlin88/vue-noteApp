<template>
  <div id="toolbar">
    <i class="iconfont icon-jia" @click="addNote"></i>
    <i class="iconfont icon-xing" @click="toggleFavorite" :class="{starred:activeNote['favorite']}"></i>
    <i class="iconfont icon-cha" @click="deleteNote" id="cha"></i>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  computed: {
    // 什么鬼
    ...mapState({
      activeNote: state => state.activeNote
    })
  },
  methods: {
    ...mapActions({
      addNote: 'addNote',
      toggleFavorite: 'toggleFavorite',
      deleteNote: 'deleteNote'
    })
  }
}
</script>

<style>
#toolbar {
  float: left;
  width: 80px;
  height: 100%;
  background-color: #30414D;
  color: #767676;
  padding: 35px 25px 25px 25px;
  text-align: center;
}
#toolbar i {
  font-size: 30px;
  line-height: 2;
  cursor: pointer;
}
#cha::before {
  font-size: 24px;
}
</style>
