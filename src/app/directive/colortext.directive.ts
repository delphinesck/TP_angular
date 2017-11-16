import { Directive, Input, ElementRef, OnInit, OnChanges, SimpleChanges } from "@angular/core";

@Directive ({
    selector: "[appColortext]"
})
export class ColortextDirective implements OnInit, OnChanges {

    private element:HTMLElement;

    @Input() colortext:string;

    constructor(el:ElementRef){
        this.element = el.nativeElement;
    }

    ngOnInit():void {
        this.element.style.color = this.colortext;
    }

    ngOnChanges(changes: SimpleChanges):void {
        this.element.style.color = this.colortext;
    }

}