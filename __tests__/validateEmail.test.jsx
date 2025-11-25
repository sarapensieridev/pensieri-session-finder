import { validateEmail } from "../src/utils/validateEmail";

describe("validateEmail", () => {
  test("returns null for a valid email", () => {
    const validEmails = [
      "test@example.com",
      "john.doe@mail.co",
      "user+tag@domain.io",
      "my-email_123@company.org",
    ];

    validEmails.forEach(email => {
      expect(validateEmail(email)).toBeNull();
    });
  });

  test("returns an error message for an invalid email", () => {
    const invalidEmails = [
      "",
      "plainaddress",
      "missingatsign.com",
      "@missinguser.com",
      "user@.com",
      "user@domain",
      "user@domain.",
      "user@domain.c",   
      "user@domain..com" 
    ];

    invalidEmails.forEach(email => {
      expect(validateEmail(email)).toBe("Email format is invalid");
    });
  });
});
