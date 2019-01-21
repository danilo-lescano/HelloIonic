import { NgModule } from '@angular/core';
import { NumberPopoverComponent } from './number-popover/number-popover';
import { NewpartyPopoverComponent } from './newparty-popover/newparty-popover';
@NgModule({
	declarations: [NumberPopoverComponent,
    NewpartyPopoverComponent],
	imports: [],
	exports: [NumberPopoverComponent,
    NewpartyPopoverComponent]
})
export class ComponentsModule {}
