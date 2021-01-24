import {
  TOGGLE_CANCEL_MODAL,
  BACK_TO_HOME,
  TOGGLE_EXPORT_MODAL,
  DATE_CHANGED,
} from '../actions/types';

export const modalActions = (action) => (dispatch) => {
  dispatch({
    type: action ? BACK_TO_HOME : TOGGLE_CANCEL_MODAL,
    payload: {},
  });
};

export const toggleExportModal = () => (dispatch) => {
  dispatch({
    type: TOGGLE_EXPORT_MODAL,
    payload: {},
  });
};

export const exportDateChanged = (date, val) => (dispatch) => {
  dispatch({
    type: DATE_CHANGED,
    payload: { date, val },
  });
};
