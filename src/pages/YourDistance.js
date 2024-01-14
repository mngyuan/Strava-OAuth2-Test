import React from 'react';
import {connect} from 'react-redux';

const ActivitiesChart = ({data}) => {
  return (
    <svg
      width={928}
      height={200}
      viewBox="0,0,928,200"
      style={{maxWidth: '100%', height: 'auto'}}
    >
      {data.map((d) => (
        <circle
          cx={
            ((new Date(d.start_date).getTime() / 1000 - 1434841505) /
              (60 * 60 * 24)) *
            5
          }
          cy={d.distance / 100}
          r={d.total_elevation_gain / 20}
          fill="#001b42"
        />
      ))}
    </svg>
  );
};

const YourDistance = ({userStats, returnTokens, routes, userActivities}) => {
  console.log(userStats, routes, userActivities);
  return (
    <div>
      <h1>Hi, {returnTokens.athlete.firstname}!</h1>
      <h2>all_run_totals.distance: {userStats.data.all_run_totals.distance}</h2>
      <h2>
        all_ride_totals.distance: {userStats.data.all_ride_totals.distance}
      </h2>
      <h2>
        all_swim_totals.distance: {userStats.data.all_swim_totals.distance}
      </h2>
      <ActivitiesChart data={userActivities.data} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userStats: state.userStats,
    returnTokens: state.returnTokens,
    routes: state.routes,
    userActivities: state.userActivities,
  };
};

export default connect(mapStateToProps)(YourDistance);
