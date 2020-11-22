# enhancer

- 增强redux store的功能
- createStore(reducer, [preloadedState], [enchancer])

enhancer结构
```
function enhancerCreatore () {
  return createStore => (...args) => {
    // do something based on old store
    // return a new enhanced store
  }
}
```

## store enhancer和middleware的关系

- middleware是enhancer的一种

```
fuction applyMiddleware (...middlewares) {
  return createStore => (...args) => {
    // do something
    return {
      ...store,
      dispatch
    }
  }
}
```

## enhancer和middleware的选择

- 尽可能使用middleware，middleware是高层级的抽象，store enhancer是低层级的抽象
- store enhancer不仅可以增强dispatch，也可以增强getState，subscribe等，看似有更大的灵活度，但是有会破坏redux的原有逻辑
- middleware可以增强dispatch，但约束了修改底层的能力。所以应优先选择middleware
