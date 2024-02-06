class Person{
    constructor(nombre, apellido, edad){
      this.nombre=nombre
      this.apellido= apellido
      this.edad=edad      
    }
   getDetalles(){
    console.log(this.nombre, this.apellido, this.edad)
  }
}

class Jugador extends Person{
  constructor(nombre, apellido, edad, posicion){
    super(nombre, apellido, edad)
      this.posicion= posicion    
  }
    getDetalles(){
    console.log(this.nombre, this.apellido, this.edad, this.posicion)
  }

}

class Entrenador extends Person{
  constructor(nombre,apellido,edad, posicion,experiencia, idFederacion){
   super (nombre, apellido, edad )
      this.posicion=posicion
      this.experiencia=experiencia
      this.idFederacion= idFederacion || this.createId()
      
  }
 getDetalles() {
    console.log(`${super.getDetalles()}, Posición: ${this.posicion}, Experiencia: ${this.experiencia}, ID Federación: ${this.idFederacion}`);
  }
    createId(){
    return Math.floor(Math.random() *  100000) ;
  }  
}

class Equipo {
  constructor(entrenador, jugadores){
      this.entrenadores=entrenadores
      this.jugadores= jugadores
  }
      getDetalles(){
    console.log( this.entrenadores, this.jugadores)
  }
}

let jugadores = [
     new Jugador('Lionel' ,'Messi', 36, 'Delantero'),
     new Jugador('Lisandro', 'Martínez',  26,  'Defensor'),
     new Jugador('Rodrigo', 'De Paul',  30,  'Mediocampo') ,
     new Jugador('Emiliano', 'Martínez',  32,  'Arquero'),
]   

let entrenadores= [new Entrenador('Lionel','Scaloni',  46, 'director técnico', 4)]
let equipo = new Equipo(entrenadores, jugadores)
console.log(equipo)