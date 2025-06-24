import { Form } from "react-bootstrap";

export const input = (type, name, value, handleChange) => (
  <Form.Group controlId={`form-${name}`} className="w-100">
    <Form.Label>{name.charAt(0).toUpperCase() + name.slice(1)}</Form.Label>
    <Form.Control
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      required
    />
  </Form.Group>
);

export const select = (name, options, selectedValue, handleChange) => (
  <Form.Group controlId={`form-${name}`} className="w-100">
    <Form.Label>{name.charAt(0).toUpperCase() + name.slice(1)}</Form.Label>
    <Form.Select name={name} value={selectedValue} onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.value}
        </option>
      ))}
    </Form.Select>
  </Form.Group>
);

export const checkbox = (label, name, checked, handleChange) => (
  <Form.Group className="w-100">
    <Form.Check
      type="checkbox"
      label={label}
      name={name}
      checked={checked}
      onChange={handleChange}
    />
  </Form.Group>
);
