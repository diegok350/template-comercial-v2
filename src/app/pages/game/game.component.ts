import { Component, ElementRef, QueryList, ViewChildren, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnimationService } from '../../services/animations/animation.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export default class GameComponent {
  // Animation
  @ViewChildren('refAnime') refAnime: QueryList<ElementRef> | any;
  @ViewChildren('refAnimeLeft') refAnimeLeft: QueryList<ElementRef> | any;
  @ViewChildren('refAnimeTop') refAnimeTop: QueryList<ElementRef> | any;
  public animationService = inject(AnimationService);

  stats = [
    {
      name: "Fuerza",
      value: 80, // suponiendo que el 100% es 100 y el valor es 70
      color: "purple",
      icon: "fa-solid fa-hand-fist icon-stats"
    },
    {
      name: "Estrategia",
      value: 95, // suponiendo que el 100% es 100 y el valor es 45
      color: "blue",
      icon: "fa-solid fa-brain icon-stats"
    },
    {
      name: "Velocidad",
      value: 60, // suponiendo que el 100% es 100 y el valor es 85
      color: "orange",
      icon: "fa-solid fa-person-running icon-stats"
    }
  ];

  ngAfterViewInit(): void {
    this.animationService.animateElementsSpeed(this.refAnime);
    this.animationService.animateElementsLeft(this.refAnimeLeft);
    this.animationService.animateElementsTopBottom(this.refAnimeTop);
  }

}
