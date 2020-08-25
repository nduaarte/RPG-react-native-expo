import { UPDATE_POWER } from './acstionsTypes';

export const attributes = (value: any) => ({
  type: UPDATE_POWER,
  power: value
});