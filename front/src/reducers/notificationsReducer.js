import { NotificationManager } from 'react-notifications';

const initialState = '';

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NOTIF_SUCCESS':
      NotificationManager.success(action.message, '', 2000);
      return null;
    case 'NOTIF_ERROR':
      NotificationManager.error(action.message, '', 2000);
      return null;
    default:
      return state;
  }
};

export default notificationsReducer;