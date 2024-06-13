import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren, inject } from '@angular/core';
import { AnimationService } from '../../../../services/animations/animation.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModalDetailComponent } from '../../../../components/detail/modal-detail/modal-detail.component';

@Component({
  selector: 'app-list-recommended-view',
  standalone: true,
  imports: [],
  templateUrl: './list-recommended-view.component.html',
  styleUrl: './list-recommended-view.component.scss',
  providers: [DialogService]
})
export class ListRecommendedViewComponent implements AfterViewInit {
  // Animation
  @ViewChildren('refAnime') refAnime: QueryList<ElementRef> | any;
  public animationService = inject(AnimationService);

  // Modal
  public dialogService = inject(DialogService);
  ref: DynamicDialogRef | any;

  recommendedList = [
    { name: 'Ternium Activo', icon: 'fa-solid fa-industry fs-4 text-secondary' },  
    { name: 'Workflows', icon: 'fa-solid fa-project-diagram fs-4 text-secondary' }, 
    { name: 'Chatbot Comercial', icon: 'fa-solid fa-robot fs-4 text-secondary' }, 
    { name: 'Mesa de Ayuda', icon: 'fa-solid fa-headset fs-4 text-secondary' },
    { name: 'IDM', icon: 'fa-solid fa-user-shield fs-4 text-secondary' } 
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
