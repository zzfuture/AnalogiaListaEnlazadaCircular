class listaEnlazadaCircular {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    push(value){
        const newNode = new Nodo(value);
        if (this.size == 0){
            this.head = newNode;
            this.head.next = newNode;
        }
        else{
            newNode.next = this.head.next;
            this.head.next = newNode;
        }
        this.size++;
    }

    print(){
        if (this.size == 0){return};
        let nodoActual = this.head;
        for (let i = 0; i < this.size; i++){
            console.log(nodoActual.value);
            nodoActual = nodoActual.next;
        }
    }
    insertAt(index, value){
        let newNode = new Nodo(value);
        if ((index> this.size) || (index<0)) {return null}
        let nodoActual = this.head;
        let nodoDesplazado;
        for (let i = 0; i !=index-1; i++){
            nodoActual = nodoActual.next;
        }
        nodoDesplazado = nodoActual.next;
        newNode.next = nodoDesplazado;
        nodoActual.next = newNode;
        this.size++;
    }
    removeAt(index){
        if (this.size == 0){return};
        let nodoActual = this.head;
        if (index !==0){
            for (let i = 0; i !=index-1; i++){
                nodoActual = nodoActual.next; }
            let nodoEliminar = nodoActual.next;
            nodoActual.next = nodoEliminar.next;
        }
        else{
            this.head = nodoActual.next;
            for (let i = 0; i !=(this.size-1); i++){
                nodoActual = nodoActual.next; }
            nodoActual.next = this.head;
        }
        this.size--;
    }
    pop(){ // Literalmente el mismo shift pero sin retornar nodoActual
        if (this.size == 0){return};
        this.shift();
    }
    shift(){ // Literalmente el mismo removeAt pero voy a retornar nodoActual
        if (this.size == 0){return};
        let nodoActual = this.head;
        for (let i = 0; i !=this.size-1; i++){
            nodoActual = nodoActual.next; }
        let nodoEliminar = nodoActual.next;
        nodoActual.next = nodoEliminar.next;
        this.size--;
        return nodoActual;
    }
    get(index){
        if (this.size == 0){return null}
        else if ((index > this.size-1) || (index < 0)) {return null}
        else{
            let nodoActual = this.head;
            for (let i = 0; i !=index; i++){
                nodoActual = nodoActual.next; }
            return nodoActual
        }
    }
    isEmpty(){
        return this.size == 0;
    }
    length(){
        return this.size;
    }
    reverse() {
        if (this.size <= 1) {
            return; // No hay necesidad de revertir si la lista está vacía o tiene un solo elemento
        }

        let prev = null;
        let nodoActual = this.head;
        let next = null;

        do {
            next = nodoActual.next;
            nodoActual.next = prev;
            prev = nodoActual;
            nodoActual = next;
        } while (nodoActual !== this.head);

        // Actualizar el next del último nodo para que apunte al nuevo head (prev)
        this.head.next = prev;
        
        // Actualizar el head después de la reversión
        this.head = prev;
    }
}

class Nodo{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let lista = new listaEnlazadaCircular;
lista.push(3);
lista.push(6);
// console.log(lista);
// lista.print();
lista.insertAt(1,2);
lista.print();
// lista.removeAt(0);
// console.log(lista.pop());
// lista.print();

lista.reverse();
console.log(lista.get(2));
lista.print();