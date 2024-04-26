import Profile from './Profile/Profile';
import userData from '../userData.json';
import friends from '../friends.json';
import FriendList from '../components/FriendList/FriendList';

function App() {
  return (
    <>
      <Profile {...userData} />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
