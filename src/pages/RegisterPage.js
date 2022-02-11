import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../redux/actions/userActions";
import MessageQueue, { useMessageQueue } from "../MessageQueue/Index";
import { Button } from "react-bootstrap";

const RegisterPage = () => {
  const { addMessage, removeMessage, messages } = useMessageQueue();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      addMessage(`Hasła nie są identyczne!`, "error");
    } else dispatch(register(name, email, password, surname));
  };

  useEffect(() => {
    if (userInfo !== undefined && userInfo !== null) {
      navigate("/");
    }
    if (error !== undefined) {
      if (messages.length === 0) {
        if (error === "cannot create user")
          addMessage(
            `Nie mozna utworzy uzytkownika, bo juz istnieje!`,
            "error"
          );
      }
    }
  }, [userRegister]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: "5%",
          boxShadow: " 0 2px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "40px",
          minHeight: "700px",
          minWidth: "500px",
          maxHeight: "900px",
          maxWidth: "500px",
          backgroundColor: "#dD3D3D3",
        }}
      >
        <MessageQueue messages={messages} removeMessage={removeMessage} />
        <form className="form" onSubmit={submitHandler}>
          <div>
            <h1>Stwórz konto</h1>
          </div>
          <div>
            <label style={{ fontStyle: "italic" }} htmlFor="name">
              Podaj Imie:
            </label>
            <input
              style={{
                borderRadius: "10px",
                border: "1px solid green",
                boxShadow: "white",
                padding: "1% 0% 1% 3%",
              }}
              type="text"
              id="name"
              placeholder="wpisz imie"
              required
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <label style={{ fontStyle: "italic" }} htmlFor="name">
              Podaj Nazwisko:
            </label>
            <input
              style={{
                borderRadius: "10px",
                border: "1px solid green",
                boxShadow: "white",
                padding: "1% 0% 1% 3%",
              }}
              type="text"
              id="name"
              placeholder="wpisz nazwisko"
              required
              onChange={(e) => setSurname(e.target.value)}
            ></input>
          </div>
          <div>
            <label style={{ fontStyle: "italic" }} htmlFor="email">
              Podaj email:
            </label>
            <input
              style={{
                borderRadius: "10px",
                border: "1px solid green",
                boxShadow: "white",
                padding: "1% 0% 1% 3%",
              }}
              type="email"
              id="email"
              placeholder="wpisz email"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <label style={{ fontStyle: "italic" }} htmlFor="password">
              Podaj hasło:
            </label>
            <input
              style={{
                borderRadius: "10px",
                border: "1px solid green",
                boxShadow: "white",
                padding: "1% 0% 1% 3%",
              }}
              type="password"
              id="password"
              placeholder="wpisz hasło"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div>
            <label style={{ fontStyle: "italic" }} htmlFor="confirmPassword">
              Potwierdz hasło:
            </label>
            <input
              style={{
                borderRadius: "10px",
                border: "1px solid green",
                boxShadow: "white",
                padding: "1% 0% 1% 3%",
              }}
              type="password"
              id="confirmPassword"
              placeholder="wpisz potwierdzone hasło"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
          </div>
          <div>
            <label />
            <Button
              variant="outline-success"
              type="submit"
              style={{
                marginBottom: "1%",
                marginLeft: "50%",
              }}
            >
              Zarejestruj
            </Button>
          </div>
          <div>
            <label />
            <div>
              Masz kontro?{" "}
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
                to={`/signin`}
              >
                Zaloguj się
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
