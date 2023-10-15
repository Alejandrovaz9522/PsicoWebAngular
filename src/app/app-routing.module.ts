import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TblPsicologosComponent } from './components/tbl-psicologos/tbl-psicologos.component';
import { FrmPsicologosComponent } from './components/frm-psicologos/frm-psicologos.component';
import { FrmProfileComponent } from './components/frm-profile/frm-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/psicologos', pathMatch: 'full'},
  { path: 'psicologos', component: TblPsicologosComponent },
  { path: 'frm-psicologos', component: FrmPsicologosComponent },
  { path: 'frm-psicologos/:id', component: FrmPsicologosComponent },
  { path: 'frm-perfil/:id', component: FrmProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
