import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren, inject } from '@angular/core';
import { AnimationService } from '../../../../services/animations/animation.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModalDetailComponent } from '../../../../components/detail/modal-detail/modal-detail.component';


@Component({
  selector: 'app-list-top-view',
  standalone: true,
  imports: [],
  templateUrl: './list-top-view.component.html',
  styleUrl: './list-top-view.component.scss',
  providers: [DialogService]
})
export class ListTopViewComponent implements AfterViewInit {
  // Animation
  @ViewChildren('refAnime') refAnime: QueryList<ElementRef> | any;
  public animationService = inject(AnimationService);

  // Modal
  public dialogService = inject(DialogService);
  ref: DynamicDialogRef | any;

  topList: { name: string; icon: string }[] = [
    { name: 'Consulta Técnica', icon: 'fa-solid fa-tools fs-4 text-primary' },
    { name: 'Flash Comercial', icon: 'fa-solid fa-bolt fs-4 text-primary' },
    { name: 'Foto Cliente', icon: 'fa-solid fa-camera fs-4 text-primary' },
    { name: 'Seguimiento Solicitudes', icon: 'fa-solid fa-clipboard-list fs-4 text-primary' },
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
