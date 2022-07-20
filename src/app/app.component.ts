import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 14 - CRUD Tareas';
  mensaje = '';
  ocultarFormCrear = false;
  ocultarFormModificar = true;
 
  arrTareas = [
    {'nombre': 'Bañarse', 'hora': '07:00', 'estado' : 'No realizada'},
    {'nombre': 'Preparar desayuno', 'hora': '07:30', 'estado' : 'No realizada'},
    {'nombre': 'Ir al trabajo', 'hora': '08:00', 'estado' : 'No realizada'}
  ]

  model:any = {};
  modelActualizar:any = {};
 

  agregarTareas():void{
    this.model.estado = 'No realizada';
    this.arrTareas.push(this.model);
    this.model = {};
    this.mensaje = 'Tarea agregada';
  }

  eliminarTareas(i:any):void{
    var r = confirm('¿Desea eliminar?');
    if (r) {
      this.arrTareas.splice(i, 1);
      this.mensaje = 'Tarea eliminada';
    }
  }

  idAModificar:any;
  editarTareas(i:any):void{
    this.ocultarFormModificar = false;
    this.ocultarFormCrear = true;
    this.modelActualizar.nombre =  this.arrTareas[i].nombre
    this.modelActualizar.hora =  this.arrTareas[i].hora; 
    this.modelActualizar.estado =  this.arrTareas[i].estado; 
    this.idAModificar = i;
  }

  actualizarTareas():void{
    let i = this.idAModificar; 
    for (let index = 0; index < this.arrTareas.length; index++) {
     if(index == i){
      this.arrTareas[i] = this.modelActualizar;
      this.modelActualizar = {};
      this.mensaje = 'Tarea modificada';
      this.ocultarFormModificar = true;
      this.ocultarFormCrear = false;
     } 
    }
  }

  cambiarEstadoTareas(i:any):void{ 
    var r = confirm('Terminar esta tarea?');
    if (r) {
      this.modelActualizar.nombre =  this.arrTareas[i].nombre
      this.modelActualizar.hora =  this.arrTareas[i].hora;  
      this.modelActualizar.estado = 'Terminada';
      for (let index = 0; index < this.arrTareas.length; index++) {
       if(index == i){
        this.arrTareas[i] = this.modelActualizar; 
        this.modelActualizar = {};
        this.mensaje = 'Tarea terminada';
       } 
      }
    }
  }

  cerrarAlerta():void{
    this.mensaje = '';
  }

}
