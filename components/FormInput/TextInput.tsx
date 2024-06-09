import React from "react";
import { Control, ControllerRenderProps, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface Props {
  name: string;
  label: string;
  required: boolean;
  placeholder: string;
}

function TextInput(props: Props) {
  const { name, label, required, placeholder } = props;

  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className="px-2 mb-3">
          <FormLabel className="text-slate-600 dark:text-slate-50">
            {label} {required && <span className="text-red-600">*</span>}
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              type="text"
              className="border border-slate-300 text-slate-600 dark:text-slate-50 rounded-md p-2 focus-within:border-lime-600"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default TextInput;
