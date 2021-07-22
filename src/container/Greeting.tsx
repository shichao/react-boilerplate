import { whoAmI } from '@src/services';
import * as React from 'react';

const Greeting = () => {
  const [userName, setUserName] = React.useState<string>();
  const [err, setErr] = React.useState<string>();

  React.useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      setUserName('ok');
      let user = await whoAmI();
      setUserName(user.name);
    } catch (err) {
      setErr(err?.message);
    }
  };

  const showGreeting = () => {
    return !!!err && !!userName;
  };

  return (
    <>
      <OrderItem />
      {showGreeting() && <h1 data-testid="greeting">Greeting, {userName}</h1>}
      {!!err && <h1 data-testid="error">{err}</h1>}
    </>
  );
};

export { Greeting };

const OrderItem = () => {
  return (
    <div className="cell">
      <div className="raw_bg"></div>
      <div className="raw">
        <div className="col">price</div>
        <div className="col">mount</div>
      </div>
    </div>
  );
};
