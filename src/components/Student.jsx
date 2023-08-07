import React from 'react'
import Score from './Score'

const Student = ( {student} ) => {
  return (
    <div className='studentContainer'>
      <h1 className='student'>{student.name}</h1>
      <p className='bioText'>BIO</p>
      <p className='bioBody'>{student.bio}</p>
      <Score student={student}/>
    </div>
  )
};

export default Student
