<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点我返回上方DOM元素</button>
    <hr>
    <Student ref="sch" name="张三" sex="女" :age="18"></Student>
    <hr>
    <Student name="李四" sex="男" :age="22"></Student>
    <hr>
  
  </div>
</template>

<script>
//引入School组件
import Student from './components/Student.vue'
export default {
  name:'App',
  components:{Student},
  data(){
    return{
      msg:'你好啊,Vue!'
    }
  },
  methods:{
    showDOM(){
      console.log(this.$refs.title)//真实dom元素
      console.log(this.$refs.sch)//school组件实例对象（vc）
    }
  }


}
</script>