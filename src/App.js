// import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import ResturantMenu from './components/ResturantMenu';
import Cart from './components/Cart';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Provider } from 'react-redux';
import AppStore from './utils/AppStore';
import Footer from './components/Footer';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import Grocery from './components/Grocery';
// import { lazy } from 'react';

// const Grocery = lazy(()=>import("./components/Grocery"));
function App(){

  return(
   
    <div className="App">
       <Provider store={AppStore}>
        <Router>
          <Header/>
          <Routes>
            <Route exact path='/' element={<Body/>} errorElement={<Error/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            <Route exact path='/contact' element={<Contact/>}></Route>
            <Route exact path='/resturants/:resId' element={<ResturantMenu/>}></Route>
            <Route exact path='/cart' element={<Cart/>}/><Route/>
            {/* <Route exact path='/grocery' element={<Grocery/>}></Route> */}
          </Routes>
          <Footer/>
        </Router>
        </Provider>
    </div>
   );
};
// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <RouterProvider router={appRouter}/>
//     </div>
//    );
//  };

  // const appRouter = createBrowserRouter([
  //     {
  //       path:"/",
  //       element:<Body/>,
  //       errorElement:<Error/>
  //     },
  //     {
  //       path:"/about",
  //       element:<About/>
  //     },
  //     {
  //       path:"/contact",
  //       element:<Contact/>
  //     }
  // ]); 

 
export default App;
