import { useSchedule } from "../context/ScheduleContext"

const AddToScheduleButton = ({sessionId}) => {

    // State from context
    const { sessionIds, add, remove } = useSchedule()

    // Check if the session is already been scheduled
    const isScheduled = sessionIds.includes(sessionId)

    // TODO: add isLoading state to avoid multiple clicks if API call delay

    const addToSchedule = () => {
        // If already scheduled, remove the session
        if(isScheduled){
        remove(sessionId)
        console.log("added to schedule")
        } 
        // If session is not scheduled, add it to user schedule
        else {
        add(sessionId)
        }
    }
  return (
    <div>
      <button onClick={addToSchedule}>{isScheduled ? "Remove from schedule" : "Add to schedule"}</button>
    </div>
  )
}

export default AddToScheduleButton
