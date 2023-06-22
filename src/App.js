import logo from './logo.svg';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import Modal from './components/LoginForm';

const projectID='f1a1fc9c-2eda-4825-80da-aed1912d8fd7'
function App() {

  if(!localStorage.getItem('username')) return <Modal/>
  return (
    <>
     <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    
    </>
  );
}

export default App;
