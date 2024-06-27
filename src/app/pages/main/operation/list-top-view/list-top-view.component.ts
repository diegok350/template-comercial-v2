import { Component } from '@angular/core';

@Component({
  selector: 'app-list-top-view',
  standalone: true,
  imports: [],
  templateUrl: './list-top-view.component.html',
  styleUrl: './list-top-view.component.scss',
})
export class ListTopViewComponent {

  topList: { name: string; icon: string }[] = [
    { name: 'Consulta Técnica', icon: 'fa-solid fa-tools fs-4 text-primary' },
    { name: 'Flash Comercial', icon: 'fa-solid fa-bolt fs-4 text-primary' },
    { name: 'Foto Cliente', icon: 'fa-solid fa-camera fs-4 text-primary' },
    { name: 'Seguimiento Solicitudes', icon: 'fa-solid fa-clipboard-list fs-4 text-primary' },
  ];

}
