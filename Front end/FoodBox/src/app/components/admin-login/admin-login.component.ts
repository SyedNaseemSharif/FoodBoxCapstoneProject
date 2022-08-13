import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
adminLoginGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.adminLoginGroup=this.formBuilder.group({
Login:this.formBuilder.group({
  userName:[''],
  password:['']
})

    });
  }

  onPost(){
    console.log("Handling the Submit Button");
    console.log(this.adminLoginGroup.get('Login').value);
  }
  }

