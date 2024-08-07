/*
 * This file is part of OrangeHRM
 *
 * Copyright (C) 2020 onwards OrangeHRM (https://www.orangehrm.com/)
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

import {put, select} from 'redux-saga/effects';
import {setItem, setMulti, changeLoaded} from 'store/storage/actions';
import {
  selectInstanceUrl as instanceUrlSelector,
  selectAuthParams as authParamSelector,
} from 'store/storage/selectors';

export const storageSetItem = (...args: Parameters<typeof setItem>) => {
  return put(setItem(...args));
};

export const storageSetMulti = (...args: Parameters<typeof setMulti>) => {
  return put(setMulti(...args));
};

export const storageChangeLoaded = (
  ...args: Parameters<typeof changeLoaded>
) => {
  return put(changeLoaded(...args));
};

export const selectInstanceUrl = () => {
  return select(instanceUrlSelector);
};

export const selectAuthParams = () => {
  return select(authParamSelector);
};
