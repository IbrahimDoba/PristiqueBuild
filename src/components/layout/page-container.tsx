import { cn } from "@/lib/utils";

type PageContainerProps = React.HtmlHTMLAttributes<HTMLDivElement>;

export function PageContainer({
  children,
  className,
  ...props
}: PageContainerProps) {
  return (
    <div
      className={cn("mx-auto h-full w-full max-w-7xl px-6", className)}
      {...props}
    >
      {children}
    </div>
  );
}
