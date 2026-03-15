"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

interface NavLink {
  id: string;
  label: string;
}

interface HeaderProps {
  links: NavLink[];
  voltar?: boolean;
}

export default function Header({ links, voltar = false }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Image
        src="/logo.png"
        alt="logo"
        className={styles.logo}
        width={52}
        height={52}
      />
      <nav>
        {links.map((link) => (
          <a key={link.id} href={link.id}>
            {link.label}
          </a>
        ))}
        {voltar && <Link href="/">Voltar</Link>}
      </nav>
    </header>
  );
}
