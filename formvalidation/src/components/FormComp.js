import React, { useState } from "react";

function FormComp() {
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    number: 0,
  });

  const onHandleChange = (e) => {
    // console.log("🚀 ~ onHandleChange ~ e:", e.target);
    e.preventDefault();
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log("🚀 ~ onHandleChange ~ value:", value);
    // console.log("🚀 ~ onHandleChange ~ name:", name);
  };

  const validateError = () => {
    let ErrorValue = {};
    if (!formData.name) ErrorValue.name = "name not found";
    if (!formData.place) ErrorValue.place = "place not found";
    if (!formData.number) ErrorValue.number = "number not found";

    console.log(
      "🚀 ~ validateError ~ typeof formData.number :",
      typeof formData.number
    );
    if (formData.number && isNaN(formData.number)) {
      ErrorValue.number = "insert correct number";
    }

    return ErrorValue;
  };

  const [error, setError] = useState();
  // console.log("🚀 ~ FormComp ~ error:", error);

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log("🚀 ~ validateError ~ formData:", formData);

    const validateForm = validateError();
    // console.log("🚀 ~ onSubmitForm ~ validateForm:", validateForm);
    if (Object.keys(validateForm) > 0) {
      console.log(formData);
    } else {
      setError(validateForm);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            name="name"
            onChange={(e) => onHandleChange(e)}
          ></input>
          {error?.name && <span>{error?.name}</span>}
          <br />
          <input
            type="text"
            name="place"
            onChange={(e) => onHandleChange(e)}
          ></input>
          {error?.place && <span>{error?.place}</span>}
          <br />
          <input
            type="text"
            name="number"
            onChange={(e) => onHandleChange(e)}
          ></input>
          {error?.number && <span>{error?.number}</span>}
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

export default FormComp;
