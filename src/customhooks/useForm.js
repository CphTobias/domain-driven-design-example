import React from "react";

function useForm(initialValues = {}) {
	const [values, setValues] = React.useState(initialValues);

	function handleChange(e) {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	}

	return {
		values,
		setValues,
		handleChange,
	};
}

export { useForm };
