import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RatingMeterComponent } from './components/rating-meter/rating-meter.component';

@NgModule({
  declarations: [RatingMeterComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [RatingMeterComponent],
})
export class SharedModule {}
