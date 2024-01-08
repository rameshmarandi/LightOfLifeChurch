import React from 'react';

import DrawerStack from './DrawerStack';

export default function MainNavigation(props) {
  return (
    <>
      <DrawerStack isAdmin={false} />
    </>
  );
}
