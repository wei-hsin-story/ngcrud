import { Component, ViewChild, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';

import { User} from '../models/user.model';
import { Response} from '../models/response.model';
import { UserService } from '../services/user.service';

//import { map,catchError } from 'rxjs/operators';// This is where I import map operator

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css','../common/common.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class UserComponent implements OnInit {

  @ViewChild('dt') mydt: any;

  user: User = {
    id :'',
    username : '',
    password : '',
    create_time: new Date()
  }

  users: User[] = [{
    id :'',
    username : '',
    password : '',
    create_time: new Date()
  }];

  act : number = 0 ;
  dataDialog: boolean = false;
  selectedData:any ;
  loading: boolean = false;
  delDialog: boolean = false;

  constructor( private userService: UserService ,private confirmationService: ConfirmationService, private messageService: MessageService) 
  { 
  

  }


  ngOnInit(): void {

    this.getAllUsers();
  }

  
  openNew() {
    this.clearData();
    this.act = 1;
    this.dataDialog = true;
  }

  openUpdate(users: User[]) {
    this.act = 2;
  this.user = users[0]
   this.dataDialog = true;
 }


 openDelete(users: User[]) {

   this.user = users[0];
   this.act = 3;

   this.confirmationService.confirm({
       message: 'Do you want to delete this record?',
       header: 'Delete Confirmation',
       icon: 'pi pi-info-circle',
       accept: () => {
          this.messageService.add({severity:'info', summary: 'Deleted', detail: 'Record deleted', life: 3000});
           this.action();
            this.removeSelection();
       },
       reject: () => {

       }
   });
 }




 getAllUsers() {

   this.users =[] ;

   this.userService.getUsers().subscribe(
    response => {
 
      this.users = response.data as any;
     this.loading = true;
    },
    error => {
      console.log(error);
    });
     
     this.loading = false;
 }



 action(){

   switch(this.act) {
     case 1: {
        this.saveUser();
        break;
     }
     case 2: {
       this.updateUser(this.user);
        break;
     }
     case 3: {
       this.deleteUser(this.user.id);
        break;
     }
     default: {
        console.log("action:" + this.act)
        break;
     }
  }
 }

 saveUser() {
   this.userService.addUser(this.user).subscribe(
     response => {
       this.getAllUsers();
       this.messageService.add({severity:'info', summary: 'Added', detail: 'Added Record', life: 3000});
     },
     error => {
       console.log(error);
     });

     this.hideDialog() ;

 }

 updateUser(user:User) {
   this.userService.updateUser(user).subscribe(
     response => {
       this.getAllUsers();
       this.loading = true;
       this.messageService.add({severity:'info', summary: 'Modified', detail: 'Modified Record', life: 3000});

     },
     error => {
       console.log(error);
     });

     this.loading = false;
     this.hideDialog() ;
 }

 deleteUser(id:any) {

   this.userService.deleteUser(id).subscribe(
     response => {
       this.getAllUsers();
       this.loading = true;
       this.messageService.add({severity:'info', summary: 'Deleted', detail: 'Deleted Record', life: 3000});

     },
     error => {
       console.log(error);
     });

     this.loading = false;

 }

 clearData(){

   this.user = {
     id :'',
     username : '',
     password : '',
     create_time : new Date()
   }

 }


 
 hideDialog() {
  this.delDialog = false;
  this.dataDialog = false;
  this.clearData();
  this.removeSelection();
  this.getAllUsers();

  }

  removeSelection() {
    this.selectedData = null;
  }


  filterTableData(filterKey:any)
  {
    this.mydt.filterGlobal(filterKey.value, 'contains');
  }



}
