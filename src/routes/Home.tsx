import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Utils from '../utils';

const isValidDate = (d: Date) => {
  return d instanceof Date && !isNaN(d.getTime());
};

const useQuery = (): HomeQueries => {
  let params = new URLSearchParams(useLocation().search);
  let userName = params.get('userName') || '';
  let start = new Date(params.get('start'));

  return new HomeQueries(
    userName,
    Utils.isValidDate(start) ? start : new Date()
  );
};

const Home = () => {
  let { userName, start } = useQuery();
  return (
    <div>
      <h3>
        Home, userName: {userName}, date: {start.toString()}
      </h3>
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
}
