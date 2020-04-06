import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
 
export const initialState = 0;
 
const _counterReducer = createReducer(initialState,
  on(increment, state => state + 2),
  on(decrement, state => state - 2),
  on(reset, state => state * 0),
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}