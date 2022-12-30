<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点我返回上方DOM元素</button>
    <school ref="sch"></school>
  </div>
</template>

<script>
//引入School组件
import School from './components/School.vue'
export default {
  name:'App',
  components:{School},
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