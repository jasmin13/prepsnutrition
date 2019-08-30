import React from "react";

/* const renderField = ({
  input,
  id,
  type,
  placeholder,
  meta: { touched, error }
}) => (
  <div>
    <input {...input} id={id} placeholder={placeholder} type={type} />
    {touched && (error && <span style={{ color: "red" }}>{error}</span>)}
  </div>
);  */

export const renderField = ({
  input,
  id,
  type,
  textarea,
  rows,
  placeholder,
  className,
  meta: { touched, error, warning, invalid }
}) => {
  const textareaType = (
    <textarea
      {...input}
      id={id}
      rows={rows}
      placeholder={placeholder}
      type={type}
      className={`form-control ${touched && invalid ? "has-danger" : ""}`}
    />
  );
  const inputType = (
    <input
      {...input}
      id={id}
      placeholder={placeholder}
      type={type}
      className={`form-control ${touched && invalid ? "has-danger" : ""}`}
    />
  );

  return (
    <div>
      {textarea ? textareaType : inputType}
      {touched &&
        ((error && <span style={{ color: "red" }}>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
};

export const Checkbox = ({
  input,
  className,
  id,
  type,
  name,
  meta: { touched, error }
}) => (
  <div className="form-group">
    <div className="form-check">
      <input {...input} type={type} className={className} id={id} name={name} />
      <label className="form-check-label">I agree with all conditions</label>
    </div>
    <div>
      {touched && (error && <span style={{ color: "red" }}>{error}</span>)}
    </div>
  </div>
);
