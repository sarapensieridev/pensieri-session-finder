import { VIEWS } from "../../constants"

const Header = ({setCurrentPage, currentPage}) => {

    const ButtonNav = ({view, label}) => {
        return (
            <button onClick={() => setCurrentPage(view)}>{label}</button>
    )}
  return (
    <div>
    <ButtonNav view={VIEWS.SEARCH} label="Search session"></ButtonNav>
    <ButtonNav view={VIEWS.SCHEDULE} label="My schedule"></ButtonNav>
    <ButtonNav view={VIEWS.REGISTER} label="Register"></ButtonNav>
    </div>
  )
}

export default Header
