import { Loader2 } from 'lucide-react'
import { ButtonHTMLAttributes } from 'react'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

export function CustomButton({ children, loading, disabled, className, ...props }: CustomButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={`w-full bg-purple-500 font-semibold hover:bg-purple-600 transition-colors duration-200 h-10 text-[18px] text-white rounded-md ${
        (disabled || loading) ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
      {...props}
    >
      {loading ? <Loader2 className="animate-spin mx-auto" /> : children}
    </button>
  )
}

