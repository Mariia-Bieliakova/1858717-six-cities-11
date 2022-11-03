import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
}

function Layout({children}: LayoutProps): JSX.Element {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo type="header"/>
            </div>
            <Navigation />
          </div>
        </div>
      </header>
      {children}
    </>
  );
}

export default Layout;
