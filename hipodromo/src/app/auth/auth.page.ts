import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  @ViewChild('form') form: NgForm;

  submissionType: 'login' | 'join' = 'login';

  constructor() { }

  ngOnInit() {}

  onSubmit() {
    const {name,password} = this.form.value
    if (!name || !password) return;
    if(this.submissionType === 'login'){
        console.log(1, 'manejo login', name,password);
    } else if (this.submissionType==='join'){
      const {email} = this.form.value;
      if (!email) return;
      console.log(2, 'manejo join', email,name,password);
    }
  }
  toggleText() {
    if (this.submissionType === 'login'){
      this.submissionType = 'join'; 
    } else if (this.submissionType === 'join'){
      this.submissionType = 'login';
    }
  }
}
