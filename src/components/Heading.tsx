import clsx from 'clsx';

interface Props {
  as?: keyof JSX.IntrinsicElements; // Gör "as" valfri och tillåter HTML-taggar
  size?: string; // Typa storleken med specifika alternativ
  children: React.ReactNode; // Tillåt fler typer av barn
  className?: string; // Gör className valfri
}

export const Heading = ({
  as: Comp = 'h1',
  size = '4xl',
  children,
  className,
}: Props) => {
  return (
    <Comp
      className={clsx(
        'font-sans font-semibold tracking-tighter text-slate-800',
        size === '4xl' && 'text-3xl md:text-4xl',
        size === '3xl' && 'text-3xl',
        size === '2xl' && 'text-2xl',
        size === 'xl' && 'text-xl',
        className
      )}
    >
      {children}
    </Comp>
  );
};
