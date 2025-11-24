import { validateEmail } from "./validateEmail";
import { validateRequired } from "./validateRequired";

export const validateForm = (user) => {
    let currentErrors = {};

    // Name validation
    const nameResult = validateRequired(user.name);
    if (typeof nameResult === "string") { 
      currentErrors.name = nameResult;
    }

    // Role Validation
    const roleResult = validateRequired(user.role);
    if (typeof roleResult === "string") {
      currentErrors.role = roleResult;
    }
    
    // Email validation (required + format)
    const emailRequiredResult = validateRequired(user.email);
    if (typeof emailRequiredResult === "string") {
        currentErrors.email = emailRequiredResult; // Required field error
    } else {
        const emailFormatResult = validateEmail(user.email);
        if (typeof emailFormatResult === "string") {
            currentErrors.email = emailFormatResult; // Format error
        }
    }

    return currentErrors;
};