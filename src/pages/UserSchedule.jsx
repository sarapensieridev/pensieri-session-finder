import { useSchedule } from "../context/ScheduleContext";
import Sessions from "../components/Sessions";

const UserSchedule = () => {
  const { schedule } = useSchedule();
  const containerClass = "flex flex-col mx-4 py-4 gap-4 items-center";

  return (
    <div className={containerClass}>
      <h2 className="font-semibold">My schedule</h2>
      <p className="text-sm">
        You have {schedule.length} session{schedule.length !== 1 ? "s" : ""}{" "}
        scheduled.
      </p>{" "}
      <div className="w-full">
        {schedule.length === 0 && (
          <p>
            No session added yet. Go to Search if you want to add some session.
          </p>
        )}

        {schedule.map((session) => (
          <Sessions key={session.id} session={session} />
        ))}
      </div>
    </div>
  );
};

export default UserSchedule;
