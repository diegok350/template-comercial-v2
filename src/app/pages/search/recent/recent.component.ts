import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren, inject, model } from '@angular/core';
import { AnimationService } from '../../../services/animations/animation.service';
import { LocalService } from '../../../services/storage/local.service';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-recent',
  standalone: true,
  imports: [],
  templateUrl: './recent.component.html',
  styleUrl: './recent.component.scss'
})
export class RecentComponent implements AfterViewInit {
  @ViewChildren('refAnime') refAnime: QueryList<ElementRef> | any;
  
  public animationService = inject(AnimationService);
  private localService = inject(LocalService);
  
  recentSearches = model<any[]>([]);

  ngAfterViewInit(): void {
    this.animationService.animateElementsSpeed(this.refAnime);
  }

  deleteSearch(index: number) {
    const updatedSearches = this.recentSearches().filter((_, i) => i !== index);
    this.recentSearches.set(updatedSearches);
    this.localService.setJsonValue(environment.HISTORY_SEARCH, updatedSearches);
  }

}
