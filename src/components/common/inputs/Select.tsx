"use client";

import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Controller, useFormContext, FieldValues, FieldPath } from "react-hook-form";

export interface SelectProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  variant?: 'default' | 'white_rounded';
  fullWidth?: boolean;
  isRequired?: boolean;
  focusColor?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  className?: string;
}

const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectProps
>(
  ({ 
    label, 
    error, 
    options, 
    variant = 'default', 
    className = '', 
    id, 
    isRequired = false,
    focusColor = 'purple-500',
    placeholder = 'Select an option',
    name,
    ...props 
  }, ref) => {
    // Handle both tailwind class names and direct color values
    const isHexOrRgb = focusColor.startsWith('#') || focusColor.startsWith('rgb');
    const focusColorValue = isHexOrRgb ? focusColor : `var(--${focusColor}, #a855f7)`;

    const selectId = id || `select-${Math.random().toString(36).substring(2, 9)}`;
    const formContext = useFormContext();
    
    if (formContext && name) {
      return (
        <Controller
          name={name as FieldPath<FieldValues>}
          control={formContext.control}
          render={({ field, fieldState }) => (
            <div className="grid items-center gap-2.5">
              {label && (
                <Label htmlFor={selectId} className="text-base font-medium">
                  {label}{isRequired && <span className="text-black">*</span>}
                </Label>
              )}
              <SelectPrimitive.Root
                onValueChange={field.onChange}
                defaultValue={field.value}
                {...props}
              >
                <div className="relative">
                  <SelectPrimitive.Trigger
                    ref={ref}
                    id={selectId}
                    className={cn(
                      "flex h-14 w-full items-center justify-between rounded-md px-3 py-5 text-left outline-none transition-colors duration-200 border",
                      variant === 'white_rounded' ? '!border-none bg-white' : 'border-gray-200',
                      fieldState.invalid ? 'border-red-500' : '',
                      className
                    )}
                    style={{
                      ['--focus-color' as string]: focusColorValue,
                      boxShadow: 'none',
                    } as React.CSSProperties}
                    aria-invalid={fieldState.invalid}
                  >
                    <SelectPrimitive.Value className='text-[16px] font-medium text-font'  placeholder={placeholder} />
                    <SelectPrimitive.Icon asChild>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </SelectPrimitive.Icon>
                  </SelectPrimitive.Trigger>
                  <SelectPrimitive.Portal>
                    <SelectPrimitive.Content
                      className=" z-50  w-full overflow-hidden rounded-md border border-gray-200 bg-white text-popover-foreground shadow-md animate-in fade-in-80"
                      position="popper"
                      align="start"
                      sideOffset={5}
                    >
                      <SelectPrimitive.Viewport className="p-1">
                        {options.map((option) => (
                          <SelectPrimitive.Item
                            key={option.value}
                            value={option.value}
                            className="relative flex cursor-default select-none items-center rounded-sm py-2.5 px-3 text-sm outline-none data-[highlighted]:bg-gray-100 data-[highlighted]:text-gray-900"
                          >
                            <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                            <SelectPrimitive.ItemIndicator className="absolute right-2 flex items-center justify-center">
                              <Check className="h-4 w-4" />
                            </SelectPrimitive.ItemIndicator>
                          </SelectPrimitive.Item>
                        ))}
                      </SelectPrimitive.Viewport>
                    </SelectPrimitive.Content>
                  </SelectPrimitive.Portal>
                </div>
              </SelectPrimitive.Root>
                <div className="h-5 min-h-5">

              {fieldState.error && (
                <p className="text-sm text-red-500">{fieldState.error.message}</p>
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
          <Label htmlFor={selectId} className="text-base font-medium">
            {label}{isRequired && <span className="text-black">*</span>}
          </Label>
        )}
        <SelectPrimitive.Root {...props}>
          <div className="relative">
            <SelectPrimitive.Trigger
              ref={ref}
              id={selectId}
              className={cn(
                "flex h-14 w-full items-center justify-between rounded-md px-3 py-5 text-left outline-none transition-colors duration-200 border",
                variant === 'white_rounded' ? '!border-none bg-white' : 'border-gray-200',
                error ? 'border-red-500' : '',
                className
              )}
              style={{
                ['--focus-color' as string]: focusColorValue,
                boxShadow: 'none',
              } as React.CSSProperties}
              aria-invalid={!!error}
            >
              <SelectPrimitive.Value placeholder={placeholder} />
              <SelectPrimitive.Icon asChild>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>
            <SelectPrimitive.Portal>
              <SelectPrimitive.Content
                className="relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white text-popover-foreground shadow-md animate-in fade-in-80"
                position="popper"
                align="center"
                sideOffset={5}
              >
                <SelectPrimitive.Viewport className="p-1">
                  {options.map((option) => (
                    <SelectPrimitive.Item
                      key={option.value}
                      value={option.value}
                      className="relative flex cursor-default select-none items-center rounded-sm py-2.5 px-3 text-sm outline-none data-[highlighted]:bg-gray-100 data-[highlighted]:text-gray-900"
                    >
                      <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                      <SelectPrimitive.ItemIndicator className="absolute right-2 flex items-center justify-center">
                        <Check className="h-4 w-4" />
                      </SelectPrimitive.ItemIndicator>
                    </SelectPrimitive.Item>
                  ))}
                </SelectPrimitive.Viewport>
              </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
          </div>
        </SelectPrimitive.Root>
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);


Select.displayName = 'Select';

export default Select;