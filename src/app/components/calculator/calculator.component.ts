import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  n1: number;
  n2: number;
  res: number;
  calculatorForm: FormGroup;
  title: string = 'Calculator';

  tupla: [number, string, boolean] = [1, '2', true];

  constructor(private formBuilder: FormBuilder) {
    this.calculatorForm = formBuilder.group({
      n1: ['', Validators.required],
      n2: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.mayor(5);
  }

  calculate() {
    this.res = eval(`${this.n1}+${this.n2}`);
  }

  onSubmit() {
    console.log('Test');

    console.log(this.calculatorForm.value.n1);

    this.res = +this.calculatorForm.value.n1 + +this.calculatorForm.value.n2;
  }

  mayor(n: number): boolean {
    console.log(n >= 1 && n <= 10 && n % 2 != 0);

    return n >= 1 && n <= 10 && n % 2 != 0;
  }
}
