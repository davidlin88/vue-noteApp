<template>
  <div id="note-editor">
    <textarea v-model="textVal" @change="editNote({text: textVal})" class="form-control">
    </textarea>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  data () {
    return {
      textVal: ''
    }
  },
  computed: {
    ...mapState({
      activeNote: state => state.activeNote
    })
  },
  methods: {
    ...mapActions({
      editNote: 'editNote'
    })
  },
  watch: {
    activeNote: function () {
      this.$data.textVal = this.activeNote['text']
    }
  }
}
</script>

<style>
#note-editor {
  height: 100%;
  margin-left: 380px;
}
#note-editor textarea {
  height: 100%;
  width: 100%;
  padding: 10px;
  border: none;
  font-family: "微软雅黑";
}
textarea:focus {
  outline: none;
}
</style>