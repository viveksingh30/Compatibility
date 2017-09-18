import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { CompatibilityCompareComponent } from './compatibility.compare/compatibility.compare.component';
import {CompatibilityMatrixComponent} from './compatibility.matrix/compatibility.matrix.component';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: CompatibilityCompareComponent
      },
      {
        path: 'comparematrix',
        component: CompatibilityCompareComponent
      },
      {
        path: 'getmatrix',
        component: CompatibilityMatrixComponent
      }
    ]
  }
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
