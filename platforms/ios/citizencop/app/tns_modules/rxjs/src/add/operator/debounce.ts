
import { Observable } from '../../Observable';
import { debounce } from '../../operator/debounce';

Observable.prototype.debounce = debounce;

declare module '../../Observable' {
  interface Observable<T> {
    debounce: typeof debounce;
  }
}