import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { GraphicalInterfaceComponent } from './gui/graphical-interface/graphical-interface.component';
import { CommandlineInterfaceComponent } from './cli/commandline-interface/commandline-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GraphicalInterfaceComponent,
    CommandlineInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
