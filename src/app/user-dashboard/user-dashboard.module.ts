import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDashboardComponent } from './user-dashboard.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserDashboardComponent,
    SearchBarComponent,
    UserListComponent,
    UserCardComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule, RouterModule],
  exports: [UserDashboardComponent],
})
export class UserDashboardModule {}
