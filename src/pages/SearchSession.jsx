import { useSchedule } from '../context/ScheduleContext'
import AddToScheduleButton from '../components/AddToScheduleButton'

const SearchSession = () => {

    // State from context
    const { searchQuery, setSearchQuery, filteredSessions } = useSchedule()
  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value)
    }
  
    return (
      <div>
        <span>Search</span>
        <input 
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by title, track or speaker" />
        <div>
          {/* Mapping and rendering filtered sessions */}
          {filteredSessions.map(session => (
            <div key={session.id}>
            <h2>{session.title}</h2>
            <p>{session.speaker}</p>
            <p>{session.startsAt}</p>
            <p>{session.durationMins}</p>
            <AddToScheduleButton sessionId={session.id} />
            </div>
          ))
            }
        </div>
      </div>
    )
}

export default SearchSession
