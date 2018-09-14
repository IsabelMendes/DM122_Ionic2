import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pedido } from '../../app/model/pedido.model';
import { TodoService } from '../../app/services/todo.service';
import { HomePage } from '../home/home';
import { Status } from '../../app/model/Status';

@IonicPage()
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {
  pedido:Pedido;
  selectedStatus:string;
  status = ["Transportando", "Executando", "Processando"];
  isEdit:boolean = false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private todoService:TodoService) {

    this.pedido = this.navParams.get("pedido");
    if (this.pedido && this.pedido.getId() != null) {
        this.setProperty();
        this.isEdit = true;
    } else {
      this.pedido = new Pedido("", "", "");
      this.selectedStatus = "";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPage');
  }

  salvar(){

    this.pedido.setStatus(Status[this.selectedStatus]);

    if(!this.isEdit) {
      this.todoService.addPedido(this.pedido);
      this.navCtrl.push(HomePage);
    } else {
      this.todoService.editPedido(this.pedido);
      this.navCtrl.pop();
    }

  }

  setProperty(){
    this.status.forEach(
      item => {
        if (Status[item] === this.pedido.getStatus()) {
          this.selectedStatus = item;
        }
      }
    )
  }

}
