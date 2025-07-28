import { useState } from "react";

// Custom Form Input Hook
// eslint-disable-next-line no-unused-vars
const useFormInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    setError("");
  };

  const validate = (rules) => {
    if (rules.required && !value) {
      setError("This field is required");
      return false;
    }
    if (rules.minLength && value.length < rules.minLength) {
      setError(`Minimum length is ${rules.minLength}`);
      return false;
    }
    return true;
  };

  return { value, onChange: handleChange, error, validate };
};

export default useFormInput;
