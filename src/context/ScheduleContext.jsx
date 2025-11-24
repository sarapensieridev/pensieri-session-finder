import { createContext, useContext, useEffect, useState } from "react";
import { SESSIONS, searchSessions } from "../api.js";

const ScheduleContext = createContext(null);

export function ScheduleProvider({ children }) {
  const [sessionIds, setSessionIds] = useState([]);

  // Function to add session to schedule
  const add = (id) =>
    setSessionIds((prev) => (prev.includes(id) ? prev : [...prev, id]));

  // Function to remove session from schedule
  const remove = (id) => setSessionIds((prev) => prev.filter((x) => x !== id));

  // Checking if a session is scheduled
  const scheduled = (sessionId) => sessionIds.includes(sessionId);

  // Session details for scheduled sessions, converting IDs to session objects
  // TODO: adding filter(Boolean) to avoid null values if session not found
  const schedule = sessionIds.map((id) =>
    SESSIONS.find((session) => session.id === id)
  );

  /// Search logic ///
  // Current search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered results based on current search query
  const [filteredSessions, setFilteredSessions] = useState(SESSIONS);

  // Calling async searchSessions from api.js when query changes
  useEffect(() => {
    const fetchSessions = async () => {
      try {
        console.log("Searching for:", searchQuery); // Is this running?
        const results = await searchSessions(searchQuery);
        console.log("Received results:", results); // Are results here?
        setFilteredSessions(results);
      } catch (error) {
        console.error("API call failed:", error); // Did an error occur?
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
