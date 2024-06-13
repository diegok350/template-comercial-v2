import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { ListProcessViewComponent } from './operation/list-process-view/list-process-view.component';
import { ListTopViewComponent } from './operation/list-top-view/list-top-view.component';
import { ListRecommendedViewComponent } from './operation/list-recommended-view/list-recommended-view.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { AccordionModule } from 'primeng/accordion';
import { GamecardComponent } from '../../components/gamecard/gamecard.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, SearchbarComponent, TabsComponent, ListProcessViewComponent, ListTopViewComponent, ListRecommendedViewComponent, GamecardComponent, AccordionModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class MainComponent {

  // El estado inicial del tab activo
  activeTab = 'process';  

}
