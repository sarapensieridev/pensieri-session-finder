# Frontend Take-Home Test — Sara Pensieri

This is a small React application with a session finder page with search functionality, a user's schedule page and a registration form. 

---

## 📌 Project overview

The main component handles the navigation to the three principal screens. 
Global components were created for a cleaner and more maintainable code structure.
Utility functions handle date formatting on the session page and form validation(required fields and valid email).
Tailwind CSS is used for styling. For larger or conditional styles, classes were extracted into variables to improve code readability and maintainability.

---

## ▶️ How to Run

```bash
git clone https://github.com/sarapensieridev/pensieri-session-finder
npm install
npm start 

```

---

### 🔎 Run test

```bash
npm test

```

## 📖 Libraries

I used: 
- JEST: Added for unit testing `validateEmail` function.

---

## Improvements

With more time, I would:
- Implement React Router DOM for navigation.
- Add `isLoading` state to search session.
- Use `useMemo` hook in `ScheduleContext` to optimize schedule calculations and prevent unnecessary re-renders.
- Add more tests, particularly for the `validateForm` function and for React components using React Testing Library. 
- Add `filter(Boolean)` to schedule calculation in `ScheduleContext` to avoid null values when a session not found.
- Use clsx or classnames for conditional classes instead of template literals for cleaner JSX.



