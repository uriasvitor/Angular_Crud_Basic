import { Component, OnInit } from "@angular/core";
import { Form, FormControl, FormGroup, Validators } from "@angular/forms";
import { AddComponent } from "../addComponent/add/add.component";
import { Game } from "../game.model";
import { GameService } from "../game.service";


@Component({
    selector:'app-list',
    templateUrl: "./listComponent.html",
    styleUrls:["./listComponent.css"],
    providers:[GameService,AddComponent]
})
export class ListComponent implements OnInit{
    public showModal:boolean = true;
    list: Game[]|undefined
    currentList?:Game;
    currentIndex = -1;

    constructor(private gameservice:GameService){}
    
    ngOnInit(): void {
        this.getAll()
        console.log(this.currentIndex)
        console.log(this.currentList)
        
    }

    public getAll(){
        this.gameservice.getAll().subscribe(data =>{
            this.list = data;
            console.log(data)
        })
    }

    public setActive(list1:Game, index:number){
        this.currentList = list1;
        this.currentIndex = index;
        console.log(this.currentList)
        console.log(this.currentIndex)
    }
    public removeItem(){
        this.gameservice.delete(this.currentList?.id).subscribe(data =>{
        console.log(data)
        },
            error =>{
                console.log(error)
            })
    }
    public data(){}
    public activeModal(list2:Game, index1:number){
        this.currentList = list2;
        this.currentIndex = index1;
        console.log(this.currentIndex)
        this.showModal = false;
        console.log(this.showModal)
    }

    
}