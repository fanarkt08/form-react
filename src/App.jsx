import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { input, select, checkbox } from "./components/Inputs";

function App() {
  const [formData, setFormData] = useState({
    nom: "",
    date: "",
    priorité: "Basse",
    isCompleted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const options = [
    { value: "Basse" },
    { value: "Moyenne" },
    { value: "Haute" },
  ];

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Card style={{ width: "400px" }} className="p-4 shadow">
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          {input("text", "nom", formData.nom, handleChange)}
          {input("date", "date", formData.date, handleChange)}
          {select("priorité", options, formData.priorité, handleChange)}
          {checkbox("Le formulaire est complété", "isCompleted", formData.isCompleted, handleChange)}

          <Button type="submit" variant="primary">Envoyer</Button>
        </Form>
      </Card>
    </Container>
  );
}

export default App;
