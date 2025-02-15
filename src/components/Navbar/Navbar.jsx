import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { NavWrapper, NavH1, ThemeButton } from './styles'


const Navbar = ({ theme, toggleTheme }) => {
  return (
    <NavWrapper>
      <NavH1>Dunia Goncalves</NavH1>
      <ThemeButton onClick={toggleTheme}>
        {theme === 'light' ? <FaRegMoon />: <FaRegSun /> }
      </ThemeButton>
    </NavWrapper>
  );
};

export default Navbar;
