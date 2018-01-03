<template>
  <div id="app">
    <tool-bar></tool-bar>
    <notes-list></notes-list>
    <notes-editor></notes-editor>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar'
import NotesList from './components/NotesList'
import NotesEditor from './components/NotesEditor'
export default {
  components: {
    ToolBar,
    NotesList,
    NotesEditor
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app, html{
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  max-height: 100%;
  position: relative;
  font-family: 'Raleway', "微软雅黑", sans-serif;
}
</style>
