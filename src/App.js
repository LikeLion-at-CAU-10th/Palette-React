import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Post from './pages/Post'
// import PostDetail from './pages/PostDetail'

const App = () => {

  return (
    <>
      <Routes>

            <Route path="/" element={<></>} ></Route>
            <Route path="/calendar" element={<></>} />
            <Route path="/post" element={<Post/>} />
            <Route path="/folder" element={<></>} />

            {/* <Route path="/post-detail" element={<PostDetail/>}/> */}
          

        
      </Routes>
    
    </>
    


  )
}

export default App