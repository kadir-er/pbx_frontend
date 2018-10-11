import { RouterModule, Routes } from '@angular/router';
import {PbxformComponent} from "./pbxform/pbxform.component";
import {CompletePbxformComponent} from "./complete-pbxform/complete-pbxform.component";

const appRoutes : Routes = [
  { path: "form", component: PbxformComponent },
  { path: "completePBX", component: CompletePbxformComponent },
  { path: "**", redirectTo: "/form" }
];

export const routing = RouterModule.forRoot(appRoutes);
