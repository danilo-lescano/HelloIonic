import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    selector: 'number-popover',
    templateUrl: 'number-popover.html'
})
export class NumberPopoverComponent {
	private numbers: number[] = null;

	constructor(private viewCtrl: ViewController) {
		if(this.numbers == null)
			this.numbers = [1, 5, 10, 25, 50, 100];
	}

	numberClicked(number){
		this.viewCtrl.dismiss(number);
	}
}
