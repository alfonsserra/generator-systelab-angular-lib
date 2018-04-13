import { NgModule, Type, ModuleWithProviders } from '@angular/core';
import { SampleService } from './sample.service';

@NgModule({})
export class SystelabPreferencesModule {
	public static forRoot(entryComponents?: Array<Type<any> | any[]>): ModuleWithProviders {
		return {
			ngModule:  SystelabPreferencesModule,
			providers: [
				{provide: SampleService, useClass: SampleService}
				]
		};
	}
}
