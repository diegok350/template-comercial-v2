import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren, inject } from '@angular/core';
import { AnimationService } from '../../../../services/animations/animation.service';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModalDetailComponent } from '../../../../components/detail/modal-detail/modal-detail.component';

@Component({
  selector: 'app-list-process-view',
  standalone: true,
  imports: [DynamicDialogModule],
  templateUrl: './list-process-view.component.html',
  styleUrl: './list-process-view.component.scss',
  providers: [DialogService]
})
export class ListProcessViewComponent implements AfterViewInit {
  // Animation
  @ViewChildren('refAnime') refAnime: QueryList<ElementRef> | any;
  public animationService = inject(AnimationService);

  // Modal
  public dialogService = inject(DialogService);
  ref: DynamicDialogRef | any;

  processList: { name: string; icon: string }[] = [
    { name: 'Gestión Interna', icon: 'fa-solid fa-cogs fs-4 text-primary' },
    { name: 'Producción', icon: 'fa-solid fa-industry fs-4 text-primary' },
    { name: 'Precios', icon: 'fa-solid fa-dollar-sign fs-4 text-primary' },
    { name: 'Stock', icon: 'fa-solid fa-boxes fs-4 text-primary' },
    { name: 'Gestión Clientes', icon: 'fa-solid fa-users fs-4 text-primary' },
    { name: 'Ventas', icon: 'fa-solid fa-shopping-cart fs-4 text-primary' },
    { name: 'Pre-Venta', icon: 'fa-solid fa-chart-line fs-4 text-primary' },
    { name: 'Despacho', icon: 'fa-solid fa-truck fs-4 text-primary' },
    { name: 'Facturación', icon: 'fa-solid fa-file-invoice-dollar fs-4 text-primary' },
    { name: 'Pos-Venta', icon: 'fa-solid fa-handshake fs-4 text-primary' }
  ];

  ngAfterViewInit(): void {
    this.animationService.animateElementsSpeed(this.refAnime);
  }

  showDetail() {
    this.ref = this.dialogService.open(
      ModalDetailComponent,
      {
        header: 'Listado de Procesos',
        data: {
          id: '51gF3'
        },
        width: '100%',
        height: '100vh',
        modal: true,
        styleClass: 'p-dialog-full'
      }
    );
  }

}
