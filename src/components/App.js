import '../css/App.css';
import { Routes, Route } from 'react-router';

import Layout from './Layout/Layout';
import Rockets from './Rockets';
import Missions from './Missions';
import MyProfile from './Myprofile';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Rockets />} />
      <Route path="/rockets" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/my-profile" element={<MyProfile />} />
    </Route>
  </Routes>
);

export default App;
