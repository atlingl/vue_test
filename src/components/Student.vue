<template>
  <div class="school">
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ myAge }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="addAge">年龄+1</button>
  </div>
</template>

<script>
export default {
  name:'Student',
  data(){
    return{
      msg:'我是一个学生',
      myAge:this.age
    }
  },
  methods:{
    addAge(){//props是只读的 不要修改props的属性，可以赋值修改自己的（data）属性
      this.myAge++
    }
  },
  // props:['name','age','sex']//简单接收

  // props:{//接收的同时对类型进行限制
  //   name:String,
  //   age:Number,
  //   sex:String
  // }

  props:{//接收的同时对数据：类型进行限制+默认值指定+必要性限制
    name:{
      type:String,//name的类型是字符串
      required:true,//name是必要的
    },
    age:{
      type:Number,
      default:99,//默认值
    },
    sex:{
      type:String,
      required:true,
    }
  }

}
</script>

<style>
  .school{
    background-color: blueviolet;
  }
</style>