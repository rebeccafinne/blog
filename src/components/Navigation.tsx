import { Client, Content, isFilled } from '@prismicio/client';
import { PrismicLink } from '@prismicio/react';

export const Navigation = async ({
  client,
}: {
  client: Client<Content.AllDocumentTypes>;
}): Promise<JSX.Element> => {
  const navigation = await client.getSingle('navigation');

  return (
    <nav className="font-bold text-xl self-center w-screen grid grid-cols-1 justify-items-center">
      <div className="flex flex-wrap justify-center gap-10">
        {isFilled.group(navigation.data.menu_items) &&
          navigation.data.menu_items.map((item) => {
            return (
              <div key={item.label} className="inline-block	hover:underline">
                <PrismicLink field={item.link}>{item.label}</PrismicLink>
              </div>
            );
          })}
      </div>
    </nav>
  );
};
