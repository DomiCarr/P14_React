/**
 *
 * @param {string} placehoder
 * @param {string} value
 * @param {(s: string) => void} onChange
 */
import { useId, forwardRef } from "react"

export const Input = forwardRef(function Input({ placeholder, value, onChange, label }, ref) {
    const id = useId()
    return <div>
        <label className="form-label" htmlFor={id}>{label}</label>
        <input
            ref={ref}
            id={id}
            type="text"
            className="form-control"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>

})

Input.displayName = 'Input'