import { Component, EventEmitter, Input, OnInit, Output,   } from '@angular/core';
import { TableLazyLoadEvent } from 'primeng/table';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {
   @Input()  data:any[] =[];
   @Input() columns:any[]=[];
   @Output() onFilter = new EventEmitter<any>();
   @Output() onSort = new EventEmitter<any>();
    
    constructor(){
    }

    ngOnInit(): void {    
    }

    onLazyLoad(event:TableLazyLoadEvent){
      this.onFilter.emit(event.filters);
      this.onSort.emit(event);
    }
  }
