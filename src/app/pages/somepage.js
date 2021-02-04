import React from "react";
import { Button } from "../../components/Button";
import Styles, { ButtonSecondary } from "../../styles";

function SomePage() {
  return (
    <>
      <div>Some page</div>
      <Styles.ButtonPrimary>Primary button</Styles.ButtonPrimary>
      <ButtonSecondary>Secondary button</ButtonSecondary>
      <Button>Primary button</Button>
      <Button secondary>Secondary button</Button>
      <Button css="primary">Secondary button</Button>
    </>
  );
}

export { SomePage };
