import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PopupComponent } from './popup/popup.component';
import { LogoSectionComponent } from './logo-section/logo-section.component';
import { LogoThumbnailComponent } from './logo-thumbnail/logo-thumbnail.component';
import { PopupContentComponent } from './popup-content/popup-content.component';
import { PopupContentFormComponent } from './popup-content-form/popup-content-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PopupComponent,
    LogoSectionComponent,
    LogoThumbnailComponent,
    PopupContentComponent,
    PopupContentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
