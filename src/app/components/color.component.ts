import { Component, Output, EventEmitter } from "@angular/core";
import { Color } from "../class/Color";

@Component({
    selector: 'app-color',
    template: `
    <input type="range" min=0 max=255 [(ngModel)]="color.red" (ngModelChange)="setColorParent()">
    <input type="range" min=0 max=255 [(ngModel)]="color.green" (ngModelChange)="setColorParent()">
    <input type="range" min=0 max=255 [(ngModel)]="color.blue" (ngModelChange)="setColorParent()">
    `
})
export class ColorComponent {
    public color:Color = new Color();

    @Output() event:EventEmitter<Color> = new EventEmitter();

    setColorParent() {
        this.event.emit(this.color);
    }
}