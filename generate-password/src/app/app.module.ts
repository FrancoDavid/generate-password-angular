import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main.component';
import { PasswordViewerComponent } from "./components/password-viewer/password-viewer.component";
import { ParamsFormComponent } from "./components/params-form/params-form.component";

@NgModule({
    declarations: [
        AppComponent,
        MainComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        PasswordViewerComponent,
        ParamsFormComponent
    ]
})
export class AppModule { }
