import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { CliniclistComponent } from './cliniclist/cliniclist.component';
import { DoctorlistComponent } from './doctorlist/doctorlist.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { ReceptionistlistComponent } from './receptionistlist/receptionistlist.component';

import { TestIndexComponent } from './test-index/test-index.component';
import { TestPackageComponent } from './test-package/test-package.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    CliniclistComponent,
    DoctorlistComponent,
    PatientlistComponent,
    ReceptionistlistComponent,
    TestIndexComponent,
    TestPackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
