## vuex基础-介绍

![image-20211118205142448](images\image-20211118205142448.png)

>  为什么会有Vuex ?

​	Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用**`集中式`**存储管理应用的所有组件的状态，并以相应的规则保证状态以一种**`可预测`**的方式发生变化。

- vuex是采用集中式管理组件依赖的共享数据的一个工具，可以解决不同组件数据共享问题。

![image-20211118205609371](images\image-20211118205609371.png)

**结论**

1. state: 用来定义数据
2. 修改state状态必须通过**`mutations`**
3. **`mutations`**只能执行同步代码，类似ajax，定时器之类的代码不能在mutations中执行
4. 执行异步代码，要通过actions，然后将数据提交给mutations才可以完成
5. getters从 store 中的 state 中派生出一些状态
6. modules: 人资项目后续详细学习

## vuex基础-初始化功能

> 建立一个新的脚手架项目, 在项目中应用vuex

```bash
$ vue create  demo
```

> 开始vuex的初始化建立，选择模式时，选择默认模式

初始化：

- 第一步：`npm i vuex --save`  => 安装到**`运行时依赖`**   => 项目上线之后依然使用的依赖 ,开发时依赖  => 开发调试时使用  

> 开发时依赖 就是开开发的时候，需要的依赖，运行时依赖，项目上线运行时依然需要的

- 第二步： **在main.js中** `import Vuex from 'vuex'`
- 第三步：**在main.js中**  `Vue.use(Vuex)`  => 调用了 vuex中的 一个install方法
- 第四步：`const store = new Vuex.Store({...配置项})`
- 第五步：在根实例配置 store 选项指向 store 实例对象

```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(vuex)
const store = new Vuex.Store({})
new Vue({
  el: '#app',
  store
})
```

## vuex基础-state

state是放置所有公共状态的属性，如果你有一个公共状态数据 ， 你只需要定义在 state对象中

**定义state**

```js
// 初始化vuex对象
const store = new Vuex.Store({
  state: {
    // 管理数据
    count: 0
  }
})
```

> 如何在组件中获取count?

**原始形式**- 插值表达式

**`App.vue`**

组件中可以使用  **this.$store** 获取到vuex中的store对象实例，可通过**state**属性属性获取**count**， 如下

```vue
<div> state的数据：{{ $store.state.count }}</div>
```

**计算属性** - 将state属性定义在计算属性中

```js
// 把state中数据，定义在组件内的计算属性中
  computed: {
    count () {
      return this.$store.state.count
    }
  }
```

```vue
 <div> state的数据：{{ count }}</div>
```

**辅助函数**  - mapState

>mapState是辅助函数，帮助我们把store中的数据映射到 组件的计算属性中, 它属于一种方便用法
>
>属于谁的方法: vuex
>
>是什么: 是一个函数
>
>作用: 将vuex中state的数据映射为了计算属性
>
>怎么用:  调用,传递数组,数组每一项,就是state中的数据名,写哪个数据,就会将哪个数据处理为计算属性
>
>返回值:  对象, 存的就是处理好的计算属性

用法 ： 第一步：导入mapState

```js
import { mapState } from 'vuex'
```

第二步：采用数组形式引入state属性

```js
mapState(['count']) 
```

> 上面代码的最终得到的是 **类似**

```js
count () {
    return this.$store.state.count
}
```

第三步：利用**延展运算符**将导出的状态映射给计算属性

```js
  computed: {
    ...mapState(['count'])
  }
```

```vue
 <div> state的数据：{{ count }}</div>
```

## vuex基础-mutations

> state数据的修改只能通过mutations，并且mutations必须是同步更新，目的是形成**`数据快照`**

数据快照：一次mutation的执行，**立刻**得到一种视图状态，因为是立刻，所以必须是同步

**定义mutations**

```js
const store  = new Vuex.Store({
  state: {
    count: 0
  },
  // 定义mutations
  mutations: {
     
  }
})
```

**格式说明**

mutations是一个对象，对象中存放修改state的方法

```js
mutations: {
    // 方法里参数 第一个参数是当前store的state属性
    // payload 载荷 运输参数 调用mutaiions的时候 可以传递参数 传递载荷
    addCount (state) {
      state.count += 1
    }
  },
```

> 如何在组件中调用mutations

**原始形式**-$store

> 新建组件child-a.vue，内容为一个button按钮，点击按钮调用mutations

``` vue
<template>
  <button @click="addCount">+1</button>
</template>

<script>
export default {
    methods: {
    //   调用方法
      addCount () {
         // 调用store中的mutations 提交给muations
        // commit('muations名称', 2)
        this.$store.commit('addCount', 10)  // 直接调用mutations
    }
  }
}
</script>
```

带参数的传递

```js
    addCount (state, payload) {
        state.count += payload
    }
    this.$store.commit('addCount', 10)
```

**辅助函数** - mapMutations

> mapMutations和mapState很像，它把位于mutations中的方法提取了出来，我们可以将它导入

```js
import  { mapMutations } from 'vuex'
methods: {
    ...mapMutations(['addCount'])
}
```

> 上面代码的含义是将mutations的方法导入了methods中，等同于

```js
methods: {
      // commit(方法名, 载荷参数)
      addCount () {
          this.$store.commit('addCount')
      }
 }
```

此时，就可以直接通过this.addCount调用了

```vue
<button @click="addCount(100)">+100</button>
```

但是请注意： Vuex中mutations中要求不能写异步代码，如果有异步的ajax请求，应该放置在actions中

## vuex基础-actions

> state是存放数据的，mutations是同步更新数据，actions则负责进行异步操作

**定义actions**

```js
 actions: {
  //  获取异步的数据 context表示当前的store的实例 可以通过 context.state 获取状态 也可以通过context.commit 来提交mutations， 也可以 context.diapatch调用其他的action
    getAsyncCount (context) {
      setTimeout(function(){
        // 一秒钟之后 要给一个数 去修改state
        context.commit('addCount', 123)
      }, 1000)
    }
 } 
```

**原始调用** - $store

```js
 addAsyncCount () {
     this.$store.dispatch('getAsyncCount')
 }
```

**传参调用**

```js
 addAsyncCount () {
     this.$store.dispatch('getAsyncCount', 123)
 }
```

**辅助函数** -mapActions

> actions也有辅助函数，可以将action导入到组件中

```js
import { mapActions } from 'vuex'
methods: {
    ...mapActions(['getAsyncCount'])
}
```

直接通过 this.方法就可以调用

```vue
<button @click="getAsyncCount(111)">+异步</button>
```

## vuex基础-getters

> 除了state之外，有时我们还需要从state中派生出一些状态，这些状态是依赖state的，此时会用到getters

例如，state中定义了list，为1-10的数组，

```js
state: {
    list: [1,2,3,4,5,6,7,8,9,10]
}
```

组件中，需要显示所有大于5的数据，正常的方式，是需要list在组件中进行再一步的处理，但是getters可以帮助我们实现它

**定义getters**

```js
  getters: {
    // getters函数的第一个参数是 state
    // 必须要有返回值
     filterList:  state =>  state.list.filter(item => item > 5)
  }
```

使用getters

**原始方式** -$store

```vue
<div>{{ $store.getters.filterList }}</div>
```

**辅助函数** - mapGetters

```js
computed: {
    ...mapGetters(['filterList'])
}
```

```vue
 <div>{{ filterList }}</div>
```

## 作业

### 购物车

目的: 数据定义在vuex中

```js
goodList: [
        {
          name: "诸葛亮",
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: "蔡文姬",
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: "妲己",
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: "鲁班",
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
```

**添加需求**: 输入框(商品名称  商品价格  商品数量) 添加按钮

![image-20210115195904519](F:/课程/itcast/vue/vue-base/笔记/images/image-20210115195904519.png)

不带vue代码的标签结构(==可以复制==)接着写

```vue
<template>
  <div>
    <table
      border="1"
      width="700"
      style="border-collapse: collapse"
    >
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th>
            <input type="checkbox" /> <span>全选</span>
          </th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
      <tfoot>
        <tr>
          <td>合计:</td>
          <td colspan="5">
            
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style>
</style>
```

