import { VIEWS } from "../../constants";

const Header = ({ setCurrentPage, currentPage }) => {
  const navItems = [
    { view: VIEWS.SEARCH, label: "Search" },
    { view: VIEWS.SCHEDULE, label: "My schedule" },
    { view: VIEWS.REGISTER, label: "Register" },
  ];

  const headerContainerClass = "w-full flex justify-between items-center p-4";

  const ButtonNav = ({ view, label }) => {
    const isSelected = view === currentPage;
    const baseButtonClass = "cursor-pointer p-2 border-b-4";
    const selectedClass = isSelected
      ? "border-teal-700"
      : "border-transparent";
    return (
      <button
        className={`${baseButtonClass} ${selectedClass}`}
        onClick={() => setCurrentPage(view)}
      >
        {label}
      </button>
    );
  };

  return (
    <div className={headerContainerClass}>
      <p className="font-semibold"> Pensieri's Session Finder</p>
      <div className="flex gap-4">
        {navItems.map((item) => (
          <ButtonNav key={item.view} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Header;
