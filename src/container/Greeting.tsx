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

  return <>{showGreeting() && <h1>Greeting, {userName}</h1>}</>;
};

export { Greeting };
