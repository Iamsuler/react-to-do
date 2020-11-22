# middleware

- 实例redux-thunk，可以使acton接受函数
- 增强store dispatch能力

middleware代码规范
```
Function: ({ getState, dispatch }) => next => action
```
