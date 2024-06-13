import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, inject, model, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Dialog, DialogModule } from 'primeng/dialog';
import { AnimationService } from '../../services/animations/animation.service';
import { LocalService } from '../../services/storage/local.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { VoiceComponent } from './voice/voice.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, ResultComponent, DialogModule, VoiceComponent, RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export default class SearchComponent implements OnInit, AfterViewInit {
  @ViewChildren('refAnime') refAnime: QueryList<ElementRef> | any;

  public animationService = inject(AnimationService);
  private localService = inject(LocalService);

  result = signal(false);
  visible = signal(false);

  // Search Variables
  textSearch = '';
  searchQuery = model<string>('');
  recentSearches = signal<any[]>([]);
  searchResults = signal<any[]>([]);
  noMatches = signal(false);

  @ViewChild('dialog') dialog!: Dialog;

  data = [
    { title: 'Flash Comercial', description: 'Gestion Clientes', keywords: ['Rayo', 'Trueno', 'Tormenta'] },
    { title: 'Foto Cliente', description: 'Gestion Clientes', keywords: ['Foto', 'Perfil', 'Cliente'] },
    { title: 'Informe de Visita', description: 'Gestion Clientes', keywords: ['Informe', 'Visita', 'Reporte'] },
    { title: 'Precio Especifico', description: 'Gestion Clientes', keywords: ['Precio', 'Dinero', 'Costo'] },
    { title: 'Precio Base + Extra', description: 'Gestion Clientes', keywords: ['Extra', 'Dinero', 'Costo', 'Precio'] },
    { title: 'Modificacion Precio Pedidos', description: 'Ventas', keywords: ['Precio', 'Ventas', 'Modificacion'] },
  ];

  ngOnInit(): void {
    // Restabele el input
    this.resetInput();

    // Carga el historial de busqueda
    this.loadRecentSearches();
  }

  ngAfterViewInit(): void {
    this.animationService.animateElementsBottomTop(this.refAnime);
  }

  resetInput() {
    this.textSearch = '';
    this.searchQuery.set(this.textSearch);
    this.performSearch(this.searchQuery());
  }

  performSearch(query: string) {
    if (query.trim() !== '') {
      const results = this.data.filter(item =>
        item.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase())) ||
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );

      this.searchResults.set(results);
      this.noMatches.set(results.length === 0);

    } else {
      this.searchResults.set([]);
      this.loadRecentSearches();
      this.noMatches.set(false);
    }
    this.result.set(true);
  }

  handleInput(event: any) {
    const inputElement = event.target as HTMLInputElement;
    const query = inputElement.value;
    this.searchQuery.set(query);
    this.performSearch(this.searchQuery());
  }

  handleSearchText() {
    this.searchQuery.set(this.textSearch);
    this.performSearch(this.searchQuery());
  }

  handleSearchVoice() {
    // Voice Api Service
  }

  cleanSearch() {
    this.searchResults.set([]);
    this.result.set(false);
    this.noMatches.set(false);

    this.textSearch = '';
    this.searchQuery.set(this.textSearch);
    this.performSearch(this.searchQuery());
  }

  async loadRecentSearches() {
    let searches = await this.localService.getJsonValue((environment.HISTORY_SEARCH));
    if (searches != null || searches != undefined) {
      this.recentSearches.set(searches);
    }
  }

}
