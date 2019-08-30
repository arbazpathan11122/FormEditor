import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DndModule } from 'ngx-drag-drop';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './share/login/login.component';
import { NavComponent } from './share/nav/nav.component';
import { FooterComponent } from './share/footer/footer.component';
import { SidebarComponent } from './share/sidebar/sidebar.component';
import { FormViewComponent } from './pages/form-view/form-view.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { ProcessComponent } from './pages/process/process.component';
import { PublishComponent } from './pages/publish/publish.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    FormViewComponent,
    DashbordComponent,
    ProcessComponent,
    PublishComponent,
  ],
  imports: [
    BrowserModule,
    NgMultiSelectDropDownModule.forRoot(),
    SweetAlert2Module.forRoot(),
    FormsModule,
    AppRoutingModule,
    DndModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
