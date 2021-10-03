/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MailingListComponent } from './mailing-list.component';
import { RouterModule } from '@angular/router';
import { EmailBoxModule } from '../email-box/email-box.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    EmailBoxModule,
  ],
  declarations: [MailingListComponent],
  exports: [],
  providers: [],
})
export class MailingListModule {}
