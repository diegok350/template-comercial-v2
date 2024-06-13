import { Component, model } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  // Utiliza model para gestionar el estado del tab activo
  name = model('process');

  tabs = [
    { name: 'Procesos', key: 'process' },
    { name: 'Más visitadas', key: 'top' },
    { name: 'Recomendados', key: 'recommed' }
  ];

  selectTab(tabKey: string): void {
    // Cambia el valor del modelo
    this.name.set(tabKey);
  }

}
