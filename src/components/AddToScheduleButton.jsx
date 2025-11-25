import { useSchedule } from "../context/ScheduleContext";

const AddToScheduleButton = ({ sessionId }) => {
  const { sessionIds, add, remove } = useSchedule();
  const isScheduled = sessionIds.includes(sessionId);

  const baseClass =
    "w-42 h-1/2 rounded-md cursor-pointer text-white p-2 text-sm";
  const colorClass = isScheduled
    ? "bg-red-500 hover:bg-red-600"
    : "bg-teal-700 hover:bg-teal-800";

  // TODO: add isLoading state to avoid multiple clicks if API call delay

  const addToSchedule = () => {
    if (isScheduled) {
      remove(sessionId);
      console.log("added to schedule");
    }
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
