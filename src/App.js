import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import PostDetail from './pages/PostDetail'
import {PostDetailBody} from './styles/PDstyled'



const App = () => {

  return (
    <>
        <div> palette </div>
      <Routes>
        <Route path="/post-detail" 
        element={
        <PostDetailBody>
          <PostDetail></PostDetail>
        </PostDetailBody>
      }></Route>
      </Routes>
    
    </>
    


  )
}

export default App
