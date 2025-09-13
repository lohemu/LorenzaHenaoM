import { NavLink } from 'react-router-dom';

export default function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-xl transition ${isActive ? 'font-semibold underline' : 'opacity-80 hover:opacity-100'}`
      }
    >
      {children}
    </NavLink>
  );
}
