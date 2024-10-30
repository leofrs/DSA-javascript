// Criando um Nó
class Node {
	data = undefined;
	next = null;

	constructor(data) {
		this.data = data;
		this.next;
	}
}

// Criando a linked List
export class LinkedList {
	#head = null;
	#size = 0;

	add(data) {
		if (this.#head === null) {
			this.#head = new Node(data);
			this.#size += 1;
			return;
		}

		let current = this.#head;
		while (current.next !== null) {
			current = current.next;
		}

		current.next = new Node(data);
		this.#size += 1;
	}

	show() {
		let current = this.#head;
		while (current !== null) {
			process.stdout.write(`${current.data} -> `);
			current = current.next;
		}
		console.log("null");
		console.log(`O tamanho da minha linkedlist é: ${this.#size}`);
	}
}
