import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./components/admin/admin.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ProjectsComponent } from "./components/projects/projects.component";

const routes: Routes = [
    {path: '', component: ProfileComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'admin', component: AdminComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}