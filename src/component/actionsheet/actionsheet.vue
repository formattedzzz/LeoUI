<template>
  <div class="leo-actionsheet">
    <div class="actionsheet-btn" @click="show = true">点击展开actionsheet</div>
    <div class="actionsheet-panel" :class="{show: show}">
      <div class="panel-mask" @click="show = false"></div>
      <div class="panel-content" :class="{show: show}">
        <div
        class="menu-item"
        v-for="(item, idx) in menuItems"
        @click="chooseItem(idx)"
        :key="idx">{{item}}</div>
        <div class="menu-cancel" @click="show = false">{{cancelText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'leo-actionsheet',
  props: {
    menuItems: {
      type: Array,
      default: () => ['选项1', '选项2']
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  data () {
    return {
      show: false
    }
  },
  computed: {},
  methods: {
    chooseItem (idx) {
      this.$emit('chooseItem', idx)
      this.show = false
    }
  }
}
</script>

<style lang="stylus" scope>
.actionsheet-btn
  width 100%
  text-align center
  padding 6px 0
  color #e80
  font-size 15px
  cursor pointer
.actionsheet-panel
  width 100vw
  height 100vh
  position fixed
  left 0
  top 0
  z-index 9
  visibility hidden
  &.show 
    visibility visible
  .panel-mask
    width 100%
    height 100% 
    position absolute
    left 0
    top 0
    background rgba(0, 0, 0, 0.7)
    z-index 0
  .panel-content
    width 100%
    position absolute
    left 0
    bottom 0
    z-index 1
    background #eee
    transition transform 0.3s ease-out
    transform translateY(100%)
    &.show
      transform translateY(0)
  .menu-item
    text-align center
    width 100% 
    height 44px
    line-height 44px
    color #e50
    background #fff
    border-bottom 1px solid #eee
  .menu-cancel
    margin-top 10px
    background #fff
    height 40px
    line-height 40px
    color #999
</style>
