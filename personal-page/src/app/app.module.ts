import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphicalInterfaceComponent } from './gui/graphical-interface/graphical-interface.component';
import { CommandlineInterfaceComponent } from './cli/commandline-interface/commandline-interface.component';
import { HistoryDisplayerComponent } from './cli/commandline-interface/history-displayer/history-displayer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GraphicalInterfaceComponent,
    CommandlineInterfaceComponent,
    HistoryDisplayerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
