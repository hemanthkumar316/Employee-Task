import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserList from './Components/Users/UserList'
// import UserDetails from './Components/Users/UserDetails'
import NotFound from './Components/Users/NotFound'
import SideBar from './Components/SideBar/SideBar';
import Gallery from './Components/Pages/Gallery';
import Posts from './Components/Pages/Posts';
import ToDo from './Components/Pages/ToDo';
const App = () => {
  return (
    <div>
    <Router>
        <Routes>
          <Route path='/' element={<UserList />} />
          {/* <Route path='/user/:id' element={<UserDetails/>}/> */}
          <Route path="*" element={<NotFound />} />
          <Route path='/user/:id/' element={<SideBar />} />
          <Route path='/user/:id/gallery' element={<Gallery />} />
          <Route path='/user/:id/posts' element={<Posts />} />
          <Route path='/user/:id/todo' element={<ToDo />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
