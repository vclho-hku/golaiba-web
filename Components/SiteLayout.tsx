import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const SiteLayout = ({ children }: Props ) => (
  <div>
    <div>navbar</div>
    <div>{children}</div>
    <div>footer</div>
  </div>
)

export default SiteLayout;