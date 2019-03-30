import React from "react";
import { connect } from "formik";
import { scrollToFieldError } from "shared/utils/form";
import { useOrderedNodes } from "react-register-nodes";
import { Button } from "shared/components/buttons";

const FormButton = props => {
  const { formik, onError, onValid, children, ...rest } = props;
  const allFieldRefs = useOrderedNodes();

  const handleSubmit = e => {
    if (!formik.isValid) {
      return scrollToFieldError(formik, allFieldRefs);
    }

    return onValid(formik.values);
  };

  return (
    <Button {...rest} theme="secondary" onClick={handleSubmit}>
      {children}
    </Button>
  );
};

export default connect(FormButton);
