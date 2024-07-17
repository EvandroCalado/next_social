import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { IconCat } from '@tabler/icons-react';
import Link from 'next/link';

export const TopBar = () => {
  return (
    <Navbar
      maxWidth="xl"
      className="bg-gradient-to-r from-cyan-400 to-cyan-700"
      classNames={{
        item: ['text-xl', 'text-white', 'uppercase'],
      }}
    >
      <NavbarBrand as={Link} href="/" className="flex items-center gap-2">
        <IconCat size={40} className="text-white" />
        <div className="flex text-3xl font-bold">
          <span className="text-gray-900">Next</span>
          <span className="text-gray-200">Social</span>
        </div>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem as={Link} href="/members">
          Matches
        </NavbarItem>
        <NavbarItem as={Link} href="/list">
          Listas
        </NavbarItem>
        <NavbarItem as={Link} href="/messages">
          Mensagens
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Button variant="bordered" className="text-white">
          Entrar
        </Button>
        <Button variant="bordered" className="text-white">
          Registar
        </Button>
      </NavbarContent>
    </Navbar>
  );
};
