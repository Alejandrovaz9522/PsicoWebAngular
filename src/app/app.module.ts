import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TblPsicologosComponent } from './components/tbl-psicologos/tbl-psicologos.component';
import { FrmPsicologosComponent } from './components/frm-psicologos/frm-psicologos.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrmProfileComponent } from './components/frm-profile/frm-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    TblPsicologosComponent,
    FrmPsicologosComponent,
    FrmProfileComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
