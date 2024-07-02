import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/servies/product.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  //  tableData: any[] = [];
  tableColumns: any[] = [
    { field: 'title', header: 'title' },
    { field: 'category', header: 'category' },
    { field: 'description', header: 'description' },
    { field: 'price', header: 'price' }
  ];
  originalData: any[]=[];
  tableData: any[]=[];


  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.loadTableData();
  }

  loadTableData(): void {
    this.productService.getProducts().subscribe(
      data => {
        this.originalData = data;
        this.tableData = data;
        console.log('tableData: ', this.tableData);
        
      }
     
    );
  }


  handleSort(event: any) {
    const { sortField, sortOrder } = event;
    this.tableData.sort((a: { [x: string]: any; }, b: { [x: string]: any; }) => {
      const valueA = a[sortField];
      const valueB = b[sortField];

      if (valueA < valueB) {
        return sortOrder === 1 ? -1 : 1;
      } else if (valueA > valueB) {
        return sortOrder === 1 ? 1 : -1;
      } else {
        return 0;
      }
    });
   }

  handleFilter(filters: any) {
    this.tableData = this.originalData.filter((item: { [x: string]: string; }) => {
      for (const field in filters) {
        if (filters[field] && !item[field].toLowerCase().includes(filters[field].value.toLowerCase())) {
          return false;
        }
      }
      return true;
    });  }
}
