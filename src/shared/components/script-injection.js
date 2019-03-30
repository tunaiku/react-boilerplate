import React, { memo } from 'react';
import Helmet from 'react-helmet';

// Component to inject array of scripts
const ScriptInjection = memo(({ options, async }) => (
  <Helmet>
    {options.length &&
      options.map(option => (
        <script type="javascript" key={option.name} src={option.src} async={option.isAsync} />
      ))}
  </Helmet>
));

export default ScriptInjection;
