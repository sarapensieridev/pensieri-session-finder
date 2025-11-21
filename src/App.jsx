
import Header from "./components/Header"
import { ScheduleProvider } from "./context/ScheduleContext"
import { useState } from "react"
import SearchSession from "./pages/SearchSession"
import UserSchedule from "./pages/UserSchedule"
import Register from "./pages/Register"
import { VIEWS } from "../constants"
import './index.css';

function App() {

  //// TODO: React Router for page navigation ////

  // State to manage the current page renered
  const [currentPage, setCurrentPage] = useState(VIEWS.SEARCH)

  // Function to render the current page based on state
  const renderPage = () => {
    switch (currentPage) {
      case VIEWS.SEARCH:
        return <SearchSession />
      case VIEWS.SCHEDULE:
        return <UserSchedule />
      case VIEWS.REGISTER:
        return <Register />
      default:
        return <SearchSession />
    }
  }


  return (
    <ScheduleProvider>
      <div className="bg-blue-500 w-full min-h-screen text-white flex flex-col items-center"> 
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="bg-gray-500 w-full">{renderPage()}</div>
      </div>
    </ScheduleProvider>
  )
}

export default App
