import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren, inject, model } from '@angular/core';
import { LocalService } from '../../../services/storage/local.service';
import { AnimationService } from '../../../services/animations/animation.service';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-found',
  standalone: true,
  imports: [],
  templateUrl: './found.component.html',
  styleUrl: './found.component.scss'
})
export class FoundComponent implements AfterViewInit {
  @ViewChildren('refAnime') refAnime: QueryList<ElementRef> | any;
  
  public animationService = inject(AnimationService);
  private localService = inject(LocalService);

  recentSearches = model<any[]>([]);
  searchResults = model<any[]>([]);

  ngAfterViewInit(): void {
    this.animationService.animateElementsSpeed(this.refAnime);
  }

  async updateRecentSearches(item: any) {
    let searches = await this.localService.getJsonValue((environment.HISTORY_SEARCH));

    if (searches != null || searches != undefined) {
      this.recentSearches.set(searches);
    }
    
    const updatedSearches = [...this.recentSearches(), item];
    this.recentSearches.set(updatedSearches);
    this.localService.setJsonValue(environment.HISTORY_SEARCH, updatedSearches);
  }

}
