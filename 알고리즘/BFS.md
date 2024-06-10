## BFS (너비 우선 탐색)

- 가까운 곳부터 탐색을 수행하는게 DFS와 다른 특징
- 큐 자료구조를 활용한다.

#### 자바스크립트로 큐 구현하기

```js
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return (this.tailIndex = this.headIndex);
  }
}
```

## 너비 우선 탐색이란?

- 그래프 혹은 트리에서 모든 노드를 한 번씩 탐색하기 위한 기본적인 방법이다.
- 완전탐색을 수행하기 위해 사용할 수 있는 방법 중 하나다.
- 최단 거리를 탐색하기 위한 목적으로 사용할 수 있다.
- 큐 자료구조를 사용한다.
- 기본적으로 DFS는 스택, BFS는 큐를 사용한다.

### 동작 방식

1. 시작 노드를 큐에 넣고 방문 처리한다.
2. 큐에서 원소를 꺼내어 방문하지 않은 인접 노드가 있는지 확인한다.

- 있다면, 방문하지 않은 인접 노드를 큐에 삽입하고 방문 처리 한다.

3. 2번 과정을 더 이상 반복할 수 없을 때까지 반복한다.

### 사용 예시

1. 간선의 비용이 동일한 상황에서 최단 거리 문제를 해결하는 경우
2. 완전 탐색을 위해 사용한 DFS 솔루션이 메모리 / 시간 초과를 받아 BFS로 재시도하는 경우

   > - DFS, BFS 모두 그래프 탐색 목적으로 사용할 수 있으나, 구현이 익숙하다면 BFS를 추천한다.
   > - DFS는 일반적인 최단 거리 문제를 해결할 수 없다.

![BFS](https://velog.velcdn.com/images/ghwns1007/post/a247e107-1425-4988-94fa-d5cbfce47e42/image.png)

#### 간선의 비용이 동일할 때 최단거리 문제를 해결하기 위해 사용 가능하다.

추가로 BFS와 다익스트라 알고리즘은 비슷한데 다익스트라는 간선의 비용이 동일하지 않을 때 사용 가능하다.

### 소스코드

```js
let graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];

let visited = Array(9).fill(false);

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return (this.tailIndex = this.headIndex);
  }
}

function bfs(graph, start, visited) {
  let queue = new Queue();
  queue.enqueue(start);

  visited[start] = true;
  while (queue.getLength() != 0) {
    v = queue.dequeue();
    console.log(v);

    for (i of graph[v]) {
      if (!visited[i]) {
        queue.enqueue(i);
        visited[i] = true;
      }
    }
  }
}

bfs(graph, 1, visited);
```
