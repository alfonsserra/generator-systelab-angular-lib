import { NgModule, Type, ModuleWithProviders } from '@angular/core';
import { SampleService } from './sample.service';

@NgModule({})
export class <%= module %> {
	public static forRoot(entryComponents?: Array<Type<any> | any[]>): ModuleWithProviders {
		return {
			ngModule:  <%= module %>,
			providers: [
				{provide: SampleService, useClass: SampleService}
				]
		};
	}
}
