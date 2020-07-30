import React from "react";

const FormField = ({ label, value, onChange, type, name, mode }) => (
  <div>
    <label>
      {label}:
      {mode === "textarea" ? (
        <textarea type={type} name={name} value={value} onChange={onChange} />
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} />
      )}
    </label>
  </div>
);

export default FormField;
