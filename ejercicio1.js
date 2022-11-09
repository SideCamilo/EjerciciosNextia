class camion {
    //propiedades
    capacidad = 0;
    pasajeros = 0;
    conductor = {
        "nombre": "",
        "licencia": ""
    };

    //constructor
    constructor(capacidad, pasajeros, nombre, licencia) {
        if (pasajeros > capacidad) {
            console.log("No se puede crear un camion con mayor pasajeros que capacidad");
            return;
        }
        if (typeof pasajeros === "number" && (pasajeros >= 0 && pasajeros <= capacidad)) this.pasajeros = pasajeros;
        if (typeof capacidad === "number" && capacidad >= 0) this.capacidad = capacidad;
        this.conductor.nombre = nombre;
        this.conductor.licencia = licencia;
    }
    
    //metodos
    subirPasajeros() {
        if (this.pasajeros === this.capacidad) {
            console.log("se llego al máximo de capacidad")
            return;
        }
        this.pasajeros += 1;
    }

    bajarPasajeros() {
        if (this.pasajeros === 0) {
            console.log("No puede haber menos de 0 pasajeros")
            return;
        }
        this.pasajeros -= 1;
    }

    conductorAsignar(nombre, licencia) {
        this.conductor.nombre = nombre;
        this.conductor.licencia = licencia;
    }
}