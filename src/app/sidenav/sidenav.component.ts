import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  show = false;

  //public sessions:any=["Sign in","sign-up",404,500];
  
  public data:any="";
  
  
  
    openPopup(){
      this.show = true;
      
    }
    closepopup(){
      this.show = false;
    }
  
   
  
    onAddData(data:any){
      console.log(data.value);
    }
}
