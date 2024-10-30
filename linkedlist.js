class Node {
    constructor(value, next) {
        this.value = value;
        this.next = null;
    }
}

export default class LinkedList {
    constructor() {
        this.head = null;
    }
 
    // Add a node to the end of the list
    append(value) {
        const newNode = new Node(value);

        // If there is no head, the node is assigned to it
        if(!this.head) {
            this.head = newNode;
            return
        }

        // Pointer
        let current = this.head;

        // I go through all the nodes
        while(current.next) {
            current = current.next
        }

        // If the head does not have a next node, one will be assigned to it
        current.next = newNode;
    }

    // Add a node to the start of the list
    prepend(value) {
        const newNode = new Node(value);
        
        // If there is no head, the node is assigned to it
        if(!this.head) {
            this.head = newNode;
            return
        }

        let current = this.head;
        // Change the head to be the new node
        this.head = newNode;
        // The new head is assigned a next node, which is the previous head.
        newNode.next = current;
    }

    // It return the total numbers of nodes
    size() {
        // Countdown
        let listSize = 0;

        let current = this.head;
        // I go through all the nodes
        while(current != null) {
            listSize++;
            current = current.next
        }

        return(listSize);
    }

    // It return the first node
    head() {
        return this.head
    }

    // It return the last node
    tail() {
        // Guardo en una variable el head
        let current = this.head;

        // Recorre todos los nodos hasta que el proximo sea null
        while(current.next != null) {
            current = current.next;
        }

        // Devuelve el ultimo nodo
        return current
    }
}