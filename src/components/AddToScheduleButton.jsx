import { useSchedule } from "../context/ScheduleContext";

const AddToScheduleButton = ({ sessionId }) => {
  // State from context
  const { sessionIds, add, remove } = useSchedule();

  // Check if the session is already been scheduled
  const isScheduled = sessionIds.includes(sessionId);

  const baseClass =
    "w-42 h-1/2 rounded-md cursor-pointer bg-green-200 text-black p-2 text-sm";
  const colorClass = isScheduled
    ? "bg-red-500 text-white hover:bg-red-600"
    : "bg-green-200 hover:bg-green-300";

  // TODO: add isLoading state to avoid multiple clicks if API call delay

  const addToSchedule = () => {
    // If already scheduled, remove the session
    if (isScheduled) {
      remove(sessionId);
      console.log("added to schedule");
    }
    // If session is not scheduled, add it to user schedule
    else {
      add(sessionId);
    }
  };
  return (
    <div>
      <button className={`${baseClass} ${colorClass}`} onClick={addToSchedule}>
        {isScheduled ? "Remove from schedule" : "Add to schedule"}
      </button>
    </div>
  );
};

export default AddToScheduleButton;
