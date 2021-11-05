<template>
  <div>
    姓名：{{ person.name }}
    年龄：{{ person.age }}
    <ul>
      <li v-for="(val, index) in arr" :key="index">
        {{ val }}
      </li>
    </ul>
    <ul>
      <li v-for="(val, index) in arr2" :key="index">
        {{ val.name }}
      </li>
    </ul>
    <button @click="onClick">点击</button>
    <button @click="onClick2">修改数组</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      person: {
        name: '张三'
      },
      arr: [5, 3, 9, 2, 1],
      arr2: [
        { name: '张三' },
        { name: '张三1' },
        { name: '张三2' }
      ]
    }
  },

  created () {

  },

  methods: {
    onClick () {
      // this.person.age = 19
      this.$set(this.person, 'age', 19)
    },
    onClick2 () {
      // this.arr[2] = 10
      // this.$set(this.arr, 2, 10)
      this.arr2[2].name = '张三4'
    }
  }
}
</script>

<style scoped lang='less'>

</style>
