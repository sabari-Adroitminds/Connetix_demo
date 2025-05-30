import React from 'react'

interface ITermsAndCondition {
    className?: string;
    }
const TermsAndCondition:React.FC<ITermsAndCondition> = ({className}) => {
  return (
      <div className={"mb-4 md:mb-0 w-full mt-10" + (className ? ` ${className}` : '')}>
          © 2025 Connetix PTY LTD |{" "}
          <a href="#" className="underline">
              Privacy & Terms & Conditions
          </a>
      </div>
  )
}

export default TermsAndCondition