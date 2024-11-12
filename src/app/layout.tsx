import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import './styles.css';
import { Toaster } from 'react-hot-toast';
import { Footer } from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="https://prismic.io/favicon.ico"
        />
      </head>
      <body className="flex flex-col items-center bg-stone-50">
        <div className="min-h-screen flex flex-col">
          <div className="bg-white max-w-7xl border-x border-solid border-gray-200 px-12 w-full flex flex-col flex-1 gap-8 items-center text-slate-700">
            <Toaster />
            {children}
            <PrismicPreview repositoryName={repositoryName} />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
