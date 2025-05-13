'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ToggleProps {
  label: string
  checked: boolean
  onChange?: (checked: boolean) => void
  focusColor?: string
  className?: string
  disabled?: boolean
  id?: string
}

const Toggle: React.FC<ToggleProps> = ({
  label,
  checked,
  onChange,
  focusColor = 'purple-500',
  className = '',
  disabled = false,
  id,
}) => {
  const toggleId = id || `toggle-${Math.random().toString(36).substring(2, 9)}`
  const isHexOrRgb = focusColor?.startsWith('#') || focusColor?.startsWith('rgb')
  const resolvedFocusColor = isHexOrRgb ? focusColor : `var(--${focusColor}, #a855f7)`

  return (
    <div className={cn('flex items-center space-x-2', className)}>
<button
  id={toggleId}
  type="button"
  role="switch"
  aria-checked={checked}
  disabled={disabled}
  onClick={() => onChange?.(!checked)}
  className={cn(
    'relative w-12 h-6 rounded-full border transition-colors duration-200',
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    'focus:outline-none focus:ring-0'
  )}
  style={{
    backgroundColor: checked ? resolvedFocusColor : '#e5e7eb',
    borderColor: checked ? resolvedFocusColor : '#d1d5db',
  }}
>
  <span
    className={cn(
      'absolute top-1/2 -translate-y-1/2 h-[18px] w-[18px] rounded-full bg-white shadow transition-all duration-200',
      checked ? 'left-[calc(100%-22px)]' : 'left-1'
    )}
  />
</button>

      {label && (
        <label
          htmlFor={toggleId}
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

export default Toggle
