class Graph {
	constructor() {
	  this.adjacencyList = {};
	}
  
	addVertex(vertex) {
	  if (!this.adjacencyList[vertex]) {
		this.adjacencyList[vertex] = new Set();
	  }
	}
  
	addEdge(vertex1, vertex2) {
	  if (!this.adjacencyList[vertex1]) {
		this.addVertex(vertex1);
	  }
	  if (!this.adjacencyList[vertex2]) {
		this.addVertex(vertex2);
	  }
	  this.adjacencyList[vertex1].add(vertex2);
	  this.adjacencyList[vertex2].add(vertex1);
	}
  
	removeEdge(vertex1, vertex2) {
	  this.adjacencyList[vertex1].delete(vertex2);
	  this.adjacencyList[vertex2].delete(vertex1);
	}
  
	removeVertex(vertex) {
	  if (!this.adjacencyList[vertex]) {
		return;
	  }
	  for (let adjacentVertex of this.adjacencyList[vertex]) {
		this.removeEdge(vertex, adjacentVertex);
	  }
	  delete this.adjacencyList[vertex];
	}
  
	hasEdge(vertex1, vertex2) {
	  return (
		this.adjacencyList[vertex1].has(vertex2) &&
		this.adjacencyList[vertex2].has(vertex1)
	  );
	}
  
	display() {
	  for (let vertex in this.adjacencyList) {
		console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
	  }
	}
  }
  
  const graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "C");
  graph.display();
  graph.removeEdge("A", "B");
  graph.display();
  graph.removeVertex("A");
  graph.display();
  




  //Bfs and Dfs implimentation

  class Graph {
	constructor() {
	  this.adjacencyList = {};
	}
  
	addVertex(vertex) {
	  if (!this.adjacencyList[vertex]) {
		this.adjacencyList[vertex] = new Set();
	  }
	}
  
	addEdge(vertex1, vertex2) {
	  if (!this.adjacencyList[vertex1]) {
		this.addVertex(vertex1);
	  }
	  if (!this.adjacencyList[vertex2]) {
		this.addVertex(vertex2);
	  }
	  this.adjacencyList[vertex1].add(vertex2);
	  this.adjacencyList[vertex2].add(vertex1);
	}
  
	removeEdge(vertex1, vertex2) {
	  this.adjacencyList[vertex1].delete(vertex2);
	  this.adjacencyList[vertex2].delete(vertex1);
	}
  
	removeVertex(vertex) {
	  if (!this.adjacencyList[vertex]) {
		return;
	  }
	  for (let adjacentVertex of this.adjacencyList[vertex]) {
		this.removeEdge(vertex, adjacentVertex);
	  }
	  delete this.adjacencyList[vertex];
	}
  
	hasEdge(vertex1, vertex2) {
	  return (
		this.adjacencyList[vertex1].has(vertex2) &&
		this.adjacencyList[vertex2].has(vertex1)
	  );
	}
  
	display() {
	  for (let vertex in this.adjacencyList) {
		console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
	  }
	}
  
	bfs(start) {
        let queue = [start];
        let result = [];
        let visit = {};
        visit[start] = true;
        
        while (queue.length) {
            let vertex = queue.shift();
            result.push(vertex);
            
            this.adjesList[vertex].forEach(neighbor => {
                if (!visit[neighbor]) {
                    visit[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        
        return result;
    }
    
    dfs(start) {
        let stack = [start];
        let result = [];
        let visit = {};
        visit[start] = true;
        
        while (stack.length) {
            let vertex = stack.pop();
            result.push(vertex);
            
            this.adjesList[vertex].forEach(neighbor => {
                if (!visit[neighbor]) {
                    visit[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
}
  // Example usage
  const gr = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "C");
  
  console.log("Graph display:");
  graph.display();
  
  console.log("\nBFS starting from A:");
  graph.bfs("A");
  
  console.log("\nIterative DFS starting from A:");
  graph.dfs("A");
  
  console.log("\nRecursive DFS starting from A:");
  graph.dfsRecursive("A");
  
  console.log("\nAfter removing edge A-B:");
  graph.removeEdge("A", "B");
  graph.display();
  
  console.log("\nAfter removing vertex A:");
  graph.removeVertex("A");
  graph.display();
  

  dfsRecursive(start) {
    const visited = {};
    const result = [];

    const dfs = (vertex) => {
        if (!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);

        this.adjList[vertex].forEach(neighbor => {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        });
    };
    dfs(start);
    return result;
}
