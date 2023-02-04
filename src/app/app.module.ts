import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {ToastModule} from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CheckboxModule} from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {KeyFilterModule} from 'primeng/keyfilter';
import {StepsModule} from 'primeng/steps';
import { TooltipModule } from 'primeng/tooltip';
import {ScrollTopModule} from 'primeng/scrolltop';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import { PanelModule } from 'primeng/panel';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,    
    ToastModule,
    ConfirmDialogModule,
    DialogModule,
    DynamicDialogModule,
    ProgressSpinnerModule,
    FormsModule,
    CheckboxModule,
    TableModule,
    ToolbarModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    RadioButtonModule,
    InputTextareaModule,
    KeyFilterModule,
    CalendarModule,
    StepsModule,
    TooltipModule,
    ScrollTopModule,
    MultiSelectModule,
    ContextMenuModule,
    DividerModule,
    CardModule,
    PanelModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
