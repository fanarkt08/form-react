import { Form } from "react-bootstrap";

export const input = (type, name, register) => (
  <Form.Group controlId={`form-${name}`} className="w-100">
    <Form.Label>{name.charAt(0).toUpperCase() + name.slice(1)}</Form.Label>
    <Form.Control
      type={type}
      {...register(name, { required: true })}
    />
  </Form.Group>
);

export const select = (name, options, register) => (
  <Form.Group controlId={`form-${name}`} className="w-100">
    <Form.Label>{name.charAt(0).toUpperCase() + name.slice(1)}</Form.Label>
    <Form.Select {...register(name)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.value}
        </option>
      ))}
    </Form.Select>
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
