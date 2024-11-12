import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export const Socials = () => {
  return (
    <span className="inline-flex gap-x-2.5	items-center">
      <a href="https://github.com/rebeccafinne" target="_blank">
        <FaGithub className="size-4 opacity-65 hover:opacity-100 hover:scale-105" />
      </a>
      <a href="https://www.linkedin.com/in/rebecca-finne/" target="_blank">
        <FaLinkedinIn className="size-4 opacity-65 hover:opacity-100 hover:scale-105" />
      </a>
      <h3 className=" opacity-65 hover:opacity-100 hover:scale-105">
        rebecca@finne.se
      </h3>
    </span>
  );
};
