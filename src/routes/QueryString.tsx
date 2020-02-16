import * as React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Utils from '../utils';

const QueryString = () => {
  let homeQueries = QueryStringQueries.parseHomeQueries(useLocation().search);

  return (
    <div>
      <h3>QueryString example:</h3>
      <div>
        UserName: {homeQueries.userName}, date: {homeQueries.start.toString()}
      </div>
    </div>
  );
};

export default QueryString;

export class QueryStringQueries {
  public userName: string;
  public start: Date;
  public end: Date;

  constructor(userName, start, end) {
    this.userName = userName;
    this.start = start;
    this.end = end;
  }

  public static parseHomeQueries = (
    queryString: string
  ): QueryStringQueries => {
    let params = new URLSearchParams(queryString);

    let userName = params.get('userName') || '';
    let now = new Date();
    let start = new Date(params.get('start'));
    let end = new Date(params.get('end'));

    return new QueryStringQueries(
      userName,
      Utils.isValidDate(start)
        ? start
        : new Date(now).setDate(now.getDate() - 1),
      Utils.isValidDate(end) ? end : new Date(now)
    );
  };
}
