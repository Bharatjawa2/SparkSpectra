import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'planner',loadChildren:()=>import('./planner/planner.module').then(m=>m.PlannerModule)}
];
