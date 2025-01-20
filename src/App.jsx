import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import MainSearch from './components/MainSearch';
import CompanySearchResults from './components/CompanySearchResults';
import Favourites from './components/Favourites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/:company" element={<CompanySearchResults />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
