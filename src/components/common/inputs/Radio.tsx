'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface RadioProps {
  label: string
  checked: boolean
  onChange?: (checked: boolean) => void
  focusColor?: string
  className?: string
  disabled?: boolean
  id?: string
}

const Radio: React.FC<RadioProps> = ({
  label,
  checked,
  onChange,
  focusColor = 'purple-500',
  className = '',
  disabled = false,
  id,
}) => {
  const radioId = id || `radio-${Math.random().toString(36).substring(2, 9)}`
  const isHexOrRgb = focusColor?.startsWith('#') || focusColor?.startsWith('rgb')
  const resolvedFocusColor = isHexOrRgb ? focusColor : `var(--${focusColor}, #a855f7)`

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <button
        id={radioId}
        type="button"
        role="radio"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={cn(
          'w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors',
          'focus:outline-none focus:ring-0',
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        )}
        style={{
          borderColor: '#ccc',
        }}
      >
        {checked && (
          <div
            className="rounded-full"
            style={{
              width: 12,
              height: 12,
              backgroundColor: resolvedFocusColor,
            }}
          />
        )}
      </button>
      {label && (
        <label
          htmlFor={radioId}
          className={cn(
            'text-sm font-medium leading-none',
            disabled && 'cursor-not-allowed opacity-70'
          )}
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default Radio
