import {AfterViewInit, Directive, ElementRef, Input, OnDestroy, Renderer2} from '@angular/core';

@Directive({
  selector: '[appVisibleClass]',
  standalone: true
})
export class VisibleClassDirective implements AfterViewInit, OnDestroy {
  @Input('appVisibleClass') visibleClass: string = 'visible';
  @Input('rootMargin') rootMargin: string = '0px 0px 0px 0px';
  @Input('threshold') threshold: number = 0;
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, this.visibleClass);
        }
      },
      { threshold: this.threshold, rootMargin: this.rootMargin }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
