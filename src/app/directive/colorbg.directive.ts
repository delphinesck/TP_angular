import { Directive, OnChanges, Input, ElementRef, SimpleChanges } from "@angular/core";

@Directive ({
    selector: "[appColorbg]"
})
export class ColorbgDirective implements OnChanges {
    private element:HTMLElement;

    @Input() colorbg:string;

    constructor(el:ElementRef){
        this.element = el.nativeElement;
    }

    ngOnChanges(changes:SimpleChanges):void {
        this.element.style.backgroundColor = this.colorbg;
    }
}