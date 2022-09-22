import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphicalInterfaceComponent } from './gui/graphical-interface/graphical-interface.component';
import { CommandlineInterfaceComponent } from './cli/commandline-interface/commandline-interface.component';
import { HistoryDiplayerComponent } from './cli/commandline-interface/history-diplayer/history-diplayer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GraphicalInterfaceComponent,
    CommandlineInterfaceComponent,
    HistoryDiplayerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
