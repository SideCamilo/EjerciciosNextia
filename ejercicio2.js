class factura {
    //propiedades
    idCliente = {};
    total = 0;
    estado = "no pagada";

    //constructor
    constructor(idCliente, total) {
        let existeCliente = false;
        listaClientes.forEach(element => {
            if (element.id === idCliente) existeCliente = true
        });
        if (existeCliente) {
            this.idCliente = listaClientes[idCliente];
        } else {
            console.log('el cliente no existe');
            return;
        }
        this.total = total;
    }
    
    //metodos
    cobrar() {
        this.estado = "pagada";
    }

    imprimir() {
        console.log(`El cliente: ${this.idCliente.nombre} tiene una factura con un total de: ${this.total} y su status es ${this.estado}`);
    }
}

var listaClientes = [{
    id: 1,
    nombre: "Usuario1",
    email: "usuario1@gmail.com",
    telefono: "449332345"
},{
    id: 2,
    nombre: "Usuario2",
    email: "usuario2@gmail.com",
    telefono: "449332345"
},{
    id: 3,
    nombre: "Usuario3",
    email: "usuario3@gmail.com",
    telefono: "449332345"
}];