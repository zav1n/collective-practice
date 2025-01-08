import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Warp />}>
        <Route index element={<WarpOne />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<TeamsId />}></Route>
          <Route path=":teamId/edit" element={<TeamsIdEdit />}></Route>
          <Route index element={<TeamsSetting />}></Route>
        </Route>
      </Route>
      <Route path="/" element={<Home />}></Route>

      <Route element={<PageLayout />}>
        <Route path="/layoutContain" element={<LayoutContain />}></Route>
      </Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
}

export default App;
