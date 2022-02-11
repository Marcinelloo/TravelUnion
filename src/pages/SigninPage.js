import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../redux/actions/userActions";
import { Button } from "react-bootstrap";
import MessageQueue, { useMessageQueue } from "../MessageQueue/Index";

const SigninPage = () => {
  const { addMessage, removeMessage, messages } = useMessageQueue();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo !== undefined && userInfo !== null) {
      navigate("/");
    }
    if (error !== undefined) {
      console.log(error);
      if (messages.length === 0) {
        if (error === "user doesnt exist")
          addMessage(`Taki uzytkownik nie istnieje!`, "error");
        if (error === "incorect password")
          addMessage(`Niepoprawne haslo!`, "error");
      }
    }
  }, [userSignin]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MessageQueue messages={messages} removeMessage={removeMessage} />
      <div
        style={{
          marginTop: "5%",
          boxShadow: " 0 2px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "40px",
          minHeight: "400px",
          minWidth: "400px",
          maxHeight: "600px",
          maxWidth: "600px",
          backgroundColor: "#dD3D3D3",
        }}
      >
        <form className="form" onSubmit={submitHandler}>
          <div>
            <h1>Logowanie</h1>
          </div>
          {/* {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>} */}
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
            <label />
            <Button
              variant="outline-success"
              type="submit"
              style={{
                marginBottom: "1%",
                marginLeft: "50%",
              }}
            >
              Zaloguj
            </Button>
          </div>
          <div>
            <label />
            <div>
              Nie masz konta?{" "}
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
                to={`/register`}
              >
                Zarejestruj się
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
