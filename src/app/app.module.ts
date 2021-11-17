import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './shared/services/users.service';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { UserDetailModule } from './user-detail/user-detail.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserDashboardModule,
    UserDetailModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
