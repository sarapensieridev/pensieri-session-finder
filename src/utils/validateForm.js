import { validateEmail } from "./validateEmail";
import { validateRequired } from "./validateRequired";

export const validateForm = (user) => {
    let currentErrors = {};

    const nameResult = validateRequired(user.name);
    if (typeof nameResult === "string") { 
      currentErrors.name = nameResult;
    }

    const roleResult = validateRequired(user.role);
    if (typeof roleResult === "string") {
      currentErrors.role = roleResult;
    }
    
    const emailRequiredResult = validateRequired(user.email);
    if (typeof emailRequiredResult === "string") {
        currentErrors.email = emailRequiredResult;
    } else {
        const emailFormatResult = validateEmail(user.email);
        if (typeof emailFormatResult === "string") {
            currentErrors.email = emailFormatResult; 
        }
    }

    return currentErrors;
};