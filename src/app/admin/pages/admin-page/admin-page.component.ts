import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { IState } from 'src/app/redux/state.model';
import { AddCard } from '../../../redux/actions/custom.actions';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  public adminForm: FormGroup;
  constructor(private store: Store<IState>) { }

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
    this.store.dispatch(new AddCard({
      ...this.adminForm.value,
      publishedAt: new Date().toUTCString()
    }));
  }
}
