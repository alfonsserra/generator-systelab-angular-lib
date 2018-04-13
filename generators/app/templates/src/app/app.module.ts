import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SystelabPreferencesModule } from './systelab-preferences/systelab-preferences.module';
import { SampleService } from './systelab-preferences/sample.service';



@NgModule({
	declarations: [
		AppComponent,
	],
	imports:      [
		BrowserModule,
		FormsModule,
		SystelabPreferencesModule.forRoot()
	],
	providers:    [SampleService],
	bootstrap:    [AppComponent]
})
export class AppModule {
}

export { AppComponent } from './app.component';
