export const setUserRoutes = (data) => {
  return {
    type: 'SET_USER_ROUTES',
    payload: data,
  };
};

export const setUserStats = (data) => {
  return {
    type: 'SET_USER_STATS',
    payload: data,
  };
};

export const setUserActivities = (data) => {
  return {
    type: 'SET_USER_ACTIVITIES',
    payload: data,
  };
};

export const setUser = (data) => {
  return {
    type: 'SET_USER',
    payload: data,
  };
};
