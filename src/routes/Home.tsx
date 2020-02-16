import * as React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Utils from '../utils';

const Home = () => {
  let homeQueries = HomeQueries.parseHomeQueries(useLocation().search);
  const history = useHistory();

  const redirect = () => {
    history.push('/about');
  };
  return (
    <div>
      <h3>
        Home, userName: {homeQueries.userName}, date:{' '}
        {homeQueries.start.toString()}
      </h3>
      <button onClick={redirect}>Redirect</button>
    </div>
  );
};

export default Home;

export class HomeQueries {
  public userName: string;
  public start: Date;

  constructor(userName, start) {
    this.userName = userName;
    this.start = start;
  }

  public static parseHomeQueries = (queryString: string): HomeQueries => {
    let params = new URLSearchParams(queryString);

    let userName = params.get('userName') || '';
    let start = new Date(params.get('start'));

    return new HomeQueries(
      userName,
      Utils.isValidDate(start) ? start : new Date()
    );
  };
}
