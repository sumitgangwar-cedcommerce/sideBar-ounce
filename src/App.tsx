import { AlertCircle, Book, HelpCircle, Home, Settings, ShoppingBag } from 'react-feather';
import { Route, Routes } from 'react-router';
import './App.css';
import Dashboard from './Dashboard';
import SideBar2 from './SideBar';

const HomeC = () => {
  return <h1>HOME</h1>
}
const FaqC = () => {
  return <h1>FAQ</h1>
}
const SettingC = () => {
  return <h1>SETTINGS</h1>
}
const HelpC = () => {
  return <h1>HELP</h1>
}
const Product1 = () => {
  return <h1>Product1</h1>
}
const Product2 = () => {
  return <h1>Product2</h1>
}
const Product3 = () => {
  return <h1>Product3</h1>
}
const GetInTouch = () => {
  return <h1>Get In Touch</h1>
}

const ContactUs = () => {
  return <h1>Contact US</h1>
}


function App() {

  return (
    <Routes>
      <Route path='/' element={<Dashboard />}>
        <Route index element={<HomeC />} />
        <Route path='/faq' element={<FaqC />} />
        <Route path='/setting' element={<SettingC />} />
        <Route path='/help' element={<HelpC />} />
        <Route path='/productList/product1' element={<Product1 />} />
        <Route path='/productList/product2' element={<Product2 />} />
        <Route path='/productList/product3' element={<Product3 />} />
        <Route path='/getInTouch' element={<GetInTouch />} />
        <Route path='/contactUs' element={<ContactUs />} />
      </Route>
    </Routes>
  )
}

export default App;
