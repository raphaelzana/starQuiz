import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
const routes: Routes = [
    //home
    {
        path: '',
        component: HomeComponent
    },
    //Products
    {
        path: 'quiz',
        component: QuizComponent
    }   
];
export const RoutingModule = RouterModule.forRoot(routes);