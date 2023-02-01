
import { Route, Routes } from 'react-router-dom'
import GlobalStyle from './utils/style/GlobalStyle'
import Home from './pages/Home/Home'
import CreateEmployee from './pages/CreateEmployee/CreateEmployee'
import EmployeeList from './pages/EmployeeList/EmployeeList'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// import Error from './pages/Error/Error'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<CreateEmployee />} />
        <Route path="/list" element={<EmployeeList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
