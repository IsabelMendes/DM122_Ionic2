import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/* Services */
import { TodoService } from '../../app/services/todo.service'
import { Pedido } from '../../app/model/pedido.model';
import { PedidoPage } from '../pedido/pedido';
import { ItemSliding } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public obj: any;
  public result: any;
  descending: boolean = false;
  order: number;
  column: string = 'name';


  title:string = "TrabalhoFinalIonic";
  pedidos:Array<Pedido>;

  constructor(public navCtrl: NavController, private todoService:TodoService) {
    //this.getAll();
    this.pedidos = this.todoService.loadPedido();
  }

  /*getAll(){
    this.todoService.loadPedido()
    .then(data =>{
      this.obj = data;
      this.result = this.obj._embedded.pedidos
    });
  }*/

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  goToPedido(){
    this.navCtrl.push(PedidoPage);
    //this.navCtrl.push(PedidoPage,{"pedido":this.pedido});
  }

  editar(pedido:Pedido, slidingItem:ItemSliding){
      //console.log(pedido);
      slidingItem.close();
      this.navCtrl.push(PedidoPage, {"pedido": pedido});
  }

  delete(pedido:Pedido, slidingItem:ItemSliding){
    slidingItem.close();
    this.todoService.removePedido(pedido);
    this.pedidos = this.todoService.loadPedido();
  }
}
