import { Injectable } from '@angular/core';
import {Store, store} from "./storage";
import {Note} from "./note";

@Injectable({
  providedIn: 'root'
})

export class NotationService {

  constructor() { }

  private store:Store = store;

  set activeNote(note:Note[]){
      this.store.activeNote.push(...note)
  }
  get activeNote():Note[]{
    return this.store.activeNote;
  }

  set archiveNote(note:Note[]){
        this.store.archiveNote.push(...note)
  }
  get archiveNote():Note[]{
    return this.store.archiveNote;
  }

  get category():string[]{
    return this.store.categories;
  }

  get getNewId(){
    return ++this.store.lastId;
  }

  editeNote(note:Note):void{

  }

  static emptyNote():Note{
      return {
          name: '',
          content: '',
          category: '',
          id: 0,
          createDate: '',
          isEdit: true,
      };
  }
}

export const emptyNote = NotationService.emptyNote;