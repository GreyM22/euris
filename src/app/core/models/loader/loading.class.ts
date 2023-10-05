import {BehaviorSubject, map, Observable} from "rxjs";
import {Map} from "immutable";

export class LoadingClass {

  constructor() { }

  private readonly loading$$ = new BehaviorSubject<Map<string, boolean>>(Map<string, boolean>());

  startLoading(key: string = ''): void {
    this.loading$$.next(
      this.loading$$.value.set(key, true)
    );
  }

  endLoading(key: string = ''): void {
    this.loading$$.next(
      this.loading$$.value.set(key, false)
    );
  }

  loading$(key: string = ''): Observable<boolean> {
    return this.loading$$.pipe(
      map(loading => loading.get(key) || false)
    )
  }

}
