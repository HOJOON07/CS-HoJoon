## DFS (깊이 우선 탐색)

- 탐색(Search)란 많은 양의 데이터 중에서 원하는 데이터를 찾는 과정을 의미한다.
- 대표적인 그래프 탐색 알고리즘으로는 DFS와 BFS가 있다.

### 스택 자료구조

- 먼저 들어 온 데이터가 나중에 나가는 형식의 자료구조이다.

> JS에서는 배열자체가 스택의 기능을 가지고 있다. 스택의 내용을 그대로 출력하면 거꾸로 뒤집어 출력하면 된다.

### 그래프의 표현

![그래프](https://velog.velcdn.com/images/ghwns1007/post/97d12c05-3a53-4b1b-aba7-724e17ec99c6/image.png)

### DFS(깊이 우선 탐색)

- 그래프 혹은 트리에서 모든 노드를 한 번씩 탐색하기 위한 기본적인 방법이다.
- [완전탐색]을 수행하기 위해 사용할 수 있는 가장 간단한 방법 중 하나다.
- 스택 자료구조를 사용한다.

### DFS의 기본 동작 방식

1. 시작 노드를 스택에 넣고 방문 처리 한다.
2. 스택에 마지막으로 들어 온 노드에 방문하지 않은 인접 노드가 있는지 확인한다.

- 있다면, 방문하지 않은 인접 노드를 스택에 삽입하고 방문 처리한다.
- 없다면, 현재 노드를 스택에서 추출한다.

3. 2번 과정을 더 이상 반복할 수 없을 때까지 반복한다.

### DFS가 효과적인 경우

1. 더 짧은 코드로 간결히 구현해야 하는 경우
2. 큐 라이브러리를 사용할 수 없는 경우
3. 트리의 순회, 점화식 구현 등 DFS에 특화된 문제인 경우
4. 트리에서 최단 거리 탐색을 구하는 경우

- 트리에서는 두 노드를 잇는 경로가 하나만 존재한다.

#### DFS는 완전 탐색. 즉, 모든 노드를 하나씩 방문한다는것이 중요한 개념인듯?

- 스택 자료구조와 그래프를 활용한 노드 방문 순서

![](https://velog.velcdn.com/images/ghwns1007/post/41bb62bc-ef28-4384-b5c6-9cbc1c6dc1ca/image.png)

- 인접 리스트로 표현할 수 있다.

![](https://velog.velcdn.com/images/ghwns1007/post/7f3c0d69-62ee-4363-9065-375bbafc5426/image.png)

#### 소스코드

```js
// 각 노드가 연결된 정보를 표현
let graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];

let visited = Array(9).fill(false);

function dfs(graph, v, visited) {
  // 현재 노드를 방문 처리

  visited[v] = true;
  console.log(v);

  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문

  for (i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}

dfs(graph, 1, visited);

// 1
// 2
// 3
// 5
// 8
// 6
// 4
// 7
```

#### 도달 가능한 모든 위치를 탐색하는 경우를 고려해 보자.

- 도달 가능한 끝 위치까지 도달했다면, 다시 최근의 갈림길로 돌아가서, 다른 위치로도 가보는 방식과 유사하다.
