import React from 'react'

export default function Input() {
    return (
        <div className="relative border border-[#9CB8FF] rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label
                htmlFor="name"
                className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-[#3A3D54] text-xs font-medium text-[#9CB8FF]"
            >
                
            </label>
            <input
                type="text"
                name="name"
                id="name"
                className="block w-full border-0 p-0 bg-[#3A3D54] text-white placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder=
            />
        </div>
    )
}
