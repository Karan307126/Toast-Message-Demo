import "./App.css";
import useToast from "./hooks/use-toast";

function App() {
  const { ToastComponent, openToast } = useToast();

  return (
    <div className="App">
      {ToastComponent}
      <div className="wrapper">
        <div className="container">
          <div
            className="success btn"
            onClick={() =>
              openToast({
                type: "success",
                message: "This is a success message!",
              })
            }
          >
            Success Toast
          </div>
          <div
            className="error btn"
            onClick={() =>
              openToast({
                type: "error",
                message: "This is an error message!",
              })
            }
          >
            Error Toast
          </div>
        </div>
        <div className="container">
          <div
            className="info btn"
            onClick={() =>
              openToast({
                type: "info",
                message: "This is an info message!",
              })
            }
          >
            Info Toast
          </div>
          <div
            className="warning btn"
            onClick={() =>
              openToast({
                type: "warning",
                message: "This is a warning message!",
              })
            }
          >
            Warning Toast
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
