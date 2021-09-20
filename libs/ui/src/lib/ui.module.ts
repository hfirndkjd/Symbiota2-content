/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';
import { InteractionsComponent } from './interactions/interactions.component';
import { HelpPagesComponent } from './help-pages/help-pages.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectSummaryComponent } from './home/project-summary/project-summary.component';
import { ProjectGoalsComponent } from './home/project-goals/project-goals.component';
import { ProjectEmergenceComponent } from './home/project-emergence/project-emergence.component';
import { TechnicalPlanComponent } from './home/technical-plan/technical-plan.component';
import { ProductAvailabilityComponent } from './home/product-availability/product-availability.component';
import { ProjectManagementComponent } from './home/project-management/project-management.component';
import { LiteratureCitedComponent } from './home/literature-cited/literature-cited.component';
import { IntroProblemComponent } from './progress/intro-problem/intro-problem.component';
import { SolutionVisionComponent } from './progress/solution-vision/solution-vision.component';
import { ProjectRequirementsComponent } from './progress/project-requirements/project-requirements.component';
import { IntroAppendComponent } from './progress/intro-append/intro-append.component';
import { CorePagesComponent } from './progress/core-pages/core-pages.component';
import { CollectionPagesComponent } from './progress/collection-pages/collection-pages.component';
import { OccurrencePagesComponent } from './progress/occurrence-pages/occurrence-pages.component';
import { TaxonPagesComponent } from './progress/taxon-pages/taxon-pages.component';
import { ImagePagesComponent } from './progress/image-pages/image-pages.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { AppRoutingModule } from '../../../../apps/symbiota2/src/app/app-routing.module';
import { ScrollService } from './scroll.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'project-summary', component: ProjectSummaryComponent },
      { path: 'project-goals', component: ProjectGoalsComponent },
      {
        path: 'project-emergence',
        component: ProjectEmergenceComponent,
      },
      { path: 'technical-plan', component: TechnicalPlanComponent },
      {
        path: 'product-availability',
        component: ProductAvailabilityComponent,
      },
      {
        path: 'project-management',
        component: ProjectManagementComponent,
      },
      {
        path: 'literature-cited',
        component: LiteratureCitedComponent,
      },
    ],
  },
  { path: 'progress', component: ProgressComponent },
  { path: 'progress/introduction-problem', component: IntroProblemComponent },
  { path: 'progress/solution-vision', component: SolutionVisionComponent },
  {
    path: 'progress/project-requirements',
    component: ProjectRequirementsComponent,
  },
  { path: 'progress/introduction-appendices', component: IntroAppendComponent },
  { path: 'progress/core-pages', component: CorePagesComponent },
  { path: 'progress/collection-pages', component: CollectionPagesComponent },
  { path: 'progress/occurrence-pages', component: OccurrencePagesComponent },
  { path: 'progress/taxonomy-pages', component: TaxonPagesComponent },
  { path: 'progress/image-pages', component: ImagePagesComponent },

  { path: 'interactions', component: InteractionsComponent },
  { path: 'help-pages', component: HelpPagesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    // AppRoutingModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      useHash: false,
      // scrollOffset: [300, 0],
    }),
  ],
  declarations: [
    DashboardComponent,
    HomeComponent,
    ProgressComponent,
    InteractionsComponent,
    HelpPagesComponent,
    ContactComponent,
    ProjectSummaryComponent,
    ProjectGoalsComponent,
    ProjectEmergenceComponent,
    TechnicalPlanComponent,
    ProductAvailabilityComponent,
    ProjectManagementComponent,
    LiteratureCitedComponent,
    IntroProblemComponent,
    SolutionVisionComponent,
    ProjectRequirementsComponent,
    IntroAppendComponent,
    CorePagesComponent,
    CollectionPagesComponent,
    OccurrencePagesComponent,
    TaxonPagesComponent,
    ImagePagesComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  exports: [RouterModule],
  providers: [ScrollService],
})
export class UiModule {}
