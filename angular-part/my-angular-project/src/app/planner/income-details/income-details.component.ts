import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormBuilder, ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-income-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './income-details.component.html',
  styleUrl: './income-details.component.css'
})
export class IncomeDetailsComponent {
  incomeForm:any;
  selectedMonth:any;
  janIncomes: any[]=[
    {source:'Salary',amount:5000,investments:'401(k)'},
    {source:'Freelancing',amount:1000,investments:'stocks'},
  ];
  febIncomes: any[]=[
    {source:'Salary',amount:5500,investments:'401(k)'},
    {source:'Rental Income',amount:700,investments:'Real Estate'},
  ];
  marchIncomes: any[]=[
    {source:'Salary',amount:5200,investments:'401(k)'},
    {source:'Freelancing',amount:1200,investments:'stocks'},
    {source:'Rental Income',amount:600,investments:'Real Estate'},
  ];
  router: any;
  constructor(public fb:FormBuilder){
    const currentDate=new Date();
    this.selectedMonth=currentDate.toLocaleString('default',{month:'long'});
  }

  monthSelected:boolean=false;

  ngOnInit():void{
    this.incomeForm=this.fb.group({
      month:['',Validators.required],
      source:['',Validators.required],
      amount:['',Validators.required],
      investments:['',Validators.required]
    });
  }

  onChange(event:any){
    this.selectedMonth=event.target.value
    this.monthSelected=true;
    this.getFilteredIncomes();
  }
  calculateTotalIncome(month:String):number{
    let totalIncome=0;
    for(const income of this.getFilteredForMonths(month)){
      totalIncome+=income.amount;
    }
    return totalIncome;
  }

  getFilteredForMonths(month:String):any[]{
    switch(month){
      case 'January':
        return this.janIncomes;
    case'February':
      return this.febIncomes;
    case 'March':
      return this.marchIncomes;
    default:
      return [];
    }
  }
  getFilteredIncomes(){
    let FilteredIncomes: any=[];
    switch(this.selectedMonth){
      case 'January':
        FilteredIncomes=[...this.janIncomes];
        break;
      case 'February':
        FilteredIncomes=[...this.febIncomes];
        break;
      case 'March':
        FilteredIncomes=[...this.marchIncomes];
        break;
      default:
        break;
    }
    return FilteredIncomes;
  }

  onSubmit(){
    if(this.incomeForm.valid){
      const newIncome=this.incomeForm.value;
      switch(this.selectedMonth){
        case 'January':
          this.janIncomes.push(newIncome);
          break;
        case 'February':
          this.febIncomes.push(newIncome);
          break;
        case 'March':
          this.marchIncomes.push(newIncome);
          break;
        default:
          break;
      }
      this.incomeForm.reset();
      this.incomeForm.patchValue({month:'',source:'',amount:'',investments:''})
    };
  }
  saveForm(){
    console.log("Form Saved");
  }
  onBack(){
    this.router.navigate(['/planner/dashboard'])
  }
}
