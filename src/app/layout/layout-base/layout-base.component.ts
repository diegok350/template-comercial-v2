import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { GamebarComponent } from '../../components/gamebar/gamebar.component';
import { FilterClientComponent } from '../../components/sidebars/filter-client/filter-client.component';
import { ViewModesComponent } from '../../components/sidebars/view-modes/view-modes.component';
import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';
import { MediaQueryService } from '../../services/media/media.service';
import { Subscription } from 'rxjs';
import { MiddlewareBarComponent } from '../../components/middleware-bar/middleware-bar.component';

@Component({
  selector: 'app-layout-base',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    GamebarComponent,
    MiddlewareBarComponent,
    FilterClientComponent,
    ViewModesComponent,
    SidebarModule
  ],
  templateUrl: './layout-base.component.html',
  styleUrl: './layout-base.component.scss'
})

export class LayoutBaseComponent implements OnInit, OnDestroy {

  public mediaService = inject(MediaQueryService);
  public isMobile: boolean = false;
  private subscription: Subscription = new Subscription();

  openView = false;
  openFilter = false;
  view = 'Gestional';

  ngOnInit(): void {
    this.subscription.add(
      this.mediaService.mediaQuery('max', 'sm').subscribe(isMobile => {
        this.isMobile = isMobile;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
