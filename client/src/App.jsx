import "./App.scss";
import axios from "axios";
import { useForm } from "react-hook-form";
import Login from "./pages/login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="tablet-container">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

const TestLoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // GET 요청
    // axios.get("/api").then((res) => {
    //   console.log(res.data);
    // });

    // POST 요청
    axios
      .post("/api/login", {
        id: "id",
        passwd: "passwd",
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  const onError = (e) => {
    console.error(e);
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input type="text" {...register("username")} />
        <input
          type="password"
          {...register("password", {
            minLength: {
              value: 4,
              message: "password must be longth than 4 characters.",
            },
          })}
        />
        <br />

        <input type="submit" value={"로그인"} />
      </form>
    </>
  );
};
