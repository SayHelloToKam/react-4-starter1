import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import CityCard from './components/CityCard'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import CityDetails from './pages/CityDetails'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

const user = {
  firstName:"Kamil",
  imageUrl:"https://picsum.photos/200/300"
}

const cities = [
  {
    _id: 1,
  cityName:"Portland",
  population:"3M",
  imageUrl:"https://images.unsplash.com/photo-1582203410996-f2af25fb9776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie mollis fringilla. Maecenas vitae urna vestibulum, molestie neque et, faucibus."
  },

  {
    _id: 2,
  cityName:"Detroit",
  population:"900K",
  imageUrl:"https://images.unsplash.com/photo-1657295776486-f86a5d602879?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie mollis fringilla. Maecenas vitae urna vestibulum, molestie neque et, faucibus."
  },

  {
    _id: 3,
  cityName:"Austin",
  population:"1M",
  imageUrl:"https://images.unsplash.com/photo-1520950237264-dfe336995c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie mollis fringilla. Maecenas vitae urna vestibulum, molestie neque et, faucibus."
  },

  {
    _id: 4,
  cityName:"Omaha",
  population:"500K",
  imageUrl:"https://images.unsplash.com/photo-1630340338894-eaa53fdd8ef9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie mollis fringilla. Maecenas vitae urna vestibulum, molestie neque et, faucibus."
  },
]

  return (
    <BrowserRouter>
      <Header user={user}/>
      <Routes>
        
        <Route path="/" element={
          <div>
            {
          cities.map((item)=>{
          return <CityCard  key={item._id} city={item}/>
          })
        }
          </div>
        }/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/citydetails/:cityName" element={<CityDetails cities= {cities} />}/>
      </Routes> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;
