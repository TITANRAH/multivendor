import React from "react";
import { Textarea } from "../ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
interface Props {
  name: string;
  label: string;
  required: boolean;
}

function TextAreaInput(props: Props) {
  const { name, label, required } = props;
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className="px-2">
          <FormLabel className="text-slate-600 dark:text-slate-50">
            {label} {required && <span className="text-red-600">*</span>}
          </FormLabel>
          <FormControl>
            <Textarea
              className="min-h-72 border-slate-300 text-slate-600 dark:text-slate-50 focus-within:border-lime-600"
              placeholder={label}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default TextAreaInput;
