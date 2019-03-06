/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const style = {
  image: {
    border: '1px solid #ccc',
    background: '#fefefe',
  },
};

const SidebarSchedule = ({ ramsSchedule, handleClick }) => (
  <div className="col-sm">
    <p className="h5 text-dark font-weight-bold">REGULAR SEASON</p>
    <table className="table table-striped table-hover">
      <thead>
        <tr className="clickable-row" href="http://www.espn.com/nfl/team/schedule/_/name/lar">
          <th scope="col" />
          <th scope="col" />
          <th scope="col" />
          <th scope="col" />
        </tr>
      </thead>

      <tbody>


        {ramsSchedule.map(schedule => (

          <tr key={schedule.id} className="clickable-row" href="http://www.espn.com/nfl/team/schedule/_/name/lar">
            <td>
              <a href="http://www.espn.com/nfl/team/schedule/_/name/lar">
                <img src={`${schedule.opponentlogo}`} className="rounded-circle" width={20} height={20} style={style.image} />
              </a>
              <a className="text-dark" href="http://www.espn.com/nfl/team/schedule/_/name/lar">
                {schedule.vs}
              </a>
            </td>
            <td>
              <a className="text-dark" href="http://www.espn.com/nfl/team/schedule/_/name/lar">
                {schedule.opponent}
              </a>
            </td>
            <td>
              <a className="text-dark" href="http://www.espn.com/nfl/team/schedule/_/name/lar">
                {schedule.wl}
              </a>
            </td>
            <td>
              <a className="text-dark" href="http://www.espn.com/nfl/team/schedule/_/name/lar">
                <p>{schedule.result}</p>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <button type="button" className="btn btn-link btn-lg" onClick={handleClick}>Full Schedule</button>
  </div>
);

export default SidebarSchedule;