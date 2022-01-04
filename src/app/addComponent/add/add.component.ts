import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Game } from 'src/app/game.model';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

@Injectable()
export class AddComponent implements OnInit {

    game:Game = {
      id:1,
      title:'',
      plataforms:'',
      tags:"",
      price:1,
      age:''
  }
  
  public profileForm:FormGroup = new FormGroup({
      title: new FormControl('' ,[Validators.required,Validators.minLength(2),Validators.maxLength(120)]),
      plataforms: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(120)]),
      tags: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(120)]),
      price: new FormControl('',[Validators.required, Validators.minLength(1), Validators.maxLength(1000)]),
      age: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(6)]),
  })
  
  public games: Game[] = [];
  
  constructor(private gameServie:GameService){}
  
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
          this.newList(response);
      },
      error =>{
          console.log(error)
      });
      this.sucessoStatus = false;
  }

  @Input()
  public newList(data:any){
      console.log(data);
    return data
  }

  onSubmit(){
      console.log(this.profileForm)
      this.adicionar()
  }
}
