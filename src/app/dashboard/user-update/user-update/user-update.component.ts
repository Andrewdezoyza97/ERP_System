import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { user } from '../../model/usermodel';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  public userid!: number;
  public userdata: user = {} as user;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private route : Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.userid = param['id']
    })
    this.api.gettingdata(this.userid).subscribe((data: user) => {
      this.userdata = data;
      console.log(data)
    })
  }

  updateuser(){
    this.api.updateuser(this.userdata, this.userid).subscribe((response:user)=>{
      alert("User Updated Successdully")
      this.route.navigate(['/app-user-list'])
    })
  }
}
