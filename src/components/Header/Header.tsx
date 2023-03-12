import LinkItem from "../LinkItem/LinkItem";

export const Header = () => {
  return (
    <header className="flex justify-end bg-white text-gray-50 font-bold mb-8">
      <LinkItem href="/" title="Current Weather" />
      <LinkItem href="/forecast" title="Weather forecast" />
      <LinkItem href="/map" title="Weather map" />
    </header>
  );
};

export default Header;
