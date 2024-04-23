import { Component } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  isSlideOut=true;
  constructor(private router: Router){}

  toggleSlideOut(): void{
    this.isSlideOut=!this.isSlideOut;
  }
  onDash(){
    this.router.navigate(['/planner/Dashboard']);
  }
  onProfile(){
    this.router.navigate(['/planner/Profile']);
  }
  onHistory(){
    this.router.navigate(['/planner/History']);
  }
  onLogout(){
    this.router.navigate(['/planner/Logout']);
  }
}
