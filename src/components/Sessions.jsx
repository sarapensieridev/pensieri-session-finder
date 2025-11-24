import { formatSessionDate } from "../utils/formatSessionDate";
import AddToScheduleButton from "./AddToScheduleButton";

const Sessions = ({ session, noMargin }) => {
  const baseClass = "border-black border rounded-md p-4";
  const marginClass = noMargin ? "" : "mb-4";
  return (
    <div className={`${baseClass} ${marginClass}`}>
      <div className="text-end mb-2">
        <p className="inline-block text-xs bg-gray-200 rounded-md p-1">{session.track}</p>
      </div>
      <h2 className="font-semibold pb-2">{session.title}</h2>
      <p className="pb-1">Speaker: {session.speaker}</p>
      <p className="pb-6">
        When: {formatSessionDate(session.startsAt)} - {session.durationMins}{" "}
        mins
      </p>
      <AddToScheduleButton sessionId={session.id} />
    </div>
  );
};

export default Sessions;
