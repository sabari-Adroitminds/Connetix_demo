"use client";

import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import { Controller, useFormContext, FieldValues, FieldPath } from "react-hook-form";

export interface CheckBoxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  focusColor?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  focusColor = "purple-500",
  checked,
  onChange,
  className = "",
  disabled = false,
  id,
  name,
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;
  const isHexOrRgb = focusColor?.startsWith("#") || focusColor?.startsWith("rgb");
  const resolvedFocusColor = isHexOrRgb
    ? focusColor
    : `var(--${focusColor}, #a855f7)`;
  
  const formContext = useFormContext();
  
  if (formContext && name) {
    return (
      <Controller
        name={name as FieldPath<FieldValues>}
        control={formContext.control}
        render={({ field, fieldState }) => (
          <div className={`flex items-center space-x-2 ${className}`}>
            <Checkbox
              id={checkboxId}
              checked={field.value}
              onCheckedChange={(value) => {
                field.onChange(value);
                if (onChange) onChange(!!value);
              }}
              disabled={disabled}
              style={{
                backgroundColor: "white",
                color: resolvedFocusColor,
                width: "20px",
                height: "20px",
                borderColor: fieldState.invalid ? "#ef4444" : "#CCCCCC",
              } as React.CSSProperties}
              className="rounded-lg border-2 focus:outline-none focus:ring-0 size-6"
              aria-invalid={fieldState.invalid}
              ref={field.ref}
            />
            {label && (
              <label
                htmlFor={checkboxId}
                className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-font"
              >
                {label}
              </label>
            )}
            {fieldState.error && (
              <p className="text-sm text-red-500 ml-2">{fieldState.error.message}</p>
            )}
          </div>
        )}
      />
    );
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Checkbox
        id={checkboxId}
        checked={checked}
        onCheckedChange={onChange}
        disabled={disabled}
        name={name}
        style={{
          backgroundColor: "white",
          color: resolvedFocusColor,
          width: "20px",
          height: "20px",
          borderColor: "#CCCCCC",
        } as React.CSSProperties}
        className="rounded-lg border-2 focus:outline-none focus:ring-0 size-6"
      />
      {label && (
        <label
          htmlFor={checkboxId}
          className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-font"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default CheckBox;