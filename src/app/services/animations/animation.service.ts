import { ElementRef, Injectable, QueryList, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  public animateElementsSpeed(refHtml: any): void {
    setTimeout(() => {
      // Asume que refAnime es una QueryList de elementos que deseas animar.
      const elements = refHtml.toArray(); // Convierte la QueryList a un array.
      gsap.from(elements.map((el: { nativeElement: any; }) => el.nativeElement), {
        opacity: 0,
        y: 20,
        // Aquí es donde ajustas el stagger para que los elementos se animen uno tras otro.
        stagger: 0.05, // Ajusta este valor según la cantidad de tiempo entre las animaciones de cada elemento.
        duration: 0.2,
        ease: 'power3.easeOut',
      });
    });
  }

  public animateElementsTopBottom(refHtml: any): void {
    // Asume que refAnime es una QueryList de elementos que deseas animar.
    const elements = refHtml.toArray(); // Convierte la QueryList a un array.
    gsap.from(elements.map((el: { nativeElement: any; }) => el.nativeElement), {
      opacity: 0,
      y: -30,
      // Aquí es donde ajustas el stagger para que los elementos se animen uno tras otro.
      stagger: 0.05, // Ajusta este valor según la cantidad de tiempo entre las animaciones de cada elemento.
      duration: 0.2,
      ease: 'power3.easeOut',
    });
  }

  public animateElementsBottomTop(refHtml: any): void {
    // Asume que refAnime es una QueryList de elementos que deseas animar.
    const elements = refHtml.toArray(); // Convierte la QueryList a un array.
    gsap.from(elements.map((el: { nativeElement: any; }) => el.nativeElement), {
      opacity: 0,
      y: 30,
      // Aquí es donde ajustas el stagger para que los elementos se animen uno tras otro.
      stagger: 0.1, // Ajusta este valor según la cantidad de tiempo entre las animaciones de cada elemento.
      duration: 0.3,
      ease: 'power3.easeOut',
    });
  }

  public animateElementsChip(element: ElementRef): void {
    gsap.from(element.nativeElement, {
      opacity: 0,
      scale: 0.5,
      duration: 0.3, // Ajusta la duración según sea necesario
      ease: 'back.out(1.7)', // Ajusta el valor para controlar la fuerza del rebote
    });
  }

  public animateElementsLeft(refHtml: any): void {
    setTimeout(() => {
      // Asume que refAnimeLeft es una QueryList de elementos que deseas animar.
      const elements = refHtml.toArray(); // Convierte la QueryList a un array.
      gsap.from(elements.map((el: { nativeElement: any; }) => el.nativeElement), {
        opacity: 0,
        x: -50,
        // Aquí es donde ajustas el stagger para que los elementos se animen uno tras otro.
        stagger: 0.1, // Ajusta este valor según la cantidad de tiempo entre las animaciones de cada elemento.
        duration: 0.2,
        ease: 'power3.easeOut',
      });
    });
  }

  public animateStars(refHtml: any): void {
    // Asume que refAnimeStar es una QueryList de elementos que deseas animar.
    const stars = refHtml.toArray().map((el: ElementRef) => el.nativeElement); // Convierte la QueryList a un array de elementos nativos.

    // Establece el retardo inicial para la primera animación de cada estrella
    let delay = 0;

    stars.forEach((star: gsap.TweenTarget) => {
      const tl = gsap.timeline({
        repeat: -1, // Repetir indefinidamente
        repeatDelay: 1, // Espera 5 segundos antes de repetir
      });

      // Inicia cada animación con un retardo adicional
      tl.fromTo(star, { scale: 0, opacity: 0, rotation: 0 },
        { scale: 1, opacity: 1, rotation: 180, duration: 1, ease: 'power1.inOut', delay: delay })
        .to(star, { scale: 0, opacity: 0, rotation: 360, duration: 1, ease: 'power1.inOut' });

      // Incrementa el retardo para la próxima estrella
      delay += 1;
    });
  }

  public animateStarsPulse(refHtml: any): void {
    // Asume que refAnimeStar es una QueryList de elementos que deseas animar.
    const stars = refHtml.toArray().map((el: ElementRef) => el.nativeElement); // Convierte la QueryList a un array de elementos nativos.

    // Establece el retardo inicial para la primera animación de cada estrella
    let delay = 0;

    stars.forEach((star: gsap.TweenTarget) => {
      const tl = gsap.timeline({
        repeat: -1, // Repetir indefinidamente
        repeatDelay: 1, // Espera 5 segundos antes de repetir
      });

      // Inicia cada animación con un retardo adicional
      tl.fromTo(star, { scale: 0, opacity: 0, rotation: 0 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: 'power1.inOut', delay: delay })
        .to(star, { scale: 0, opacity: 0, rotation: 0, duration: 1, ease: 'power1.inOut' });

      // Incrementa el retardo para la próxima estrella
      delay += 1;
    });
  }

}
