import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Book } from "./model/Book";

@Injectable()

export class BookService{
    private url = 'https://sheet.best/api/sheets/a0a0c8ae-09f3-4c75-b6a2-bdb1c7eeb5aa';

    httpOptions ={
        Headers: new HttpHeaders({'content-type' : 'application/json'})
    }

    constructor (private http: HttpClient){

    }

    getBook(){
        return this.http.get(this.url)
    }
}
