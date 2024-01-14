import {combineReducers} from 'redux';

const setUserReducer = (tokens = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    default:
      return tokens;
  }
};

const setUserStatsReducer = (user = null, action) => {
  if (action.type === 'SET_USER_STATS') {
    return action.payload;
  }
  return user;
};

const setUserActivitiesReducer = (user = null, action) => {
  if (action.type === 'SET_USER_ACTIVITIES') {
    return action.payload;
  }
  return user;
};

const setUserRoutesReducer = (user = null, action) => {
  if (action.type === 'SET_USER_ROUTES') {
    return action.payload;
  }
  return user;
};

export default combineReducers({
  returnTokens: setUserReducer,
  userStats: setUserStatsReducer,
  userActivities: setUserActivitiesReducer,
  routes: setUserRoutesReducer,
});
