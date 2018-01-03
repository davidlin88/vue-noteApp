<template>
  <div id="notes-list">
    <div id="list-header">
      <h2>Notes | David</h2>
      <div class="btn-group" role="group">
        <button class="btn btn-left" 
        :class="{active:isAllList}" 
        @click="changeStatus('isAll')">All Notes</button>
        <button class="btn btn-right"
        :class="{active:!isAllList}"
        @click="changeStatus('isFavorite')">Favorites</button>
      </div>
    </div>
    <div id="container">
      <div class="list-group">
        <a href="javascript:;" class="list-group-item"v-for="(v,k) in list" :class="{active:v['_rm'] === activeNote['_rm']}" @click="setActiveNote({note:v})">
          <h4 class="list-group-item-heading">
            {{v['text'].length > 10 ? v['text'].substring(0,10) + "..." : v['text']}}
          </h4>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {
      list: []
    }
  },
  computed: {
    ...mapState({
      isAllList: state => state.isAllList,
      notes: state => state.notes,
      activeNote: state => state.activeNote
    }),
    // 上下能合并吗?
    ...mapGetters({
      favoriteNotes: 'favoriteNotes'
    })
  },
  methods: {
    ...mapActions({
      setActiveNote: 'setActiveNote',
      changeListStatus: 'changeListStatus'
    }),
    changeStatus (s) {
      if (s === 'isAll') {
        this.changeListStatus({bool: true})
      } else if (s === 'isFavorite') {
        this.changeListStatus({bool: false})
      }
    },
    changeList () {
      if (this.isAllList) {
        this.$data.list = this.notes
      } else {
        this.$data.list = this.favoriteNotes
      }
    }
  },
  watch: {
    notes: function () {
      this.changeList()
    },
    isAllList: function () {
      this.changeList()
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.$data.list = this.notes
    })
  }
}
</script>

<style scoped>
#notes-list {
  width: 300px;
  height: 100%;
  float: left;
  font-family: 'Raleway', sans-serif;
  background-color: #f5f5f5;
}
#notes-list h2 {
  font-family: inherit;
  font-weight: 300;
  font-size: 24px;
}
#list-header {
  text-align: center;
  padding: 20px;
}
#list-header h2 {
  margin-bottom: 20px;
}
.btn-group {
  width: 250px;
  height: 34px;
  margin: 0;
}
.btn-group-item {
}
.btn {
  width: 125px;
  height: 34px;
  float: left;
  background-color: #fff;
  padding: 6px 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  cursor: pointer;
}
.btn:focus {
  outline: 1px;
}
.btn-left {
  border-radius: 4px 0 0 4px;
}
.btn-right {
  border-radius: 0 4px 4px 0;
}
.btn-group .active {
  background-color: #ddd;
}
.list-group {
  line-height: 2;
  font-family: inherit;
  background-color: #fff;
}
.list-group .active>h4 {
  background-color: #337ab7;
  color: #fff;
}
h4 {
  padding-left: 20px;
}
a {
  text-decoration: none;
  color: #333;
}
</style>