import { type PropsWithChildren } from "react";

type HeaderTypes = PropsWithChildren<{
  image: {
    src: string;
    alt: string;
  };
}>;
function Header({ image, children }: HeaderTypes) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}

export default Header;
