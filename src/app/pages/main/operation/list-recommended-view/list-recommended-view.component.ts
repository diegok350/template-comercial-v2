import { Component } from '@angular/core';

@Component({
  selector: 'app-list-recommended-view',
  standalone: true,
  imports: [],
  templateUrl: './list-recommended-view.component.html',
  styleUrl: './list-recommended-view.component.scss',
})
export class ListRecommendedViewComponent {

  recommendedList = [
    { name: 'Ternium Activo', icon: 'fa-solid fa-industry fs-4 text-secondary' },  
    { name: 'Workflows', icon: 'fa-solid fa-project-diagram fs-4 text-secondary' }, 
    { name: 'Chatbot Comercial', icon: 'fa-solid fa-robot fs-4 text-secondary' }, 
    { name: 'Mesa de Ayuda', icon: 'fa-solid fa-headset fs-4 text-secondary' },
    { name: 'IDM', icon: 'fa-solid fa-user-shield fs-4 text-secondary' } 
  ];

}
