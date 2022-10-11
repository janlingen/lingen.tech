import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphicalInterfaceComponent } from './gui/graphical-interface/graphical-interface.component';
import { CommandlineInterfaceComponent } from './cli/commandline-interface/commandline-interface.component';
import { HistoryDisplayerComponent } from './cli/commandline-interface/history-displayer/history-displayer.component';
import { FormsModule } from '@angular/forms';
import { SkillsComponent } from './cli/commandline-interface/history-displayer/skills/skills.component';
import { HelpComponent } from './cli/commandline-interface/history-displayer/help/help.component';
import { AboutComponent } from './cli/commandline-interface/history-displayer/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphicalInterfaceComponent,
    CommandlineInterfaceComponent,
    HistoryDisplayerComponent,
    SkillsComponent,
    HelpComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
