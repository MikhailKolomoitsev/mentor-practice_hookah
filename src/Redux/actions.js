import { createAction } from '@reduxjs/toolkit';

export const getAllTabacosRequest = createAction('getAllTabacosRequest');
export const getAllTabacosSuccess = createAction('getAllTabacosSuccess');
export const getAllTabacosError = createAction('getAllTabacosError');

export const createUserRequest = createAction('createUserRequest');
export const createUserSuccess = createAction('createUserSuccess');
export const createUserError = createAction('createUserError');

export const loginUserRequest = createAction('loginUserRequest');
export const loginUserSuccess = createAction('loginUserSuccess');
export const loginUserError = createAction('loginUserError');

export const logoutUserRequest = createAction('logoutUserRequest');
export const logoutUserSuccess = createAction('logoutUserSuccess');
export const logoutUserError = createAction('logoutUserError');

export const getCurrentUserRequest = createAction('logoutUserRequest');
export const getCurrentUserSuccess = createAction('logoutUserSuccess');
export const getCurrentUserError = createAction('logoutUserError');
