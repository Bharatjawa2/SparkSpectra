import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [MatIconModule,SideNavComponent,CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {
  lastMonthWedding=['Mr.Bansal weds Mrs.Bansal: $10500: Hotel Grace(Delhi)', 'Mr.Baweja weds Mrs. Bewaja: $10400: Divine Lawns(Chandigarh)'];
  currentMonthpackage='$10600';

  lastMonthParty=['Rahul: $600: At their residence','Chirag: $800: Farm House'];
  currentMonthParty='$1200';

  ToDoTransaction=[
    {description: 'Pay Hall book'},
    {description: 'Buy groceries'},
    {description: 'Other'}
  ]

  totalCurrentWeddingPackage=10600;
  totalCurrentBirthddayPackage=1200;
  totalPackage=10030;

  constructor(public router: Router){}

  onWedding(){
    this.router.navigate(['./Planner/wedding'])
  }

  onParty(){
    this.router.navigate(['./Planner/party'])
  }

  onTodo(){
    this.router.navigate(['./Planner/Todo'])
  }

}
