import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';


export const initialState: filtrosValidos = 'todos';

export const filtroReducer = createReducer<filtrosValidos>(initialState,
  on( setFiltro , (state, { filtro }) => filtro ),
);