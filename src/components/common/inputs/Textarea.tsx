"use client";

import React from "react";
import { Textarea as ShadcnTextarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Controller,
  useFormContext,
  FieldValues,
  FieldPath,
} from "react-hook-form";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  variant?: "default" | "white_rounded";
  fullWidth?: boolean;
  isRequired?: boolean;
  focusColor?: string;
  rows?: number;
  name?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      variant = "default",
      className = "",
      id,
      isRequired = false,
      focusColor = "purple-500",
      rows = 4,
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

    const textareaId =
      id || `textarea-${Math.random().toString(36).substring(2, 9)}`;
    const formContext = useFormContext();

    if (formContext && name) {
      return (
        <Controller
          name={name as FieldPath<FieldValues>}
          control={formContext.control}
          render={({ field, fieldState }) => (
            <div className="w-full grid items-center gap-2.5">
              {label && (
                <Label htmlFor={textareaId} className="text-base font-medium">
                  {label}
                  {isRequired && <span className="text-black">*</span>}
                </Label>
              )}
              <div className="relative">
                <ShadcnTextarea
                  {...field}
                  ref={(e) => {
                    field.ref(e);
                    if (typeof ref === "function") ref(e);
                    else if (ref) ref.current = e;
                  }}
                  id={textareaId}
                  rows={rows}
                  className={`p-3 transition-colors duration-200 outline-none shadow-none resize-y border ${
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
                  {...props}
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
          )}
        />
      );
    }

    return (
      <div className="grid items-center gap-2.5">
        {label && (
          <Label htmlFor={textareaId} className="text-base font-medium">
            {label}
            {isRequired && <span className="text-black">*</span>}
          </Label>
        )}
        <div className="relative">
          <ShadcnTextarea
            ref={ref}
            id={textareaId}
            name={name}
            rows={rows}
            className={`p-3 transition-colors duration-200 outline-none shadow-none resize-y border placeholder:text-[16px] placeholder:font-medium ${
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
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
