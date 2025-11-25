import { createContext, useContext, useEffect, useState } from "react";
import { SESSIONS, searchSessions } from "../api.js";

const ScheduleContext = createContext(null);

export function ScheduleProvider({ children }) {
  const [sessionIds, setSessionIds] = useState([]);

  const add = (id) =>
    setSessionIds((prev) => (prev.includes(id) ? prev : [...prev, id]));

  const remove = (id) => setSessionIds((prev) => prev.filter((x) => x !== id));

  const scheduled = (sessionId) => sessionIds.includes(sessionId);

  // TODO: adding filter(Boolean) to avoid null values if session not found
  const schedule = sessionIds.map((id) =>
    SESSIONS.find((session) => session.id === id)
  );

  /// Search logic ///
  const [searchQuery, setSearchQuery] = useState("");

  const [filteredSessions, setFilteredSessions] = useState(SESSIONS);

  // Calling async searchSessions from api.js when query changes
  useEffect(() => {
    const fetchSessions = async () => {
      try {
        console.log("Searching for:", searchQuery); 
        const results = await searchSessions(searchQuery);
        console.log("Received results:", results); 
        setFilteredSessions(results);
      } catch (error) {
        console.error("API call failed:", error); 
      }
    };
    fetchSessions();
  }, [searchQuery]);

  const contextValue = {
    sessionIds,
    setSessionIds,
    add,
    remove,
    searchQuery,
    setSearchQuery,
    filteredSessions,
    scheduled,
    schedule,
  };
  return (
    <ScheduleContext.Provider value={contextValue}>
      {children}
    </ScheduleContext.Provider>
  );
}

export const useSchedule = () => useContext(ScheduleContext);
