import Animal from './Animal.js'
class Serpiente extends Animal {
    constructor(nombre, edad, img,  comentarios,sonido){
        super(nombre, edad, img,  comentarios,sonido)
             

    }
    Sisear(){
        console.log("La serpiente Sisea");
    }
}

export default Serpiente; 