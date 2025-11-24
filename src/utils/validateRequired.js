export const validateRequired = (value) => {
    if(!value) {
        return "This field is required";
    }

    if(typeof value === "string" && value.trim() === "") {
        return "This field is required";
    }

    return null;
}