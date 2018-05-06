import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { <%= module %> } from './<%= title %>/<%= title %>.module';
import { SampleService } from './<%= title %>/sample.service';



@NgModule({
	declarations: [
		AppComponent,
	],
	imports:      [
		BrowserModule,
		FormsModule,
		<%= module %>.forRoot()
	],
	providers:    [SampleService],
	bootstrap:    [AppComponent]
})
export class AppModule {
}

export { AppComponent } from './app.component';
