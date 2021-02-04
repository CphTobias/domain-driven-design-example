import React from "react";
import { ButtonPrimary, ButtonSecondary } from "../styles";

function Button({ secondary, css, ...props }) {
	if ((!css && !secondary) || css === "primary") {
		return <ButtonPrimary {...props} />;
	} else if (css === "secondary" || secondary) {
		return <ButtonSecondary {...props} />;
	}
	return <ButtonPrimary {...props} />;
}

export { Button };
