const handleChange = (callback, fieldName, event) => {
  callback((prevData) => ({
    ...prevData,
    [fieldName]: event.target.value,
  }));
};

export default handleChange;
