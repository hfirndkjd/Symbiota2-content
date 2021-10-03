/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { InteractionsComponent } from './public/interactions/interactions.component';

import { NotFoundComponent } from './public/not-found/not-found.component';

import { SidebarComponent } from './public/sidebar/sidebar.component';
import { ScrollService } from './scroll.service';
import { ContactComponent } from './public/contact/contact.component';
import { FooterComponent } from './public/footer/footer.component';
import { HeaderComponent } from './public/header/header.component';
import { HelpPagesComponent } from './public/help-pages/help-pages.component';
import { LoginComponent } from './secure/login/login.component';
import { UsersComponent } from './secure/dashboard/users/users.component';
import { MailingListComponent } from './secure/dashboard/mailing-list/mailing-list.component';
import { EmailBoxComponent } from './secure/dashboard/email-box/email-box.component';
import { ProfileComponent } from './secure/dashboard/profile/profile.component';
import { RegisterComponent } from './secure/register/register.component';
import { HomeComponent } from './public/home/home.component';
import { LiteratureCitedComponent } from './public/home/literature-cited/literature-cited.component';
import { ProductAvailabilityComponent } from './public/home/product-availability/product-availability.component';
import { ProjectEmergenceComponent } from './public/home/project-emergence/project-emergence.component';
import { ProjectGoalsComponent } from './public/home/project-goals/project-goals.component';
import { ProjectManagementComponent } from './public/home/project-management/project-management.component';
import { ProjectSummaryComponent } from './public/home/project-summary/project-summary.component';
import { TechnicalPlanComponent } from './public/home/technical-plan/technical-plan.component';
import { CollectionPagesComponent } from './public/progress/collection-pages/collection-pages.component';
import { CorePagesComponent } from './public/progress/core-pages/core-pages.component';
import { IntroAppendComponent } from './public/progress/intro-append/intro-append.component';
import { IntroProblemComponent } from './public/progress/intro-problem/intro-problem.component';
import { OccurrencePagesComponent } from './public/progress/occurrence-pages/occurrence-pages.component';
import { ProgressComponent } from './public/progress/progress.component';
import { ProjectRequirementsComponent } from './public/progress/project-requirements/project-requirements.component';
import { SolutionVisionComponent } from './public/progress/solution-vision/solution-vision.component';
import { TaxonPagesComponent } from './public/progress/taxon-pages/taxon-pages.component';
import { ImagePagesComponent } from './public/progress/image-pages/image-pages.component';
import { CredentialInterceptor } from './interceptors/credential.interceptor';
import { SettingsComponent } from './secure/dashboard/settings/settings.component';
import { GeneralComponent } from './secure/dashboard/general/general.component';
import { ProfileModule } from './secure/dashboard/profile/profile.module';
import { UsersModule } from './secure/dashboard/users/users.module';
import { UserCreateComponent } from './secure/dashboard/user-create/user-create.component';
import { UserCreateModule } from './secure/dashboard/user-create/user-create.module';
import { UserEditModule } from './secure/dashboard/user-edit/user-edit.module';
import { UserEditComponent } from './secure/dashboard/user-edit/user-edit.component';
import { RolesModule } from './secure/dashboard/roles/roles.module';
import { RolesComponent } from './secure/dashboard/roles/roles.component';
import { RoleCreateComponent } from './secure/dashboard/roles/role-create/role-create.component';
import { RoleCreateModule } from './secure/dashboard/roles/role-create/role-create.module';
import { RoleEditModule } from './secure/dashboard/roles/role-edit/role-edit.module';
import { RoleEditComponent } from './secure/dashboard/roles/role-edit/role-edit.component';
import { MailingListModule } from './secure/dashboard/mailing-list/mailing-list.module';
import { EmailCreateModule } from './secure/dashboard/mailing-list/email-create/email-create.module';
import { EmailEditModule } from './secure/dashboard/mailing-list/email-edit/email-edit.module';
import { EmailCreateComponent } from './secure/dashboard/mailing-list/email-create/email-create.component';
import { EmailEditComponent } from './secure/dashboard/mailing-list/email-edit/email-edit.component';
import { EmailBoxModule } from './secure/dashboard/email-box/email-box.module';

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
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: GeneralComponent },
      {
        path: 'users',
        component: UsersComponent,
        children: [{ path: 'email-box', component: EmailBoxComponent }],
      },
      { path: 'users/create', component: UserCreateComponent },
      { path: 'users/:id/edit', component: UserEditComponent },
      {
        path: 'mailing-list',
        component: MailingListComponent,
        children: [{ path: 'email-box', component: EmailBoxComponent }],
      },
      { path: 'mailing-list/create', component: EmailCreateComponent },
      { path: 'mailing-list/:id/edit', component: EmailEditComponent },
      // { path: 'mailing-list', component: MailingListComponent },
      { path: 'email-box', component: EmailBoxComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'roles', component: RolesComponent },
      { path: 'roles/create', component: RoleCreateComponent },
      { path: 'roles/:id/edit', component: RoleEditComponent },
      { path: 'settings', component: SettingsComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      useHash: false,
      // scrollOffset: [300, 0],
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProfileModule,
    UsersModule,
    UserCreateModule,
    UserEditModule,
    RolesModule,
    RoleCreateModule,
    RoleEditModule,
    MailingListModule,
    EmailCreateModule,
    EmailEditModule,
    EmailBoxModule,
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
    LoginComponent,
    RegisterComponent,
    GeneralComponent,
    SettingsComponent,
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialInterceptor,
      multi: true,
    },
    ScrollService,
  ],
})
export class UiModule {}
