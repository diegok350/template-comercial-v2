import { CommonModule } from '@angular/common';
import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecentComponent } from '../recent/recent.component';
import { FoundComponent } from '../found/found.component';


@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, FormsModule, RecentComponent, FoundComponent],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {

  searchQuery = model<string>('');
  searchResults = model<any[]>([]);
  recentSearches = model<any[]>([]);
  noMatches = input<boolean>(false);

}
