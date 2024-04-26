import Profile from './Profile/Profile';
import userData from '../assets/userData.json';

function App() {
  return (
    <>
      <Profile {...userData} />
    </>
  );
}

export default App;
