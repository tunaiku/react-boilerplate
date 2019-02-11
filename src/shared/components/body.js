import React, { memo } from 'react';

const Body = memo(({ children }) => <main className="container main-content">{children}</main>);

export default Body;
