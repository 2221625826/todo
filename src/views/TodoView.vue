<template>
  <div class="todo">
    <MyTodo></MyTodo>
  </div>
</template>

<script>
// @ is an alias to /src
import MyTodo from '@/components/MyTodo.vue'
export default {
  name: 'TodoView',
  components: {
    MyTodo
  }
}
</script>
