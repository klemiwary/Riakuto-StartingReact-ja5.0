import { cn } from "~/lib/utils.ts";

interface FieldProps {
  children: React.ReactNode;
  className?: string;
}

export const Field = ({ children, className }: FieldProps) => {
  return (
    <fieldset className={cn("mt-2 mb-6 flex flex-col gap-2", className)}>
      {children}
    </fieldset>
  );
};

export const FieldError = ({ children, className }: FieldProps) => {
  return (
    <div className={cn("text-sm text-red-600", className)}>{children}</div>
  );
};
