import { Component } from '@angular/core';
import { Localization } from './localization';

@Component({
	selector: 'newparty-popover',
	templateUrl: 'newparty-popover.html',
	providers: [Localization],
})
export class NewpartyPopoverComponent {

	text: string;

	constructor(private msg: Localization) {}
}
