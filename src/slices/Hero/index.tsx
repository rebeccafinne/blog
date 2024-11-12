// ./src/slices/Hero/index.tsx

import { Content } from '@prismicio/client';
import { SliceComponentProps, PrismicText } from '@prismicio/react';
import { RichText } from '@/components/RichText';
import { PrismicNextImage } from '@prismicio/next';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      className="flex items-center flex-col gap-4 max-w-3xl w-full"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage
        fallbackAlt=""
        field={slice.primary.image}
        sizes="100vw"
        className="w-full max-w-[250px] max-h-[250px] rounded-full object-cover"
      />
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          <PrismicText field={slice.primary.title} />
        </h1>
        <div className="text-center	">
          <RichText field={slice.primary.description} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
