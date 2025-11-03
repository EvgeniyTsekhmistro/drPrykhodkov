import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      variant: {
        default: "rounded-[20px] border border-white px-[21px] py-[10.5px] text-white bg-black",
        link: "bg-transparent text-light-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
