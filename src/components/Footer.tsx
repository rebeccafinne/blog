import { Socials } from './Socials';

export const Footer = () => {
  return (
    <footer className="flex flex-row justify-evenly	items-center	w-full  py-12 bg-gray-200	">
      <h2 className="text-xl">Let&apos;s keep in touch!</h2>
      <Socials />
    </footer>
  );
};
