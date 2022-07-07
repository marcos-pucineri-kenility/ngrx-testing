import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { mergeMap, tap } from "rxjs";
import { loadPeople, loadPeopleSuccess, startLoading, stopLoading } from "../actions/app.actions";
import { AppService } from "../../services/app.service";

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private appService: AppService
  ) {}

  loadPeople$ = createEffect(() => 
    this.actions$.pipe(
      ofType(loadPeople),
      mergeMap(() => {
        this.store.dispatch(startLoading());
        return this.appService.getPeople().pipe(
          mergeMap((people) => [
            loadPeopleSuccess({ people }),
            stopLoading()
          ])
        )
      })
    )
  )
}