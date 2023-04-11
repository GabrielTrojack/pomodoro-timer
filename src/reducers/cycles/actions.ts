import { Cycle } from './reducer'

export enum ActionType {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  STOP_CURRENT_CYCLE = 'STOP_CURRENT_CYCLE',
  SET_CURRENT_CYCLE_AS_FINISHED = 'SET_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionType.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function stopCurrentCycleAction() {
  return {
    type: ActionType.STOP_CURRENT_CYCLE,
  }
}

export function setCurrentCycleAsFinishedAction() {
  return {
    type: ActionType.SET_CURRENT_CYCLE_AS_FINISHED,
  }
}
