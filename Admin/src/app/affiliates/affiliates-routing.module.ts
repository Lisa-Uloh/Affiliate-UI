import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffiliatesComponent } from './affiliates.component';
import { AffiliatesListComponent } from './views/affiliates-list/affiliates-list.component';
import { ApplicationsWorkspaceComponent } from './views/applications-workspace/applications-workspace.component';
import { ApplicationsWorkspaceSidebarComponent } from './views/applications-workspace/layouts/applications-workspace-sidebar/applications-workspace-sidebar.component';
import { WorkspaceAffliatesComponent } from './views/applications-workspace/affiliates/workspace-affliates/workspace-affliates.component';
import { WorkspaceReferralsComponent } from './views/applications-workspace/referrals/workspace-referrals/workspace-referrals.component';
import { WorkspaceReportsComponent } from './views/applications-workspace/reports/workspace-reports/workspace-reports.component';
import { ReferralsCodeListComponent } from './views/referrals/referrals-code-list/referrals-code-list.component';


const routes: Routes = [
  {
    path: '',
    component: AffiliatesComponent,
    children: [
      { path: '', component: AffiliatesListComponent },
      { path: 'create', component: AffiliatesListComponent }
    ]
  },
  {
    path:'applications', component: ApplicationsWorkspaceSidebarComponent,
    children:[
      {path: '', component: ApplicationsWorkspaceComponent},
      {path: 'affliates', component: WorkspaceAffliatesComponent},
      {path: 'referrals', component: WorkspaceReferralsComponent},
      {path: 'reports', component: WorkspaceReportsComponent}
    ]
  },

  {
    path:'referrals',
    children:[
      {
        path:'',component:ReferralsCodeListComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffiliatesRoutingModule { }
