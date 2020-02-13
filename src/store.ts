import { BehaviorSubject } from 'rxjs';

export interface State {
  isLoggedIn: boolean;
}

export class Store {
  state = new BehaviorSubject<State>({
    isLoggedIn: false
  });

  state$ = this.state.asObservable();

  replaceState(state: State) {
    this.state.next({ ...state });
  }

  setState(k: keyof State, value: State[keyof State]) {
    this.state.next({
      ...this.state.value,
      [k]: value
    });
  }

  dispatch(state: Partial<State>) {
    this.state.next({
      ...this.state.value,
      ...state
    });
  }

  get value() {
    return this.state.value;
  }
}

export const store = new Store();
