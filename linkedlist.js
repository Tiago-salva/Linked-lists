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

    // It return a node according to the index
    at(index) {
        
        // Verifica si el valor es un numero entero positivo
        if(!(Number.isInteger(index) && index > -1)) {
            return undefined
        }

        let current = this.head;
        let i = 0;

        while(current != null) {
            if(i === index) {
                return current
            }

            current = current.next;
            i++;
        }

        // Devuelve null si el valor/index no se encontro
        // O es mayor que el limite de la lista
        return null
    }

    // Delete the last node
    pop() {

        //Verifica si la lista esta vacia
        if(!this.head) {
            return;
        }

        let current = this.head;
        // Variable para almacenar el anterior nodo
        let previous = null;

        while(current.next != null) {
            previous = current;
            current = current.next;
        }

        // Elimino el ultimo nodo con ayuda del anterior nodo
        previous.next = null;
    }

    // It return true if the value it is in the list, otherway it return false
    contains(value) {
        let current = this.head;

        while(current != null) {
            if(current.value === value) {
                return true;
            }

            current = current.next;
        }

        return false;
    }

    // It return the index of the node containing the value
    find(value) {
        let current = this.head;
        let index = 0;

        while(current != null) {
            if(current.value === value) {
                return index;
            }

            current = current.next;
            index++;
        }

        return null;
    }

    // It returns the list in a string
    toString() {
        let current = this.head;
        let listAtString = "";

        while(current != null) {
            listAtString += `( ${current.value} ) -> `
            current = current.next;
        }

        listAtString += "null";
        console.log(listAtString);
    }

    // adds a node with the value and in the passed index
    insertAt(value, index) {

        // Check if the index is a positive integer
        if(!(Number.isInteger(index) && index > -1)) {
            return undefined
        }

        const newNode = new Node(value);
        let current = this.head;

        // If the index it's 0, replace the head
        if(index === 0) {
            newNode.next = current;
            this.head = newNode;
            return "Nodo agregado con exito";
        }

        let previous = null;
        let countIndex = 0;

        while(current != null) {

            // Once the index is found, the property next of the previous node
            // is changed to be the new node, and the same with the new node
            // (0) -> (20) -> null
            // (0) -> (10) -> (20) -> null
            if(countIndex === index) {
                previous.next = newNode;
                newNode.next = current;
                return "Nodo agregado con exito";
            }

            previous = current;
            current = current.next;
            countIndex++;
        }

        // If the index it's not in the list, return null
        return null;
         
    }

    // It removes a node according to the index passed 
    removeAt(index) {
        
        // Check if the index is a positive integer
        if(!(Number.isInteger(index) && index > -1)) {
            return undefined
        }

        let current = this.head;

        // If the index it's 0, replace the head
        if(index === 0) {
            this.head = current.next;
            return "Nodo eliminado con exito";
        }

        let previous = null;
        let countIndex = 0;

        // Once the index is found, the property next of the previous node
        // is changed to be the next node of the deleted node
        // (0) -> (10) -> (20) -> null
        // (0) -> (20) -> null
        while(current != null) {
            if(countIndex === index) {
                previous.next = current.next;
                return "Nodo eliminado con exito";
            }

            previous = current;
            current = current.next;
            countIndex++;
        }

        // If the index it's not in the list, return null
        return "Index no encontrado";
    }
}