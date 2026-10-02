import React from 'react';

interface CornerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  asAnchor?: boolean;
  href?: string;
}

export const CornerButton: React.FC<CornerButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  onClick,
  asAnchor = false,
  href,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs tracking-wider',
    md: 'px-6 py-2.5 text-sm tracking-widest',
    lg: 'px-8 py-3.5 text-base tracking-widest',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#c5a059] text-[#080809] hover:bg-[#d8b46e] border border-[#d8b46e]/40 font-semibold shadow-[0_0_20px_rgba(197,160,89,0.25)] hover:shadow-[0_0_30px_rgba(197,160,89,0.45)]',
    secondary:
      'bg-[#18181b] text-[#f4f4f5] hover:bg-[#27272a] border border-[#3f3f46]/60 font-medium hover:border-[#c5a059]/50 shadow-sm',
    outline:
      'bg-transparent text-[#e4e4e7] hover:text-[#c5a059] border border-[#3f3f46] hover:border-[#c5a059] font-medium backdrop-blur-sm',
    ghost:
      'bg-transparent text-[#a1a1aa] hover:text-white border border-transparent hover:border-[#27272a] font-medium',
  }[variant];

  const cornerColor = variant === 'primary' ? 'border-[#080809]' : 'border-[#c5a059]';

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2.5 uppercase font-heading select-none">
      {icon && iconPosition === 'left' && <span className="transition-transform group-hover:-translate-x-0.5 duration-200">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-1 duration-200">{icon}</span>}
    </span>
  );

  const cornerDecorations = (
    <>
      {/* Top-Left Corner Accent */}
      <span
        aria-hidden="true"
        className={`absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 ${cornerColor} opacity-70 group-hover:opacity-100 group-hover:w-2.5 group-hover:h-2.5 transition-all duration-300 pointer-events-none`}
      />
      {/* Top-Right Corner Accent */}
      <span
        aria-hidden="true"
        className={`absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 ${cornerColor} opacity-70 group-hover:opacity-100 group-hover:w-2.5 group-hover:h-2.5 transition-all duration-300 pointer-events-none`}
      />
      {/* Bottom-Left Corner Accent */}
      <span
        aria-hidden="true"
        className={`absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 ${cornerColor} opacity-70 group-hover:opacity-100 group-hover:w-2.5 group-hover:h-2.5 transition-all duration-300 pointer-events-none`}
      />
      {/* Bottom-Right Corner Accent */}
      <span
        aria-hidden="true"
        className={`absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 ${cornerColor} opacity-70 group-hover:opacity-100 group-hover:w-2.5 group-hover:h-2.5 transition-all duration-300 pointer-events-none`}
      />
      {/* Ambient Glow sweep */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"
      />
    </>
  );

  if (asAnchor && href) {
    return (
      <a
        href={href}
        className={`group relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 active:scale-[0.98] cursor-pointer whitespace-nowrap ${sizeClasses} ${variantClasses} ${className}`}
      >
        {cornerDecorations}
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 active:scale-[0.98] cursor-pointer whitespace-nowrap ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {cornerDecorations}
      {content}
    </button>
  );
};
