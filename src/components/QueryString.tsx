import * as React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Utils from '../utils';

const QueryString = () => {
  let homeQueries = QueryStringQueries.parseHomeQueries(useLocation().search);

  return (
    <div>
      <h3>QueryString example:</h3>
      <div>
        <p>UserName: {homeQueries.userName}</p>
        <p>start date: {homeQueries.start.toString()}</p>
        <p>end date: {homeQueries.end.toString()}</p>
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
    //1. userName
    let userName = params.get('userName') || '';

    //2. start
    let now = new Date();
    let start = Utils.convertToDate(
      params.get('start'),
      new Date(new Date(now).setDate(now.getDate() - 1))
    );

    //3. end
    let end = Utils.convertToDate(params.get('end'), new Date(now));

    return new QueryStringQueries(userName, start, end);
  };
}
