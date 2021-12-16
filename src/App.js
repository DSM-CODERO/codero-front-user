import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListPage from './components/pages/listpage/ListPage';
import Login from './components/pages/auth/login';
import SignUp from './components/pages/auth/signUp/index';
import MyPage from './components/pages/myPage/index';
import MainPage from './components/pages/mainpage/Mainpage';
import WritePost from './components/pages/writePost/makePost/WritePost';
import PatchPost from './components/pages/writePost/putchPost/PatchPost';
import Footer from './components/common/footer';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<MyPage />} path="/MYPAGE" />
        <Route element={<WritePost />} path="/writepost" />
        <Route element={<PatchPost />} path="/patchpost" />
        <Route element={<ListPage />} path="/list/:listname" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
