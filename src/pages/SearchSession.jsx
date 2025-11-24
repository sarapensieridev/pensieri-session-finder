import { useSchedule } from "../context/ScheduleContext";
import Sessions from "../components/Sessions";

const SearchSession = () => {
  // State from context
  const { searchQuery, setSearchQuery, filteredSessions } = useSchedule();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const inputClass =
    "col-span-5 rounded-md border border-black p-1 pl-2 text-sm";
  const searchContainerClass =
    "grid grid-cols-6 items-center mx-auto gap-3 max-w-4xl";
  const sessionContainerClass =
    "p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";
  const spanClass = "col-span-1 font-semibold text-sm"

  return (
    <div className="p-4 grid gap-6">
      <div className={searchContainerClass}>
        <span className={spanClass}>Search</span>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by title, track, or speaker"
          className={inputClass}
        />
      </div>
      <div className={sessionContainerClass}>
        {/* Mapping and rendering filtered sessions */}
        {filteredSessions.map((session) => (
          <Sessions key={session.id} session={session} noMargin />
        ))}
      </div>
    </div>
  );
};

export default SearchSession;
