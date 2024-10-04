import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import { Property } from '../property.model';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    // Subscribe to the observable to get the properties
    this.propertyService.getProperties().subscribe({
      next: (data: Property[]) => {
        this.properties = data; // Assign the fetched data to properties
      },
      error: (error) => {
        console.error('Error fetching properties', error);
      }
    });
  }

  deleteProperty(id: number): void {
    this.propertyService.deleteProperty(id);
    // After deletion, re-fetch the properties
    this.propertyService.getProperties().subscribe((data: Property[]) => {
      this.properties = data; // Refresh the list
    });
  }
}
