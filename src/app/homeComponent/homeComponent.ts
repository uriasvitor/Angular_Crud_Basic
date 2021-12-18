import { Component, EventEmitter, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Game } from "../game.model";
import { gameService } from "../game.service";


@Component({
    selector: "app-home",
    templateUrl:"./homeComponent.html",
    styleUrls:["./homeComponent.css"],
    providers:[gameService]

})

export class homeComponent implements OnInit{
    game:Game = {
        id:1,
        title:'',
        plataforms:'',
        tags:"",
        price:1,
        age:''
    }

    public profileForm:FormGroup = new FormGroup({
        title: new FormControl('' ,Validators.required),
        plataforms: new FormControl(''),
        tags: new FormControl(''),
        price: new FormControl(''),
        age: new FormControl(''),
    })

    public games: Game[] = [];
    
    constructor(private gameServie:gameService){}

    ngOnInit(): void {
        console.log(FormGroup)
        this.reciveAll()
    }

    public sucessoStatus:boolean = true;

    public reciveAll(){
        this.gameServie.getAll().subscribe(data => {
            this.games = data;
            console.log(data)
        },erro =>{
            console.log(erro)
        })
    }

    public adicionar(){
        const data = {
            title: this.profileForm.value.title,
            plataforms: this.profileForm.value.plataforms,
            tags: this.profileForm.value.tags,
            price: this.profileForm.value.price,
            age: this.profileForm.value.age
        };
        this.gameServie.add(data).subscribe(response =>{
            console.log(response);
            console.log(data);
        },
        error =>{
            console.log(error)
        });
        this.sucessoStatus = false;
    }

    onSubmit(){
        console.log(this.profileForm)
        this.adicionar()
    }
}