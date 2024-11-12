import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { RichText } from '@/components/RichText';

/**
 * Props for `Profile`.
 */
export type ProfileProps = SliceComponentProps<Content.ProfileSlice>;

/**
 * Component for "Profile" Slices.
 */
const Profile = ({ slice }: ProfileProps): JSX.Element => {
  return (
    <section
      className="flex items-center flex-col gap-4 max-w-3xl w-full"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage
        fallbackAlt=""
        field={slice.primary.profile_picture}
        sizes="100vw"
        className="w-full max-w-[250px] max-h-[250px] rounded-full object-cover"
      />
      <RichText field={slice.primary.profile_text} />
    </section>
  );
};

export default Profile;
