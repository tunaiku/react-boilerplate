import React from 'react';
import classNames from 'classnames';
import { Field } from 'formik';
import { Input, Select, Textarea } from '../inputs';
import { FormLabel, FormError, FormControl } from '../form';
import { useRegisteredRef } from 'react-register-nodes';

/**
 * @name FormField
 * @param {*} props
 */
const FormField = props => {
  const { Tag = Field, inputType = 'input', children, label, className, ...attributes } = props;

  // From the passed inputType, set the proper InputTag.
  let InputTag;
  const getInputTag = () => {
    switch (inputType) {
      case 'input':
        return Input;

      case 'select':
        return Select;

      case 'textarea':
        return Textarea;

      default:
        return null;
    }
  };

  InputTag = getInputTag();

  // Create component's ref and hook it up with the rest of the attributes.
  const ref = useRegisteredRef(attributes.name);

  return (
    <Tag
      {...attributes}
      render={innerProps => {
        const { field, form } = innerProps;

        const classes = {
          FormField: classNames(
            `Form-field`,
            form.errors[field.name] && form.touched[field.name] ? `Form-field--danger` : null
          )
        };

        return (
          <div className={classes.FormField} ref={ref}>
            <FormLabel forhtml={field.name}>{label}</FormLabel>
            <FormControl>
              <InputTag {...field} {...attributes}>
                {children}
              </InputTag>
            </FormControl>
            <FormError name={field.name} />
          </div>
        );
      }}
    />
  );
};

export default FormField;
