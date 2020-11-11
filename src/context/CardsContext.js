import { reducer, initialState } from '../utils/reducer';
import createContextData from '../context/createContextData';
 
export const { Context, Provider } = createContextData(reducer, initialState);
