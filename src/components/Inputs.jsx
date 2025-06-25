import { Form } from "react-bootstrap";

export const input = (label, type, name, register, errors) => (
  <Form.Group controlId={`form-${name}`} className="w-100">
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type={type}
      {...register(name, { required: "Ce champ est requis" })}
      isInvalid={!!errors[name]}
    />
    <Form.Control.Feedback type="invalid">
      {errors[name]?.message}
    </Form.Control.Feedback>
  </Form.Group>
);


export const select = (label, name, options, register, errors) => (
  <Form.Group controlId={`form-${name}`} className="w-100">
    <Form.Label>{label}</Form.Label>
    <Form.Select
      {...register(name, { required: "Veuillez choisir une priorité" })}
      isInvalid={!!errors[name]}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.value}
        </option>
      ))}
    </Form.Select>
    <Form.Control.Feedback type="invalid">
      {errors[name]?.message}
    </Form.Control.Feedback>
  </Form.Group>
);

export const checkbox = (label, name, register) => (
  <Form.Group className="w-100">
    <Form.Check
      type="checkbox"
      label={label}
      {...register(name)}
    />
  </Form.Group>
);

