import React from 'react'

type QuantitySelectorProps = {
    value: number
    onChange: (delta: number) => void // delta: -1 or +1
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
    value,
    onChange,
}) => {
    return (
        <div className="flex items-center justify-between px-2  border border-gray-300 rounded-full bg-gray-50 text-gray-700 font-medium w-[71px] h-[20px]">
            <button
                onClick={() => onChange(-1)}
                className="text-[10px] font-500 text-navy hover:text-gray-900"
            >
                −
            </button>
            <span className="text-[10px] text-navy font-500">{value}</span>
            <button
                onClick={() => onChange(1)}
                className="text-[10px] font-500 text-navy hover:text-gray-900"
            >
                +
            </button>
        </div>
    )
}

export default QuantitySelector
