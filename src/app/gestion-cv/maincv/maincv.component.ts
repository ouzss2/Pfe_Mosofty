import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-maincv',
  templateUrl: './maincv.component.html',
  styleUrls: ['./maincv.component.scss']
})
export class MaincvComponent implements OnInit {

  items = [
    {
      name: 'form1',
      email: 'email1',
      form: new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email])
      })
    },
    {
      name: 'form2',
      email: 'email2',
      form: new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email])
      })
    },
    {
      name: 'form3',
      email: 'email3',
      form: new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email])
      })
    }
  ];



  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

  }


  onSubmit(item: any) {
    if (item.form.valid) {
      // Form is valid, perform the submission logic here
    }
  }

  resetForm(item: any) {
    item.form.reset();
  }
}