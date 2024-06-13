import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren, effect, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../../services/animations/animation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-client',
  standalone: true,
  imports: [CommonModule, FormsModule, CheckboxModule, ChipsModule],
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements AfterViewInit {

  @ViewChildren('listAnime') listAnime: QueryList<ElementRef> | any;
  @ViewChildren('refAnime') refAnime: QueryList<ElementRef> | any;
  public animationService = inject(AnimationService);
  private cdr = inject(ChangeDetectorRef);
  private refAnimeSubscription!: Subscription;


  selectedClients: any[] = [];
  searchQuery = model<string>('');
  filteredClients = model<any[]>([]);

  // Carga la animacion
  ngAfterViewInit() {
    // Anima los clientes marcados
    this.refAnimeSubscription = this.refAnime.changes.subscribe((queryList: QueryList<ElementRef>) => {
      const elements = queryList.toArray();
      if (elements.length > 0) {
        this.animationService.animateElementsChip(elements[elements.length - 1]);
      }
    });

    // Anima el listado de clientes
    this.animationService.animateElementsSpeed(this.listAnime);
  }

  // Destruye la animacion
  ngOnDestroy() {
    if (this.refAnimeSubscription) {
      this.refAnimeSubscription.unsubscribe();
    }
  }

  // Actualiza la seccion de clientes marcados
  updateSelection(client: any) {
    if (client.selected) {
      this.selectedClients.push(client);
    } else {
      this.selectedClients = this.selectedClients.filter(c => c.id !== client.id);
    }
    // Forzar la detección de cambios después de agregar
    this.cdr.detectChanges();
  }

  // Elimina un cliente marcado
  removeClient(client: any) {
    const index = this.selectedClients.indexOf(client);
    if (index >= 0) {
      this.selectedClients.splice(index, 1);
      const clientInList = this.filteredClients().find(c => c.id === client.id);
      if (clientInList) {
        clientInList.selected = false;
      }
    }

    // Forzar la detección de cambios después de eliminar
    this.cdr.detectChanges();
  }

}

