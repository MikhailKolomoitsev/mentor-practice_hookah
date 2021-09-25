import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  getAllTabacosRequest,
  getAllTabacosSuccess,
  getAllTabacosError,
  createUserRequest,
  createUserSuccess,
  createUserError,
} from './actions';

const tabacos = createReducer([], {
  [getAllTabacosRequest]: (state, action) => {
    return action.payload;
  },
  [getAllTabacosSuccess]: (state, action) => {
    return action.payload;
  },
});

const error = createReducer('', {
  [getAllTabacosError]: (state, action) => {
    return action.payload;
  },
});

const userCreate = createReducer(
  {},
  {
    [createUserRequest]: (state, action) => {
      return action.payload;
    },
    [createUserSuccess]: (state, action) => {
      return action.payload;
    },
  },
);

const errorCreate = createReducer('', {
  [createUserError]: (state, action) => {
    return action.payload;
  },
});

export const userReducer = combineReducers({
  userCreate,
  errorCreate,
});

export const tabacoReducer = combineReducers({
  tabacos,
  error,
});
