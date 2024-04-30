import { FormfieldBase } from './formfield-base';

export class DatepickerBase extends FormfieldBase {

  controlType = 'datepicker';
  minDate: Date;
  maxDate: Date;

  constructor(options: {} = {}) {
    super(options);
    this.minDate = options['minDate'] || new Date(1950, 0, 1);
    this.maxDate = options['maxDate'] || new Date();
  }

}
