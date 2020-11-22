# immutable
[immutable-js](https://github.com/immutable-js/immutable-js)

state是不可变对象，不能在原来的基础上修改

- 简化操作和搞效率
  
第一版不是最高效的使用方法，因为state是不可变对象，toJS每一次赋值都会重新创建对象，会引发不必要的渲染
- 在addTodo组件中输入，会引发todoList组件的重新渲染