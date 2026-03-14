import React, { createContext, useContext } from "react";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState
} from "react-hook-form";

import { cn } from "../../utils/cn";
import { Label } from "./label";

export const Form = FormProvider;

const FormFieldContext = createContext({});
const FormItemContext = createContext({});

export function FormField(props) {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
}

export function useFormField() {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);

  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField must be used inside FormField");
  }

  const id = itemContext.id;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-description`,
    formMessageId: `${id}-message`,
    ...fieldState
  };
}

export function FormItem({ className, ...props }) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={cn("grid gap-2", className)} {...props} />
    </FormItemContext.Provider>
  );
}

export function FormLabel({ className, ...props }) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      className={cn(error && "text-red-500", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}

export function FormControl({ children, ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return React.cloneElement(children, {
    id: formItemId,
    "aria-describedby": error
      ? `${formDescriptionId} ${formMessageId}`
      : formDescriptionId,
    "aria-invalid": !!error,
    ...props
  });
}

export function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      id={formDescriptionId}
      className={cn("text-sm text-gray-500", className)}
      {...props}
    />
  );
}

export function FormMessage({ className, children, ...props }) {
  const { error, formMessageId } = useFormField();

  const message = error ? error.message : children;

  if (!message) return null;

  return (
    <p
      id={formMessageId}
      className={cn("text-sm text-red-500", className)}
      {...props}
    >
      {message}
    </p>
  );
}