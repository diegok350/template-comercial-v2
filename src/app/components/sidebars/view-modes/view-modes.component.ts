import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren, inject, model } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationService } from '../../../services/animations/animation.service';
import { LocalService } from '../../../services/storage/local.service';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-view-modes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-modes.component.html',
  styleUrl: './view-modes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewModesComponent implements OnInit, AfterViewInit {

  sidebarView = model(false);
  view = model('Gestional');

  @ViewChildren('refAnime') refAnime: QueryList<ElementRef> | any;
  public router = inject(Router);
  public animationService = inject(AnimationService);
  private localService = inject(LocalService);
  private cdr = inject(ChangeDetectorRef);

  title = 'Modos de vista';
  description = 'Seleccione la vista que prefiere configurar como predeterminada para tu sesión.';
  selectedIndex: any;

  viewsList = [
    {
      id: 1,
      name: "Gestional",
      description: "Ideal para una visión general y rápida de múltiples elementos.",
      selected: false,
      icon: "fa-solid fa-rocket fs-4 text-primary"
    },
    {
      id: 2,
      name: "Comercial",
      description: "Útil para presentaciones donde se desea destacar información.",
      selected: false,
      icon: "fa-solid fa-tv fs-4 text-primary"
    },
    {
      id: 3,
      name: "Industrial",
      description: "Libertad de organizar los elementos como prefiera.",
      selected: false,
      icon: "fa-solid fa-chart-simple fs-4 text-primary"
    }
  ];


  // Verifica la vista seleccionada
  ngOnInit(): void {
    this.localService.getJsonValue(environment.VIEW_MODE).then(selectedView => {
  
      // Verificar si el objeto recuperado es válido y tiene un id
      if (!selectedView || typeof selectedView.id !== 'number') {
        // Si no hay objeto válido o el id no es un número, seleccionar el primero por defecto
        selectedView = this.viewsList[0];
      }
  
      this.selectViewById(selectedView);
      this.cdr.detectChanges();
  
    }).catch(error => {
      // En caso de error, seleccionar el primero por defecto
      this.selectViewById(this.viewsList[0]);
      this.cdr.detectChanges();
    });
  }

  // Carga la animación al cargar el componente por primera vez
  ngAfterViewInit(): void {
    this.animationService.animateElementsLeft(this.refAnime);
  }

  // Guarda la opción seleccionada
  btnAccept() {
    this.localService.setJsonValue(environment.VIEW_MODE, this.viewsList[this.selectedIndex]);

    this.closeSidebar();
  }

  // Notifica al componente cerrar el sidebar
  closeSidebar(): void {
    // Signal para comunicarse con el Layout
    this.sidebarView.set(false);
    this.view.set(this.viewsList[this.selectedIndex].name)
  }

  // Selecciona la vista elegida
  selectViewById(selectedView: any): void {
    this.viewsList.forEach((item) => {
      item.selected = item.id === selectedView.id; // Usar el id para determinar la selección
    });
  
    // Actualizar selectedIndex basado en el id encontrado, si es necesario
    this.selectedIndex = this.viewsList.findIndex(item => item.id === selectedView.id);
  }

}
