import React from "react";
import { Input as TextInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Controller,
  useFormContext,
  FieldValues,
  FieldPath,
} from "react-hook-form";
import clsx from "clsx";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: "default" | "white_rounded";
  fullWidth?: boolean;
  isRequired?: boolean;
  focusColor?: string;
  name: string;
  containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      variant = "default",
      className = "",
      isRequired = false,
      focusColor = "purple-500",
      containerClassName = "",
      name,
      ...props
    },
    ref
  ) => {
    const isHexOrRgb =
      focusColor.startsWith("#") || focusColor.startsWith("rgb");
    const focusColorValue = isHexOrRgb
      ? focusColor
      : `var(--${focusColor}, #a855f7)`;

    const inputId = `input-${Math.random().toString(36).substring(2, 9)}`;
    const formContext = useFormContext();

    if (formContext) {
      return (
        <Controller
          name={name as FieldPath<FieldValues>}
          control={formContext.control}
          render={({ field, fieldState }) => (
            <div className={clsx("shrink grid h-24", containerClassName)}>
              <div className="space-y-1">
                {label && (
                  <Label htmlFor={inputId} className="text-base font-medium">
                    {label}
                    {isRequired && <span className="text-black">*</span>}
                  </Label>
                )}
                <div className="relative">
                  <TextInput
                    {...field}
                    {...props}
                    ref={field.ref}
                    id={inputId}
                    className={`w-full py-5 transition-colors duration-200 outline-none shadow-none border ${
                      variant === "white_rounded"
                        ? "!border-none bg-white"
                        : "border-gray-200"
                    } ${fieldState.invalid ? "border-red-500" : ""} ${className}`}
                    style={
                      {
                        ["--focus-color" as string]: focusColorValue,
                        boxShadow: "none",
                      } as React.CSSProperties
                    }
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor =
                        variant === "white_rounded"
                          ? "#dc2626"
                          : isHexOrRgb
                          ? focusColor
                          : `var(--focus-color)`;
                      e.currentTarget.style.borderWidth = "1px";
                      if (props.onFocus) props.onFocus(e);
                    }}
                    onBlur={(e) => {
                      field.onBlur();
                      e.currentTarget.style.borderColor =
                        variant === "white_rounded" ? "#ef4444" : "#F0ECF3";
                      if (props.onBlur) props.onBlur(e);
                    }}
                    aria-invalid={fieldState.invalid}
                  />
                </div>
                <div className="h-5 min-h-5">
                  {fieldState.error && (
                    <p className="text-sm text-red-500">
                      {fieldState.error.message}
                    </p>
                  )}
                  {error && !fieldState.error && (
                    <p className="text-sm text-red-500">{error}</p>
                  )}
                </div>
              </div>
            </div>
          )}
        />
      );
    }

    return (
      <div className="grid h-24 ">
        <div className="space-y-1">
          {label && (
            <Label htmlFor={inputId} className="text-base font-medium">
              {label}
              {isRequired && <span className="text-black">*</span>}
            </Label>
          )}
          <div className="relative">
            <TextInput
              ref={ref}
              id={inputId}
              name={name}
              className={`py-5 transition-colors duration-200 outline-none shadow-none border ${
                variant === "white_rounded"
                  ? "!border-none bg-white"
                  : "border-gray-200"
              } ${className}`}
              style={
                {
                  ["--focus-color" as string]: focusColorValue,
                  boxShadow: "none",
                } as React.CSSProperties
              }
              onFocus={(e) => {
                e.currentTarget.style.borderColor =
                  variant === "white_rounded"
                    ? "#dc2626"
                    : isHexOrRgb
                    ? focusColor
                    : `var(--focus-color)`;
                e.currentTarget.style.borderWidth = "1px";
                if (props.onFocus) props.onFocus(e);
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor =
                  variant === "white_rounded" ? "#ef4444" : "#F0ECF3";
                if (props.onBlur) props.onBlur(e);
              }}
              aria-invalid={!!error}
              {...props}
            />
          </div>
          <div className="h-5 min-h-5">
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;