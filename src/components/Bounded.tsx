import clsx from 'clsx';

interface Props {
  as?: keyof JSX.IntrinsicElements; // Gör "as" valfri och tillåter HTML-taggar
  size?: string; // Typa storleken med specifika alternativ
  children: React.ReactNode; // Tillåt fler typer av barn
  className?: string; // Gör className valfri
}

export function Bounded({
  as: Comp = 'div',
  size = 'base',
  className,
  children,
}: Props) {
  return (
    <Comp className={clsx('px-4 py-8 md:px-6 md:py-10 lg:py-12', className)}>
      <div
        className={clsx(
          'mx-auto w-full',
          size === 'small' && 'max-w-xl',
          size === 'base' && 'max-w-3xl',
          size === 'wide' && 'max-w-4xl',
          size === 'widest' && 'max-w-6xl'
        )}
      >
        {children}
      </div>
    </Comp>
  );
}
