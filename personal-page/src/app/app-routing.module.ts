import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { CommandlineInterfaceComponent } from './cli/commandline-interface/commandline-interface.component';
import { SecretComponent } from './cli/commandline-interface/secret/secret.component';
import { GraphicalInterfaceComponent } from './gui/graphical-interface/graphical-interface.component';
import { ProbComponent } from './prob/prob.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
};

const appRoutes: Routes = [
  { path: 'prob-sim', component: ProbComponent, pathMatch: 'full' },
  { path: 'gui', component: GraphicalInterfaceComponent, pathMatch: 'full' },
  { path: 'cli', component: CommandlineInterfaceComponent, pathMatch: 'full' },
  { path: 'secret', component: SecretComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/cli', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
