import { ThrowStmt } from '@angular/compiler';
import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})

//cilco de vida da aplicação
export class ForDirective implements OnInit {

  @Input('myForEm')
  numbers!: number[];
  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {
  }
  ngOnInit(): void {
   for(let number of this.numbers){
     this.container.createEmbeddedView(this.template, { $implicit : number})
   }

  }

}
