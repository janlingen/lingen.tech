import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandlineInterfaceComponent } from './cli/commandline-interface/commandline-interface.component';
import { GraphicalInterfaceComponent } from './gui/graphical-interface/graphical-interface.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'gui', component: GraphicalInterfaceComponent, pathMatch: 'full' },
  { path: 'cli', component: CommandlineInterfaceComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
