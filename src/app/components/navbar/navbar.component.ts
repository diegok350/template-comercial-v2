import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, model } from '@angular/core';
import { LocalService } from '../../services/storage/local.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  title = 'Movilidad';
  sidebarView = model(false);
  sidebarFilter = model(false);
  view = model('Gestional');

  private localService = inject(LocalService);

  ngOnInit(): void {
    this.localService.getJsonValue(environment.VIEW_MODE).then(selectedView => {

      this.view.set(selectedView.name);

    }).catch(error => {
      // En caso de error, seleccionar el primero por defecto
    });
  }

  openViewSidebar(): void {
    this.sidebarView.set(true);
  }

  openFilterSidebar(): void {
    this.sidebarFilter.set(true);
  }


}
