import { Component, ElementRef, AfterViewInit, ViewChild, Renderer2, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-input-range',
	templateUrl: './input-range.component.html',
  	styleUrls: ['./input-range.component.css']
})
export class InputRangeComponent implements AfterViewInit {

	@ViewChild('myRange') slider!: ElementRef;
	@Output() newRangeValue = new EventEmitter<number>()
	public sliderValue: number = 5;

	constructor(private renderer: Renderer2) {}

	ngAfterViewInit() {
		this.updateSliderBackground();
	}

	public updateSliderBackground() {
		const value = this.sliderValue;
		this.newRangeValue.emit(value);

		console.log('gyerek komponens range value: ' + value);
		const percentage = ((value - +this.slider.nativeElement.min) / (+this.slider.nativeElement.max - +this.slider.nativeElement.min)) * 100;
		this.renderer.setStyle(
			this.slider.nativeElement,
			'background',
			`linear-gradient(to right, #A4FFAF ${percentage}%, #18171F ${percentage}%)`
		);
	}

	public onSliderChange(event: Event) {
		const target = event.target as HTMLInputElement;
		if (target) {
			this.sliderValue = +target.value;
			this.updateSliderBackground();
		}
	}
}

