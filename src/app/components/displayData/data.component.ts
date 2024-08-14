import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class infoComponent implements OnInit{
  info: any[] = []; // Variable to store products data

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getAlldata();
  }

  getAlldata() {
    this.dataService.fetchAllData().subscribe(
      (data) => {
        console.log(data)
        this.info = data;
        
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }


}
