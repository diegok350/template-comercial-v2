import { Component, OnInit, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-client.component.html',
  styleUrl: './search-client.component.scss'
})
export class SearchClientComponent implements OnInit {
  textSearch = '';
  searchQuery = model<string>('');
  clients = [
    {
      id: 1,
      avatar: '',
      firstName: 'Juan',
      lastName: 'Pérez',
      initials: 'JP',
      email: 'juan.perez@email.com',
      selected: false
    },
    {
      id: 2,
      avatar: '',
      firstName: 'Ana',
      lastName: 'González',
      initials: 'AG',
      email: 'ana.gonzalez@email.com',
      selected: false
    },
    {
      id: 3,
      avatar: '',
      firstName: 'Luis',
      lastName: 'Martínez',
      initials: 'LM',
      email: 'luis.martinez@email.com',
      selected: false
    },
    {
      id: 4,
      avatar: '',
      firstName: 'Sofía',
      lastName: 'López',
      initials: 'SL',
      email: 'sofia.lopez@email.com',
      selected: false
    },
    {
      id: 5,
      avatar: '',
      firstName: 'Carlos',
      lastName: 'García',
      initials: 'CG',
      email: 'carlos.garcia@email.com',
      selected: false
    },
    {
      id: 6,
      avatar: '',
      firstName: 'María',
      lastName: 'Fernández',
      initials: 'MF',
      email: 'maria.fernandez@email.com',
      selected: false
    },
    {
      id: 7,
      avatar: '',
      firstName: 'David',
      lastName: 'Rodríguez',
      initials: 'DR',
      email: 'david.rodriguez@email.com',
      selected: false
    },
    {
      id: 8,
      avatar: '',
      firstName: 'Lucía',
      lastName: 'Gutiérrez',
      initials: 'LG',
      email: 'lucia.gutierrez@email.com',
      selected: false
    },
    {
      id: 9,
      avatar: '',
      firstName: 'Javier',
      lastName: 'Ramírez',
      initials: 'JR',
      email: 'javier.ramirez@email.com',
      selected: false
    },
    {
      id: 10,
      avatar: '',
      firstName: 'Carmen',
      lastName: 'Ruiz',
      initials: 'CR',
      email: 'carmen.ruiz@email.com',
      selected: false
    },
    {
      id: 11,
      avatar: '',
      firstName: 'Fernando',
      lastName: 'Alonso',
      initials: 'FA',
      email: 'fernando.alonso@email.com',
      selected: false
    },
    {
      id: 12,
      avatar: '',
      firstName: 'Isabel',
      lastName: 'Torres',
      initials: 'IT',
      email: 'isabel.torres@email.com',
      selected: false
    },
    {
      id: 13,
      avatar: '',
      firstName: 'Marta',
      lastName: 'Sánchez',
      initials: 'MS',
      email: 'marta.sanchez@email.com',
      selected: false
    },
    {
      id: 14,
      avatar: '',
      firstName: 'Pablo',
      lastName: 'Díaz',
      initials: 'PD',
      email: 'pablo.diaz@email.com',
      selected: false
    },
    {
      id: 15,
      avatar: '',
      firstName: 'Teresa',
      lastName: 'Morales',
      initials: 'TM',
      email: 'teresa.morales@email.com',
      selected: false
    },
    {
      id: 16,
      avatar: '',
      firstName: 'Jorge',
      lastName: 'Vargas',
      initials: 'JV',
      email: 'jorge.vargas@email.com',
      selected: false
    }
  ];

  selectedClients: any[] = [];
  filteredClients = model<any[]>([]);

  ngOnInit(): void {
    this.filteredClients.set(this.clients.slice());
  }

  resetInput() {
    this.textSearch = '';
    this.searchQuery.set(this.textSearch);
    this.performSearch(this.searchQuery());
  }

  performSearch(query: string) {
    if (this.searchQuery().trim()) {
      let filtered = this.clients.filter(client =>
        client.firstName.toLowerCase().includes(query.toLowerCase()) ||
        client.lastName.toLowerCase().includes(query.toLowerCase()) ||
        client.email.toLowerCase().includes(query.toLowerCase())
      );

      this.filteredClients.set(filtered);

    } else {
      // Resetea a todos los clientes si la búsqueda está vacía
      this.filteredClients.set(this.clients.slice());
    }
  }

  handleInput(event: any) {
    const inputElement = event.target as HTMLInputElement;
    const query = inputElement.value;
    this.searchQuery.set(query);
    this.performSearch(this.searchQuery());
  }

  cleanSearch() {
    this.textSearch = '';
    this.searchQuery.set(this.textSearch);
    this.filteredClients.set(this.clients.slice());
  }


}
