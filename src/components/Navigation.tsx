'use client';
import { isFilled } from '@prismicio/client';
import { PrismicLink } from '@prismicio/react';
import { NavigationDocument } from '../../prismicio-types';
import { usePathname } from 'next/navigation';

export const Navigation = ({
  navigation,
}: {
  navigation: NavigationDocument<string>;
}): Promise<JSX.Element> => {
  const pathname = usePathname();
  let reformatPath = pathname.replace(/^\//, '');

  if (reformatPath === '') {
    reformatPath = 'home';
  }

  return (
    <nav className="font-bold text-xl self-center w-screen grid grid-cols-1 justify-items-center py-3.5 sticky top-0 z-10 bg-gray-200	">
      <div className="flex flex-wrap justify-center gap-10">
        {isFilled.group(navigation.data.menu_items) &&
          navigation.data.menu_items.map((item) => {
            const isActive = reformatPath === item.link.text;
            return (
              <div
                key={item.label}
                className={`inline-block	hover:underline ${isActive ? 'scale-1.5 underline' : ''} `}
              >
                <PrismicLink field={item.link}>{item.label}</PrismicLink>
              </div>
            );
          })}
      </div>
    </nav>
  );
};
