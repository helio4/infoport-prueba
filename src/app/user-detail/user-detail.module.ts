import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserDetailComponent } from './user-detail.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [UserDetailComponent],
  imports: [CommonModule, SharedModule, BrowserModule],
  exports: [UserDetailComponent],
})
export class UserDetailModule {}
