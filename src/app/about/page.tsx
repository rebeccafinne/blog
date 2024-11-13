import { Metadata } from 'next';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { Navigation } from '@/components/Navigation';
import { PostCard } from '@/components/PostCard';

// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const about = await client.getByUID('page', 'about');

  return {
    title: prismic.asText(about.data.title),
    description: about.data.meta_description,
  };
}

export default async function Index() {
  // The client queries content from the Prismic API
  const client = createClient();

  // Fetch the content of the home page from Prismic
  const about = await client.getByUID('page', 'about');

  const navigation = await client.getSingle('navigation');

  return (
    <>
      <Navigation navigation={navigation} />

      <SliceZone slices={about.data.slices} components={components} />
    </>
  );
}
