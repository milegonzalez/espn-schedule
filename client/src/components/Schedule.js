/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';

const style = {
  image: {
    border: '1px solid #ccc',
    background: '#fefefe',
  },
};

const Schedule = ({ ramsSchedule }) => (

  <div className="container-fluid">

    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <h4 className="text-white">Collapsed content</h4>
          <span className="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
    </div>

    <h1>Los Angeles Rams Schedule - 2018</h1>

    {/* dropdown button for different years */}
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        2018
      </button>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="http://www.espn.com/nfl/team/schedule/_/name/lar/season/2017">2017</a>
        <a className="dropdown-item" href="http://www.espn.com/nfl/team/schedule/_/name/lar/season/2016">2016</a>
        <a className="dropdown-item" href="http://www.espn.com/nfl/team/schedule/_/name/lar/season/2015">2015</a>
        <a className="dropdown-item" href="http://www.espn.com/nfl/team/schedule/_/name/lar/season/2014">2014</a>
        <a className="dropdown-item" href="http://www.espn.com/nfl/team/schedule/_/name/lar/season/2013">2013</a>
        <a className="dropdown-item" href="http://www.espn.com/nfl/team/schedule/_/name/lar/season/2012">2012</a>
        <a className="dropdown-item" href="http://www.espn.com/nfl/team/schedule/_/name/lar/season/2011">2011</a>
        <a className="dropdown-item" href="http://www.espn.com/nfl/team/schedule/_/name/lar/season/2010">2010</a>
        <a className="dropdown-item" href="http://www.espn.com/nfl/team/schedule/_/name/lar/season/2009">2009</a>
        <a className="dropdown-item" href="http://www.espn.com/nfl/team/schedule/_/name/lar/season/2008">2008</a>
        <a className="dropdown-item" href="http://www.espn.com/nfl/team/schedule/_/name/lar/season/2007">2007</a>
        <a className="dropdown-item" href="http://www.espn.com/nfl/team/schedule/_/name/lar/season/2006">2006</a>
        <a className="dropdown-item" href="http://www.espn.com/nfl/team/schedule/_/name/lar/season/2005">2005</a>
        <a className="dropdown-item" href="http://www.espn.com/nfl/team/schedule/_/name/lar/season/2004">2004</a>
        <a className="dropdown-item" href="http://www.espn.com/nfl/team/schedule/_/name/lar/season/2003">2003</a>
      </div>

      {/* button link for calendar */}
      <a className="btn btn-primary" href="http://espn.calreplyapp.com/nfl/subscription/tags#Los%20Angeles%20Rams" role="button">Add to calendar</a>
    </div>

    <h5>Regular Season</h5>

    <table className="table table-striped">
      <thead>
        <tr>
          {/* //add column headings here */}
          <th scope="col">Week</th>
          <th scope="col">Date</th>
          <th scope="col">Opponent</th>
          <th scope="col">Result</th>
          <th scope="col">W-L</th>
          <th scope="col">HI PASS</th>
          <th scope="col">HI RUSH</th>
          <th scope="col">HI REC</th>
        </tr>
      </thead>

      <tbody>
        {ramsSchedule.map(schedule => (
          <tr key={schedule.id}>
            <td>{schedule.week}</td>
            <td>{schedule.date}</td>
            <td>
              {schedule.vs}
              <img src={`${schedule.opponentlogo}`} className="rounded-circle" width={25} height={25} style={style.image} />
              <a href={`${schedule.link}`}>{schedule.city}</a>
            </td>
            <td>
              {schedule.wl}
              <a href={`${schedule.link}`}>{schedule.result}</a>
            </td>
            <td>{schedule.winloss}</td>
            <td>
              <a href={`${schedule.link}`}>
                {schedule.stats.playerpass}
              </a>
              {schedule.stats.pass}
yards
            </td>
            <td>
              <a href={`${schedule.link}`}>{schedule.stats.playerrush}</a>
              {schedule.stats.rush}
yards
            </td>
            <td>
              <a href={`${schedule.link}`}>{schedule.stats.playerrec}</a>
              {schedule.stats.rec}
yards
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);


export default Schedule;