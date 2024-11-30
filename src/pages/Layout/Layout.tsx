import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Icon from '@components/common/Icon/Icon';
import { IconName } from '@components/common/Icon/types';

import { LayoutProps } from './types';
import './styles.scss';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const testId = 'layout';
  const navigate = useNavigate();

  const onClickLogo = () => {};
  const onClickIcon = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/');
  };

  return (
    <>
      <div className="navbar" data-testid={`${testId}-navbar`}>
        <Link data-testid={`${testId}-link`} to={'/'} onClick={onClickLogo}>
          <Icon
            testId={`${testId}-logo`}
            width={130}
            height={52}
            name={IconName.MBST_LOGO}
          />
        </Link>
        <div className="navbar__cart">
          <Icon
            testId={`${testId}-icon-cart`}
            name={IconName.BAG_INACTIVE}
            onClick={onClickIcon}
          />
          <p data-testid={`${testId}-count`}>{0}</p>
        </div>
      </div>
      <div className="layout__content" data-testid={`${testId}-content`}>
        {children}
      </div>
    </>
  );
};
export default Layout;
