<template>
  <div class="app-page">
    <img class="test-img" src="/static/img/mp.jpg">
    {{info.name + '-' + info.age}}
    <leo-actionsheet :menuItems="['111', '222']" @chooseItem="chooseItem"></leo-actionsheet>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      info: {
        name: 'leooop haha',
        age: 23,
        aa: 'leee'
      }
    }
  },
  methods: {
    chooseItem (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="stylus">
.app-page
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #e50
  margin-top 60px
  font-size 20px
  .test-img
    width 300px
    height 200px
</style>
