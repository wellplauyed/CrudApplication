import { Injectable } from '@angular/core';
import { Property } from './property.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private properties: Property[] = [];
  private nextId = 1;
  private apiUrl = 'http://localhost/api/property_list'; // Update with your actual API URL

  constructor(private http: HttpClient) { }


  getLocalProperties(): Property[] {
    return this.properties;
  }

  addProperty(property: Property): void {
    property.id = this.nextId++;
    this.properties.push(property);
  }

  updateProperty(updatedProperty: Property): void {
    const index = this.properties.findIndex(p => p.id === updatedProperty.id);
    if (index !== -1) {
      this.properties[index] = updatedProperty;
    }
  }

  deleteProperty(id: number): void {
    this.properties = this.properties.filter(property => property.id !== id);
  }


  getProperties(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


}
