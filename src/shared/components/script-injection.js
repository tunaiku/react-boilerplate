import React, { memo } from 'react';
import Helmet from 'react-helmet';

// Component to inject array of scripts
const ScriptInjection = memo(({ content, ...rest }) => (
  <Helmet>
    <script type="text/javascript" {...rest}>
      {content}
    </script>
  </Helmet>
));

export default ScriptInjection;
