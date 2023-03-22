import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  
  @Input() items: any[] = [];
  @Input() pageSize: number = 10;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  p: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
