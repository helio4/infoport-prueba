import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/data-models/user';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Input()
  users: User[] | undefined;
  @Output() searchQuerry = new EventEmitter<string>();
  @Output() refresh = new EventEmitter();
  @Output() filterMode = new EventEmitter<string>();
  searchKey: string = '';
  filter: string = '';

  constructor() {}

  ngOnInit(): void {}

  changeSearchQuerryHandler() {
    this.searchQuerry.emit(this.searchKey);
  }

  refreshHandler() {
    this.searchKey = '';
    this.filter = '';
    this.refresh.emit();
  }

  changeFilterModeHandler(mode: string) {
    if (mode === this.filter) {
      this.filter = '';
      this.filterMode.emit(this.filter);
    } else {
      this.filter = mode;
      this.filterMode.emit(mode);
    }
  }
}
