import { useState } from 'react'

import './App.css'
import AuthPage from "./AuthPage";
import ChatsPage from ".ChatsPage";

function App() {
  const [User, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />
  } else {
    return <ChatsPage user={user} />
  }
}