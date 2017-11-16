import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home.component";
import { NewCardComponent } from "./components/newcard.component";

export const appRoutes:Routes = [
    { 
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'newcard',
        component: NewCardComponent
    }
];