import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import { Property } from '../property.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit {
  property: Property = { id: 0, title: '', description: '', price: 0, location: '' }; 
  isEdit: boolean = false;

  constructor(
    private propertyService: PropertyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.propertyService.getProperties().subscribe({
        next: (properties: Property[]) => {
          const foundProperty = properties.find(p => p.id === +id);
          if (foundProperty) {
            this.property = { ...foundProperty }; 
          }
        },
        error: (error) => {
          console.error('Error fetching properties', error);
        }
      });
    }
  }

  save(): void {
    if (this.isEdit) {
      this.propertyService.updateProperty(this.property);
    } else {
      this.propertyService.addProperty(this.property);
    }
    this.router.navigate(['/properties']);
  }
}
