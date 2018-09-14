import { SortPipe } from './../pipes/sort/sort';
import { SearchPipe } from './../pipes/search/search';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { IonicStorageModule } from '@ionic/storage'

/*Pages*/
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PedidoPage } from '../pages/pedido/pedido';

/*Services*/
import { TodoService } from './services/todo.service'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PedidoPage,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PedidoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TodoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
