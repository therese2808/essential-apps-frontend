import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorRoutingModule } from './sensor-routing.module';
import { SensorComponent } from './sensor.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ReadComponent } from './read/read.component';
import { FormsModule } from '@angular/forms';
import { SocketService } from 'src/app/service/socket.service';
import { environment } from 'src/environments/environment';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = {
	url: environment.SOCKET_ENDPOINT, // socket server url;
	options: {
		transports: ['websocket'],
    autoConnect: false
	}
}

@NgModule({
  declarations: [
    SensorComponent,
    AddComponent,
    EditComponent,
    ReadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SensorRoutingModule,
    SocketIoModule.forRoot(config) 
  ],
  providers: [SocketService],
})
export class SensorModule { }
