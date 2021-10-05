import React, {useState, useEffect} from 'react';
import './App.css';

import dotenv from 'dotenv'
import {IUser} from './interface/IUser'
import {getDataPromise} from './get_data'
import {Card} from './card'

dotenv.config()

function App() {
  const limit = 1;
  const [skip, setSkip] = useState(0);
  const [users, setUsers] = useState<IUser[]>([]);

  const get_more_user = () => {
    getDataPromise((receivedUsers: IUser[]) => {
      setSkip(skip + limit)
      setUsers([...users, ...receivedUsers])
    })(skip, limit)

    }

  useEffect(get_more_user, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      {
        users.map((user: IUser, key: number) => {
          console.log(key)
          return (<Card click={get_more_user} user={user} idx={key.toString()} />)
        })
      }
    </div>
  );
}

export default App;
