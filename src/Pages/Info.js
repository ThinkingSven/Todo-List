import React from 'react'

function Info() {
  return (
    <div>
      <h1 className='headspace'>Info</h1>
      <h2 className='headspace'>What is Highlight?</h2>
      <p className='headspace'>Highlight is a Todo app inspired by the book <a>Make Time</a>. It is built to help you focus on the most important things today and not waste time. This project is open source so feel free to have a look how it's made on <a>Github</a>.</p>
      <h2 className='headspace'>Steps</h2>
      <p className='headspace'>Here are the 3 simple steps for Highlight:</p>
      <ol>
        <li className=''><span className=' font-bold'>1. Step one:</span> <a>Might Do List</a>, create a list of things you might do</li>
        <li className=''><span className=' font-bold'>2. Step two:</span> <a>  Pick your Highlight's</a>. Pick the 1-3 todos on your might do list which matter the most.  <p className=' indent-4'>If you have trouble choosing a highlight, checkout the <a href='https://maketime.blog/course/'>The Highlight Course</a> </p></li>
        <li className=''><span className=' font-bold'>3. Step three: </span> Put your todays focus into your highlights. If you do all of them, you can be sure <p className=' indent-4'> that you have had a successful day</p></li>
      </ol>
    </div>
  )
}

export default Info