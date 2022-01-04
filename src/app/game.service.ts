import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Game } from "./game.model";

const apiUrl = "http://localhost:3000/games"

@Injectable({
    providedIn: 'root'
})

export class GameService{
    constructor(private http:HttpClient){}
    
    public getAll():Observable<Game[]>{
        return this.http.get<Game[]>(apiUrl);
    }

    public add(data:any):Observable<any>{
        return this.http.post(apiUrl,data);
    }
    public update(id:any,data:any):Observable<any>{
        return this.http.put(`${apiUrl}/${id}`,data);
    }

    public delete(id:any):Observable<any>{
        return this.http.delete(`${apiUrl}/${id}`);
    }
}