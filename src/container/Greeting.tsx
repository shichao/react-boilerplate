import { whoAmI } from '@src/services';
import * as React from 'react';
import { OrderItem } from './OrderItem';

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
      <div className="orderBoard">
        <OrderItem order={{ price: 11.0, size: 1000 }} />
        <OrderItem order={{ price: 12.0, size: 1000 }} />
      </div>
      {/* {showGreeting() && <h1 data-testid="greeting">Greeting, {userName}</h1>}
      {!!err && <h1 data-testid="error">{err}</h1>} */}
    </>
  );
};

export { Greeting };
