import { Route, Routes, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import Home from "./page/Home.tsx";
import About from "./page/About.tsx";
import Warp from "./page/Warp.tsx";
import WarpOne from "./page/WarpPage/WarpOne.tsx";
import Teams from "./page/WarpPage/Teams.tsx";
import TeamsId from "./page/WarpPage/TeamsId.tsx";
import TeamsIdEdit from "./page/WarpPage/TeamsIdEdit.tsx";
import TeamsSetting from "./page/WarpPage/TeamsSetting.tsx";
import PageLayout from "./page/PageLayout/index.tsx";
import LayoutContain from "./page/PageLayout/LayoutContain.tsx";
import Counter from "./page/WarpPage/Counter.tsx";

function App() {

  return (
    <>
    <style>
      {
        `a{
          text-decoration: none;
          margin-right: 10px;
          font-size: 18px;

        }`
      }
    </style>
    <Provider store={store}>
      <div className="nav">
        <Link to="/home">Home</Link>
        <Link to="/">首页</Link>
        <Link to="/layoutContain">首页</Link>
        <Link to="/about">关于</Link>
        <Link to="/teams/321?name=ddd&&age=22">teams</Link>
        <Link to="/counter">counter</Link>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/" element={<Warp />}>
          <Route index element={<WarpOne />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<TeamsId />}></Route>
            <Route path=":teamId/edit" element={<TeamsIdEdit />}></Route>
            <Route index element={<TeamsSetting />}></Route>
          </Route>
        </Route>

        <Route element={<PageLayout />}>
          <Route path="/layoutContain" element={<LayoutContain />}></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
      </Routes>
    </Provider>
    </>
  );
}

export default App;
