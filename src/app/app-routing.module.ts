import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { DoctorlistComponent } from './doctorlist/doctorlist.component';
import { ReceptionistlistComponent } from './receptionistlist/receptionistlist.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { TestPackageComponent } from './test-package/test-package.component';
import { TestIndexComponent } from './test-index/test-index.component';
import { CliniclistComponent } from './cliniclist/cliniclist.component';





const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "index"},
  {path: "login", component: LoginComponent},
  {path: "index", component: IndexPageComponent},
  {path: "doctorlist", component: DoctorlistComponent},
  {path: "receptionistlist", component: ReceptionistlistComponent},
  {path: "patientlist", component: PatientlistComponent},
  {path: "testpackage", component: TestPackageComponent},
  {path: "testindex", component: TestIndexComponent},
  {path: "cliniclist", component: CliniclistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
