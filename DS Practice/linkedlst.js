class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList{
	constructor() {
		this.head = null;
		this.size = 0;
	}

	isEmpty(){
		return this.size === 0;
	}

	getSize() {
		this.size;
	}

	prepend(value) {
		const node = new Node(value);
		if(this.isEmpty()){
			this.head = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		this.size++;
	}

	append(value){
		const node = new Node(value);
		if(this.isEmpty()){
			this.head = node;
		} else {
			let curr = this.head;
			while(curr.next) {
				curr = curr.next;
			}
			curr.next = node;
		}
		this.size++;
	}

	insert(value,index) {
		if(index < 0 || index > this.size){
			return; 
		}

		if(index === 0){
			this.prepend(value); 
		} else {
			const node = new Node(value);
			let prev = this.head;

			for(let i =0;i<index -1 ;i++){
				prev = prev.next;
			}
			node.next = prev.next;
			prev.next = this.head;
			this.size ++;
		}
	}

reverse() {
	let prev = null;
	let curr = this.head;

	while(curr) {
		let next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	this.head = prev;
}

	print(){
		if(this.isEmpty()){
			console.log("List Is Empty");
		} else {
			let curr = this.head;
			let list = "";

			while(curr) {
				list += `${curr.value} ->`;
				curr = curr.next;
			}

			console.log(list);
		}
	}
}

const l = new LinkedList();
l.prepend(40);
l.append(50);
l.append(60);
l.reverse();
l.insert(20,2);
l.print();