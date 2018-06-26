import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { RankComponent } from './rank/rank.component';
const routes: Routes = [
    //home
    {
        path: '',
        component: HomeComponent
    },
    //Quiz
    {
        path: 'quiz',
        component: QuizComponent
    },
    //Rank
    {
        path: 'rank',
        component: RankComponent
    }  
];
export const RoutingModule = RouterModule.forRoot(routes);