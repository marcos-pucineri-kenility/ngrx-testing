import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadPeople, startLoading } from './store/actions/app.actions';
import { IAppStateWrapper } from './store/reducers/app.reducer';
import { AppService } from './store/services/app.service';
import { People } from './store/models/people.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-testing';
  
  people$: Observable<People[]> = this.store.select(
    (state) => state.app.people
  );
  
  isLoading$: Observable<boolean> = this.store.select(
    (state) => state.app.isLoading
  );

  constructor(
    private store: Store<IAppStateWrapper>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadPeople());
  }
  

}
