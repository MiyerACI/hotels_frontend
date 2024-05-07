import { Routes } from '@angular/router';
import { CategoryListaComponent } from './components/category/category-lista/category-lista.component';
import { AgregarCategoryComponent } from './components/category/agregar-category/agregar-category.component';
import { EditarCategoryComponent } from './components/category/editar-category/editar-category.component';
import { AgregarClientComponent } from './components/client/agregar-client/agregar-client.component';
import { ClientListaComponent } from './components/client/client-lista/client-lista.component';
import { EditarClientComponent } from './components/client/editar-client/editar-client.component';
import { RoomListaComponent } from './components/room/room-lista/room-lista.component';
import { AgregarRoomComponent } from './components/room/agregar-room/agregar-room.component';
import { EditarRoomComponent } from './components/room/editar-room/editar-room.component';
import { AgregarReservationComponent } from './components/reservation/agregar-reservation/agregar-reservation.component';
import { ReservationListaComponent } from './components/reservation/reservation-lista/reservation-lista.component';
import { EditarReservationComponent } from './components/reservation/editar-reservation/editar-reservation.component';
import { MessageListaComponent } from './components/message/message-lista/message-lista.component';
import { AgregarMessageComponent } from './components/message/agregar-message/agregar-message.component';

export const routes: Routes = [
    {path:'', redirectTo:'rooms', pathMatch:'full'},

    {path:'categorys', component: CategoryListaComponent},    
    {path:'agregar-category', component:AgregarCategoryComponent},
    {path:'editar-category/:id', component:EditarCategoryComponent},

    {path:'clients', component: ClientListaComponent},
    {path:'agregar-client', component:AgregarClientComponent},
    {path:'editar-client/:id', component:EditarClientComponent},

    {path:'rooms', component: RoomListaComponent},
    {path:'agregar-room', component:AgregarRoomComponent},
    {path:'editar-room/:id', component:EditarRoomComponent},

    {path:'reservations', component: ReservationListaComponent},
    {path:'agregar-reservation', component:AgregarReservationComponent},
    {path:'editar-reservation/:id', component:EditarReservationComponent},


    {path:'messages', component: MessageListaComponent},
    {path:'agregar-message', component: AgregarMessageComponent},
    //{path:'editar-message/:id', component:EditarMessageComponent}

    
];

