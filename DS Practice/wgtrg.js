class Graph {
	constructor() {
       this.adjesList = {};
	}

	addVertex(vertex) {
		if(!this.adjesList[vertex]){
			this.adjesList[vertex] = new Set();
		}
	}

	addEdge(v1,v2) {
		if(!this.adjesList[v1]) {
			this.addVertex(v1);
		}

		if(!this.adjesList[v2]) {
			this.addVertex(v2);
		}

		this.adjesList[v1].add(v2);
		this.adjesList[v2].add(v1);
	}

	removeEdge(v1,v2) {
		this.adjesList[v1].remove(v2);
		this.adjesList[v2].remove(v1);
	}

	removeVertex(vertex) {
		if(!this.adjesList[vertex]) {
			return; 
		}
		for(let adjesentVertex of this.adjesList[vertex]) {
			this.removeEdge(vertex,adjesentVertex);
		}
		delete this.adjesList[vertex];

	}
	display() {
		for(let vertex in this.adjesList) {
			console.log(vertex + "->"[...this.adjesList[vertex]])
		}
	}
}