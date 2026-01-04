import Container from "./Container";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <nav className="z-30">
      <Container>
        <div className="flex h-24 items-center justify-between">
          <Logo />
          <Navigation />
        </div>
      </Container>
    </nav>
  );
}
