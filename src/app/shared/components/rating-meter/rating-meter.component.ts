import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-meter',
  templateUrl: './rating-meter.component.html',
})
export class RatingMeterComponent implements OnInit {
  @Input()
  rating: number = 0;
  maxRating: number = 5;
  fullStars: number = 0;
  hasHalfStar: boolean = false;
  emptyStars: number = this.maxRating;

  constructor() {}

  ngOnInit(): void {
    this.fullStars = this.numberOfStars();
    this.hasHalfStar =
      this.rating < this.maxRating && this.rating > 0 && this.rating % 1 > 0;
    this.emptyStars =
      this.maxRating - this.fullStars - (this.hasHalfStar ? 1 : 0);
  }

  numberOfStars(): number {
    if (this.rating <= 0) return 0;
    let fullStars = Math.floor(this.rating);
    return Math.min(fullStars, this.maxRating);
  }
}
