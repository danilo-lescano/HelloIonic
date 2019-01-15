import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    selector: 'number-popover',
    templateUrl: 'number-popover.html'
})
export class NumberPopoverComponent {
	private numbers: number[] = [1, 5, 10, 25, 50, 100];

	constructor(private viewCtrl: ViewController) {}

	numberClicked(number){
		this.viewCtrl.dismiss(number);
	}
}
