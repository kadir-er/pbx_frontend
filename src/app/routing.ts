import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
  { path: "", component: PBXFormComponent },
  { path: "completePBX", component: completePBX },
  { path: "**", redirectTo: "" }
];

export const routing = RouterModule.forRoot(appRoutes);
