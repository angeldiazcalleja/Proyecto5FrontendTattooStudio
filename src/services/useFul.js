export const validate = (type, value) => {
  switch (type) {
    case "email":
      if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/g.test(value)) {
        return "Invalid email address format.";
      } else {
        return "";
      }

    case "password":
      if (value.length < 8) {
        return "It must be between 8 and 16 characters";
      } else {
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,16}$/g.test(value)) {
          return "It must contain at least one uppercase letter and one digit";
        } else {
          return "";
        }
      }

    case "phone":
      if (!/^\d{9}$/g.test(value)) {
        return "Invalid phone number. It must have 9 digits.";
      } else {
        return "";
      }

    case "name":
      if (value.length < 3) {
        return "It must be between 3 an 16 characters";
      } else {
        return ""
      }
  }
};
