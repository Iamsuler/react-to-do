# router

## 
- switch 渲染第一个匹配的组件
- exact保证是精准匹配

## router的渲染方式

- \<Router components>
```
<Router components={ () => <Home /> }>
```
当使用component渲染，却传递一个函数的时候，每次都会重新渲染，导致状态丢失


- \<Router render>

可以传单函数，而保证状态保持
可以有更复杂的操作逻辑，返回更灵活的组件

- \<Router children>

无论路由是否匹配都会渲染


## react router 4全新思维

- 一切皆组件
- 动态路由的离散声明方式
