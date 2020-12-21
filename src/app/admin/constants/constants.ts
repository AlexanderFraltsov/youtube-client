import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { IInput } from '../models/input.model';

const ADMIN_PAGE_INPUTS: IInput[] = [
  {textContent: 'Title', formControlName: 'title'},
  {textContent: 'Description', formControlName: 'description'},
  {textContent: 'Link to image', formControlName: 'image'},
  {textContent: 'Link to video', formControlName: 'link'},
];

const ADMIN_PAGE_FORM_CONTROLS: {[key: string]: AbstractControl} = ADMIN_PAGE_INPUTS.reduce(
  (acc: {[key: string]: AbstractControl}, curr: IInput) => {
    acc[curr.formControlName] = new FormControl('', [
      Validators.required
    ]);
    return acc;
  },
  {}
);

export {
  ADMIN_PAGE_INPUTS,
  ADMIN_PAGE_FORM_CONTROLS
};
