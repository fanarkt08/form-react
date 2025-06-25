import { useForm } from "react-hook-form";
import { Button, Card, Container, Form } from "react-bootstrap";
import { input, select, checkbox } from "./components/Inputs";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function App() {
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(8, "Le nom doit contenir au moins 8 caractères")
      .max(15, "Le nom doit contenir au maximum 15 caractères")
      .required("Le nom est requis"),

    dueDate: yup
      .string()
      .matches(
        /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
        "Le format de la date doit être jj/mm/aaaa"
      )
      .required("La date est requise")
      .test(
        "date-non-passé",
        "La date ne peut pas être antérieure à aujourd'hui",
        function (value) {
          if (!value) return false;

          const [day, month, year] = value.split('/').map(Number);
          const inputDate = new Date(year, month - 1, day); // JS: mois 0-indexé
          const today = new Date();

          inputDate.setHours(0, 0, 0, 0);
          today.setHours(0, 0, 0, 0);

          return inputDate >= today;
        }
      ),

    priority: yup
      .string()
      .oneOf(["Basse", "Moyenne", "Haute"], "La priorité doit être Basse, Moyenne ou Haute"),

    isCompleted: yup
      .boolean()
      .typeError("La case à cocher doit être un booléen")
  })

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      dueDate: "",
      priority: "Basse",
      isCompleted: false
    },
    resolver: yupResolver (schema)
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
          {input("Nom", "text", "name", register, errors)}
          {input("Date", "date", "dueDate", register, errors)}
          {select("Priorité", "priority", options, register, errors)}
          {checkbox("Est complété", "isCompleted", register)}

          <Button type="submit" variant="primary">Envoyer</Button>
        </Form>
      </Card>
    </Container>
  );
}

export default App;
