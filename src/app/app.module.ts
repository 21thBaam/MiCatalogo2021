import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ListComponent } from './components/list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetallesAutosComponent } from './modals/detalles-autos/detalles-autos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonsComponent,
    ListComponent,
    DetallesAutosComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
