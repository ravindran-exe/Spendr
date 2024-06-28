
import Image from "next/image";
import Link from "next/link";

const HeadImg = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link href="/">
          <div className="logo">
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
            <span>Spendr</span>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default HeadImg;
