import React, { memo } from 'react';
import Helmet from 'react-helmet';

const AsyncScriptsInjection = memo(({ src }) => (
  <Helmet>{src.length && src.map(src => <script type="javascript" key={src} src={src} />)}</Helmet>
));

export default AsyncScriptsInjection;
