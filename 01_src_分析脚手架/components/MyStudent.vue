<template>
  <!--    组件的结构-->
      <div class="demo">
          <h2>学生姓名：{{name}}</h2>
          <h2>学生年龄：{{age}}</h2>
          <button @click="showName">点我提示学生名</button>
      </div>
  
  </template>
  
  <script>
      //组件交互相关的代码（数据、方法等）
      //默认暴露
      export default {
          name: 'MyStuendt',
          data(){
              return {
                  name:'张三',
                  age:20
              }
          },
          methods: {
              showName(){
                  alert(this.name)
              }
          },
      }
  
  </script>
  
  <style>
      /*组件的样式*/
      .demo{
          background-color: orange;
      }
  </style>