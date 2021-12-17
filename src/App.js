import React from "react";
import "./App.css";
import Row from "./components/Row";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div>
          <h1>Buttons</h1>
          <Row>
            <Wrapper btn="" text="<Button />" />
          </Row>

          <Row>
            <Wrapper
              btn={{ variant: "outline" }}
              text="<Button variant='outline'/>"
            />
            <Wrapper
              btn={{ variant: "text" }}
              text="<Button variant='text'/>"
            />
          </Row>

          <Row>
            <Wrapper
              btn={{ disableShadow: true }}
              text="<Button disableShadow/>"
            />
          </Row>

          <Row>
            <Wrapper btn={{ disabled: true }} text="<Button disabled/>" />
            <Wrapper
              btn={{ variant: "text", disabled: true }}
              text="<Button variant='text' disabled/>"
            />
          </Row>

          <Row>
            <Wrapper
              btn={{ startIcon: "local_grocery_store" }}
              text="<Button startIcon='local_grocery_store'/>"
            />
            <Wrapper
              btn={{ endIcon: "local_grocery_store" }}
              text="<Button endIcon='local_grocery_store'/>"
            />
          </Row>

          <Row>
            <Wrapper btn={{ size: "sm" }} text="<Button size='sm'/>" />
            <Wrapper btn={{ size: "md" }} text="<Button size='md'/>" />
            <Wrapper btn={{ size: "lg" }} text="<Button size='lg'/>" />
          </Row>

          <Row>
            <Wrapper
              btn={{ color: "default" }}
              text="<Button color='default'/>"
            />
            <Wrapper
              btn={{ color: "primary" }}
              text="<Button color='primary'/>"
            />
            <Wrapper
              btn={{ color: "secondary" }}
              text="<Button color='secondary'/>"
            />
            <Wrapper
              btn={{ color: "danger" }}
              text="<Button color='danger'/>"
            />
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
