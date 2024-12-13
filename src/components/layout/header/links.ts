import { navlink } from './newlink';

type LinkProps = { onclick: () => void };

export function links({ onclick }: LinkProps) {
  return [
    navlink({ path: '/', label: 'Home', onclick }),
    navlink({ path: '/about', label: 'About', onclick }),
    navlink({ path: '/packages', label: 'Pickle', onclick }),
  ];
}
