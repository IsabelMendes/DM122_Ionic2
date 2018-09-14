import { Pedido } from './../model/pedido.model';
import { Injectable } from '@angular/core';


import { Storage } from '@ionic/storage';

@Injectable()
export class TodoService{

    pedidos:Array<Pedido>;
    
    constructor(private storage:Storage){
        //Laboratório 5 (Opcional) – Adicionando armazenamento local
        this.pedidos = new Array<Pedido>();
        this.storage.get('pedidos').then(
            (data) => {
                if (data != null) {
                    data.forEach(element => {
                        let pedido = new Pedido(element.name,element.detail,element.status);
                        pedido.setId(element.id);
                        this.pedidos.push(
                            pedido
                        )
                    });
                }
            }
        )
    }

    addPedido(pedido:Pedido){
        this.pedidos.push(pedido);
        this.storage.set("pedidos", this.pedidos);
    }

    editPedido(pedido:Pedido){
        this.pedidos = this.pedidos.filter(item => item.getId() != pedido.getId());
        this.pedidos.push(pedido);
        this.storage.set("pedidos", this.pedidos);
    }

    loadPedido(){
        return this.pedidos;
    }

    removePedido(pedido:Pedido){
        this.pedidos = this.pedidos.filter(t => t.getId() !== pedido.getId());
        this.storage.set("pedidos", this.pedidos);
    }
}