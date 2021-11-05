<template>
  <div>
    <ul>
      <li :class="{active: index === 0}" v-for="(item, index) in navs" :key="index">高中起点</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navs: ['大学起点', '高中起点']
    }
  },

  created () {

  },

  methods: {

  }
}
</script>

<style scoped lang='less'>
ul {
  list-style: none;
  border-radius: 10px;
  width: 200px;
  overflow: hidden;
  padding: 0;
  li {
    float: left;
    width: 100px;
    height: 40px;
    background-color: #ccc;
    color: #fff;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }
  .active {
    background-color: blue;
  }
}
</style>
