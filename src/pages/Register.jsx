import { useEffect, useState } from "react";
import { registerAttendee } from "../api";
import { validateForm } from "../utils/validateForm";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", role: "" });
  const [error, setError] = useState({ name: "", email: "", role: "" });
  const [message, setMessage] = useState({ type: "", text: "" });

  const buttonClass =
    "bg-teal-700 text-white w-72 p-2 rounded-md cursor-pointer p-2";
  const formClass =
    "flex flex-col items-center border rounded-md p-6 gap-6 mb-10";
  const formGroupClass = "flex flex-col items-center gap-4";
  const labelClass = "text-md";
  const inputClass = "w-72 border rounded-md p-2";
  

  // useEffect to close popup and clear message
  useEffect(() => {
    let timer;
    if (message.text && message.type === "success") {
      timer = setTimeout(() => {
        setMessage({ type: "", text: "" });
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [message]);

  // Input change function, update state and clean errors
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: "" }));
    setMessage({ type: "", text: "" });
  };

  const handleRegister = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const formErrors = validateForm(user);
    setError(formErrors);

    if (Object.keys(formErrors).length > 0) {
      setMessage({ type: "error", text: "Please provide all the required information." });      
      return;
    }

    const payload = {
      name: user.name,
      email: user.email,
      role: user.role,
    };

    // Calling registerAttendee API function
    const result = await registerAttendee(payload);
    if (result.ok) {
      setMessage({
        type: "success",
        text: `You are registered with ID ${result.registrationId}`,
      });
      setUser({ name: "", email: "", role: "" });
      setError({});
    } else {
      setMessage({
        type: "error",
        text: `Registration failed: ${result.error}. Please try again.`,
      });
    }
    console.log("Registration result:", result);
  };

  return (
    <div className="flex flex-col items-center pt-12">
      <form className={formClass} onSubmit={handleRegister}>
        <div className={formGroupClass}>
          <label className={labelClass}>Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={user.name}
            className={inputClass}
          />
          {error.name && <span className="text-red-500">{error.name}</span>}
        </div>

        <div className={formGroupClass}>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={user.email}
            className={inputClass}
          />
          {error.email && <span className="text-red-500">{error.email}</span>}
        </div>

        <div className={formGroupClass}>
          <label className={labelClass}>Role</label>
          <select
            onChange={handleChange}
            name="role"
            value={user.role}
            className={inputClass}
          >
            <option value="">Select</option>
            <option value="student">Student</option>
            <option value="junior">Junior</option>
            <option value="middle">Middle</option>
            <option value="senior">Senior</option>
          </select>
          {error.role && <span className="text-red-500">{error.role}</span>}
        </div>
        <button className={buttonClass}type="submit">
          Register
        </button>
      </form>

      {message.text && (
        <div className="flex items-start justify-center bg-opacity-50">
          <div
            className={`p-6 mb-4 rounded-md shadow-2xl w-64 text-center ${
              message.type === "success"
                ? "w-96 h-32 bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.type === "success" ? (
              <div className="text-center">
                {" "}
                <h3 className="text-lg font-semibold mb-2">🎉 Success!</h3>
                <p>{message.text}</p>
              </div>
            ) : (
              <p>{message.text}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
