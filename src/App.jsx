
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Booksmarks from './components/Bookmarks/Booksmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookMarks = blog =>{
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks)
  }

  const handleMarkAsRead = (time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookMarks={handleAddToBookMarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Booksmarks bookmarks={bookmarks} readingTime={readingTime}></Booksmarks>
      </div>
    </>
  )
}

export default App
