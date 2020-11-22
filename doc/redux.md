# redux 设计原则

## 设计state原则

- 数据按照应领域把整个应用的状态按照领域（domain）分成若干个子state，子state的数据不能重复
- 表中的state以键值对的形结构存储数据，以记录的key/ID作为记录索引，记录中的其他的字段都依赖索引
- state中不能保存可以通过已有数据计算而来的数据，即state中的字段不能相互依赖
- state应尽量扁平化，防止嵌套过深
- UI state 具有松散型的特点，设计UI State时可以考虑节点合并

以UI为state
```
{
  "all": [
    {
      "id": 1,
      "text": "todo 1",
      "completed": false
    },
    {
      "id": 2,
      "text": "todo 2",
      "completed": true
    }
  ],
  "uncompleted": [
    {
      "id": 1,
      "text": "todo 1",
      "completed": false
    }
  ],
  "completed": [
    {
      "id": 2,
      "text": "todo 2",
      "completed": false
    }
  ]
}
```
以api为state
```
{
  "posts": [
    {
      "id": 1,
      "title": "Blog Title",
      "create_time": "2017-01-10T23:07:43.248Z",
      "author": {
        "id": 81,
        "name": "Mr Shelby"
      }
    },
    ...
  ],
  "currentPost": {
    "id": 1,
    "title": "Blog Title",
    "create_time": "2017-01-10T23:07:43.248Z",
    "author": {
      "id": 81,
      "name": "Mr Shelby"
    },
    "content": "Some really short blog content. "
  },
  "currentComments": [
    {
      "id": 1,
      "author": "Jack",
      "create_time": "2017-01-11T23:07:43.248Z",
      "content": "Good article!"
    },
    ...
  ]
}

```

示例：
```
{
  // posts键值对是没有顺序的
  "posts": {
    "1": {
      "id": 1,
      "title": "Blog Title",
      "content": "Some really short blog content.",
      "created_at": "2016-01-11T23:07:43.248Z",
      "author": 81,
      "comments": [
        352
      ]
    }
    ...
  },
  "comments": {
    "352": {
      "id": 352,
      "content": "Good article!",
      "author": 41
    },
    ...
  },
  "authors": {
    "41": {
      "id": 41,
      "name": "Jack"
    },
    "81": {
      "id": 81,
      "name": "Mr Shelby"
    },
    ...
  },
  "postIds": [1, ...] // 可以保证数据顺序
  // UI状态属性
  "isFetching": false,
  "error": "",
}
```

state合并
```
{
  "app":{
    "isFetching": false,
  	"error": "",
  },
  "posts":{
    "byId": {
      "1": {
        ...
      },
      ...
    },
    "allIds": [1, ...],
  } 
  "comments": {
    ...
  },
  "authors": {
    ...
  }
}
```
