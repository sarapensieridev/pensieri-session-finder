import React from 'react'
import { useSchedule } from '../context/ScheduleContext'
import AddToScheduleButton from '../components/AddToScheduleButton'

const UserSchedule = ({}) => {

    const { schedule } = useSchedule()

  return (
    <div>
      <h2> My schedule</h2>

      {schedule.length === 0 && <p>No session added yet</p>}

      {schedule.map(session => (
        <div key={session.id}>
          <h3>{session.title}</h3>
          <p>{session.speaker}</p>
          <p>{session.startsAt}</p>
          <p>{session.durationMins}</p>
          <AddToScheduleButton sessionId={session.id} />
        </div>
      ))}
      </div>
    
  )
}

export default UserSchedule
