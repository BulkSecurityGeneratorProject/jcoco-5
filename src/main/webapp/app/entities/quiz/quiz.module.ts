import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jcoco5SharedModule } from 'app/shared';
import {
    QuizComponent,
    QuizDetailComponent,
    QuizUpdateComponent,
    QuizDeletePopupComponent,
    QuizDeleteDialogComponent,
    quizRoute,
    quizPopupRoute
} from './';

const ENTITY_STATES = [...quizRoute, ...quizPopupRoute];

@NgModule({
    imports: [Jcoco5SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [QuizComponent, QuizDetailComponent, QuizUpdateComponent, QuizDeleteDialogComponent, QuizDeletePopupComponent],
    entryComponents: [QuizComponent, QuizUpdateComponent, QuizDeleteDialogComponent, QuizDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jcoco5QuizModule {}
