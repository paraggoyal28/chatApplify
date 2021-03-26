import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    if (!localStorage.getItem('username'))
        return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="504e7769-0622-43a6-9e22-db5982835f27"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;