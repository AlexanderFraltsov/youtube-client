import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ADMIN_PAGE_FORM_CONTROLS, ADMIN_PAGE_INPUTS } from '../../constants/constants';
import { IState } from 'src/app/redux/state.model';
import { IInput } from '../../models/input.model';
import { AddCard } from '../../../redux/actions/custom.actions';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  public adminForm: FormGroup;
  public adminInputs: IInput[] = ADMIN_PAGE_INPUTS;
  public formControls: {[key: string]: AbstractControl} = ADMIN_PAGE_FORM_CONTROLS;

  constructor(private store: Store<IState>) {}

  public ngOnInit(): void {
    this.adminForm = new FormGroup(this.formControls);
  }

  public submit(): void {
    this.store.dispatch(new AddCard({
      ...this.adminForm.value,
      publishedAt: new Date().toUTCString()
    }));
  }
}
