import NewMeetupForm from '\u0016@component/components/meetups/NewMeetupForm'
import React from 'react'

const newMeetup = () => {

  const addMeetupHandler=(enteredMeetupData)=>{
    console.log(enteredMeetupData)
  }
  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </>
  )
}

export default newMeetup