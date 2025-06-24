import { useForm } from "react-hook-form";
import { Button, Card, Container, Form } from "react-bootstrap";
import { input, select, checkbox } from "./components/Inputs";

function App() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      nom: "",
      date: "",
      priorité: "Basse",
      isCompleted: false
    }
  });

  const options = [
    { value: "Basse" },
    { value: "Moyenne" },
    { value: "Haute" },
  ];

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Card style={{ width: "400px" }} className="p-4 shadow">
        <Form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-3">
          {input("text", "nom", register, errors)}
          {input("date", "date", register, errors)}
          {select("priorité", options, register, errors)}
          {checkbox("Le formulaire est complété", "isCompleted", register)}

          <Button type="submit" variant="primary">Envoyer</Button>
        </Form>
      </Card>
    </Container>
  );
}

export default App;
