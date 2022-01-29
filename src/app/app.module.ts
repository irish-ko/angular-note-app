import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { NoteActiveComponent } from './note-active/note-active.component';
import {NoteArchiveComponent} from "./note-archive/note-archive.component";
import { FormCreateNoteComponent } from './form-create-note/form-create-note.component';
import { EditFormComponent } from './edit-form/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteActiveComponent,
    NoteArchiveComponent,
    FormCreateNoteComponent,
    EditFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
