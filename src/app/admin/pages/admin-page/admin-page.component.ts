import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  public adminForm: FormGroup;
  constructor() { }

  public ngOnInit(): void {
    this.adminForm = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl('', [
        Validators.required,
      ]),
      image: new FormControl('', [
        Validators.required
      ]),
      link: new FormControl('', [
        Validators.required
      ])
    });
  }

  public submit(): void {
    console.log({...this.adminForm.value, publishedAt: new Date().toUTCString()});
  }
}
