//Custom directives : structural directive

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMovies]'
})
export class MoviesDirective {

  @Input() set appMovies(condition:boolean){
    if (condition) {
      this.vwRef.createEmbeddedView(this.tplRef);
    } else {
      this.vwRef.clear();
    }
  }

  constructor(private tplRef: TemplateRef<any>, private vwRef:ViewContainerRef) { }

}
