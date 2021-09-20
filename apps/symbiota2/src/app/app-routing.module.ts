/* eslint-disable @nrwl/nx/enforce-module-boundaries */
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { ContactComponent } from 'libs/ui/src/lib/contact/contact.component';
// import { HelpPagesComponent } from 'libs/ui/src/lib/help-pages/help-pages.component';
// import { HomeComponent } from 'libs/ui/src/lib/home/home.component';
// import { InteractionsComponent } from 'libs/ui/src/lib/interactions/interactions.component';
// import { ProgressComponent } from 'libs/ui/src/lib/progress/progress.component';
// import { NotFoundComponent } from 'libs/ui/src/lib/not-found/not-found.component';
// import { ProjectSummaryComponent } from 'libs/ui/src/lib/home/project-summary/project-summary.component';
// import { ProjectGoalsComponent } from 'libs/ui/src/lib/home/project-goals/project-goals.component';
// import { ProjectEmergenceComponent } from 'libs/ui/src/lib/home/project-emergence/project-emergence.component';
// import { TechnicalPlanComponent } from 'libs/ui/src/lib/home/technical-plan/technical-plan.component';
// import { ProductAvailabilityComponent } from 'libs/ui/src/lib/home/product-availability/product-availability.component';
// import { ProjectManagementComponent } from 'libs/ui/src/lib/home/project-management/project-management.component';
// import { LiteratureCitedComponent } from 'libs/ui/src/lib/home/literature-cited/literature-cited.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent,
//     children: [
//       { path: 'project-summary', component: ProjectSummaryComponent },
//       { path: 'project-goals', component: ProjectGoalsComponent },
//       {
//         path: 'project-emergence',
//         component: ProjectEmergenceComponent,
//       },
//       { path: 'technical-plan', component: TechnicalPlanComponent },
//       {
//         path: 'product-availability',
//         component: ProductAvailabilityComponent,
//       },
//       {
//         path: 'project-management',
//         component: ProjectManagementComponent,
//       },
//       {
//         path: 'progress/literature-cited',
//         component: LiteratureCitedComponent,
//       },
//     ],
//   },
//   {
//     path: 'progress',
//     component: ProgressComponent,
//   },
//   { path: 'interactions', component: InteractionsComponent },
//   { path: 'help-pages', component: HelpPagesComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: '**', component: NotFoundComponent },
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, {
//       scrollPositionRestoration: 'enabled',
//       anchorScrolling: 'enabled',
//     }),
//   ],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
