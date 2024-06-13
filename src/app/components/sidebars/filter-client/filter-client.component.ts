import { Component, model } from '@angular/core';
import { SearchClientComponent } from './search-client/search-client.component';
import { ListClientComponent } from './list-client/list-client.component';

@Component({
  selector: 'app-filter-client',
  standalone: true,
  imports: [SearchClientComponent, ListClientComponent],
  templateUrl: './filter-client.component.html',
  styleUrl: './filter-client.component.scss'
})
export class FilterClientComponent {
  // Filtro de clientes
  searchQuery = model<string>('');
  filteredClients = model<any[]>([]);

  sidebarFilter = model(false);
  view = model('Gestional');

}
