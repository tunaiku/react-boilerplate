# Tunaiku React Application Structure and Guide

## Application Structure

---

#### • Core Dependencies

- [ReactJS](https://reactjs.org/) ![React](https://img.shields.io/badge/v-%5E16.8-blue.svg)
- [Create React App](https://facebook.github.io/create-react-app/) ![CRA](https://img.shields.io/badge/v-%5E2.1-blue.svg)
- [Axios](https://github.com/axios/axios) ![Axios](https://img.shields.io/badge/v-%5E0.1.8-blue.svg)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start) ![ReactRouter](https://img.shields.io/badge/v-%5E4.3-blue.svg)
- [React Loadable](https://github.com/jamiebuilds/react-loadable) ![ReactLoadable](https://img.shields.io/badge/v-%5E5.5.0-blue.svg)
- [Formik](https://github.com/jaredpalmer/formik) ![Formik](https://img.shields.io/badge/v-%5E1.5.1-blue.svg)
- [Formik Persist](https://github.com/jaredpalmer/formik-persist) ![FormikPersist](https://img.shields.io/badge/v-%5E1.1.0-blue.svg)
- [Yup](https://www.npmjs.com/package/yup) ![Yup](https://img.shields.io/badge/v-%5E0.26.10-blue.svg)
- [js-cookie](https://github.com/js-cookie/js-cookie) ![JsCookie](https://img.shields.io/badge/v-%5E2.2.0-blue.svg)
- [Formare](https://github.com/dkk94/formare) ![ReactLoadable](https://img.shields.io/badge/v-%5E0.5.0--beta.29-blue.svg)
- [Classnames](https://github.com/JedWatson/classnames) ![classnames](https://img.shields.io/badge/v-%5E2.2.6-blue.svg)
- [React Font Awesome](https://github.com/FortAwesome/react-fontawesome) ![classnames](https://img.shields.io/badge/v-%5E0.1.4-blue.svg)

#### • Main Directory Structure

      ├── configs/
          ├── bootstrapper.js
          ├── index.js
          ├── loader.js
      ├── public/
      ├── build/
      ├── node_modules/
      ├── src/
        ├── pages/
              ├── example/
                  ├── modules/
                    ├── services
                        ├── example-only.hook.js
                        ├── other-example-only-other.hook.js
                        ├── example.context.js
                  ├── shared/
                      ├── services/
                          ├── example-shared.hook.js
                          ├── example-shared.context.js
                      ├── components/
                          ├── example-shared-component.js
                  ├── example.js
                  ├── index.js
                  ├── example.routes.js
          ├── shared/
              ├── components/
              ├── services/
              ├── utils/
              ├── validators/
          ├── assets/
              ├── styles/
              ├── jsons/
              ├── images/
          ├── environments/
              ├── api.env.js
              ├── other.env.js
              ├── env.js
              ├── index.js

- configs : all configuration files including configuration for server side rendering (we can add other configuration in this folder)
- public : initial static file require by create-react-app
- build : compiled files (all static files for production deployment)
- node_modules : dependency repository
- src : core application files
  - pages : files and features which describes our application structure
    - example : example feautures
      - shared: all files that will use in entire example directory and its sub directory
      - modules: all files that will use on in example directory
  - shared : reusable files and features will use entire application
  - assets : all static files
    - styles : customizable global styles for application
    - images : static images folder that will use in entire app
    - jsons : static jsons files
  - environments : store all environment variables

**_Note_**: Shared vs Modules Folder.

> Notice in that project structure in our example folder , we have **shared** and **modules** folder. What different between this two folder is in their purpose. All files in shared folder are shareable to example's sub directory forder, this is different from **modules** folder that all files in this folder are not shareable .

**_Note_**: Modules folder creation

> Notice in that project structure in our example folder, we currently have **modules** folder, it's because we have more than 1 hook. If u only have one hook in that directory, you should not put it in modules folder. This pattern is not only for services like hooks or context, but applies for constants, components, utils, etc.

Example small refactor and improvement in our example folder:

**Before**

    ├── example/
        ├── modules/
        ├── services
            ├── example-only.hook.js
            ├── other-example-only-other.hook.js
            ├── example.context.js
        ├── shared/
            ├── services/
                ├── example-shared.hook.js
                ├── example-shared.context.js
            ├── components/
                ├── example-shared-component.js
        ├── example.js
        ├── index.js
        ├── example.routes.js

**After**

     ├── example/
          ├── modules/
              ├── constants
                  ├── example.constant.js
                  ├── other-example.constant.js
          ├── shared/
              ├── services/
                  ├── example-shared.hook.js
                  ├── example-shared.context.js
              ├── components/
                  ├── example-shared-component.js
          ├── example.hook.js
          ├── example.js
          ├── index.js
          ├── example.routes.js

### • [Naming Convention](https://medium.com/@pddivine/string-case-styles-camel-pascal-snake-and-kebab-case-981407998841)

- **File name** [Kebab Case] example: `other-example.js`
- **Function name** [Camel Case] example: `const exampleFunction = () => {....}`
- **Component Name** [Pascal Case] example: `const Example = () => {...}`
- **Constant Variable Name** [Snake Case] example: `const EXAMPLE_CONSTANT = 'example'`

**Note**

> We exactly should use kebab case for component file name. But if the file is not a component, maybe like hook or constant which have same file extension `.js`, you should add prefix to that file to tell that the file is not a component. for example to create a hook file, the file name should have format like `example.hook.js` or `other-example.hook.js`, this applies to all file name for constants, contexts, etc.

## Application Guide

---

#### • Component Creation

    ├── example/
        ├── example.js

Using arrow function to declare component.

```javascript
import react from 'react';

const Example = () => <h1>Example Component</h1>;

export default Example;
```

For some case you want to use memo from react to prevent unnecessary rerender.

```javascript
import react, {memo} from 'react';

const Example = memo() => <h1>Example Component</h1>;

Example.displayName = 'Example';

export default Example;
```

#### • Add Style

    ├── example/
        ├── example.js
        ├── example.scss

```javascript
// example.js
import react from 'react';

import './example.scss';

const Example = () => <h1>Example Component</h1>;

export default Example;
```

#### • Importing File

if your component will be imported elsewhere, you should create an `index.file`. for example we have folder structure like this:

    ├── example/
          ├── modules
              ├── components
                  ├── header
                      ├── header.scss
                      ├── header.js
          ├── example.js
          ├── example.scss

and you want to import `header.js` in `example.js`, you will have code like this:

```javascript
// example.js
import react from 'react';
import Header from './modules/header/header.js'; // we write the file name twice.

{...}
```

to make our code more clean, create `index.js` in header folder that reference to `header.js`.

    ├── example/
          ├── modules
              ├── components
                  ├── header
                      ├── header.scss
                      ├── header.js
                      ├── index.js
          ├── example.js
          ├── example.scss

```javascript
// header/index.js
export { default } from './header.js';

// example.js
import react from 'react';
import Header from './modules/header'; // import header.js
```

#### • Absolute File

If you want to import file from other nested folder, and you import it using relative import. for example:

      ├── src/
          ├── pages/
              ├── example/
                  ├── example.js
                  ├── example.scss
          ├── shared/
              ├── components
                  ├── header
                      ├── header.scss
                      ├── header.js
                      ├── index.js

```javascript
// example-header.js
import Header from '../../../../shared/components/header';
```

you should use absolute import;

```javascript
// example-header.js
import Header from 'shared/components/header'; // import header js from src/shared/components/header.js
```

#### • Hooks Creation

You should treat hooks as a logic container and put all your bussines logic in hooks and import it to your component to use that bussiness logic. Hook function name must begin with 'use' preffix name. for example:

    ├── example/
          ├── example.js
          ├── example.hook.js
          ├── example.scss

```javascript
// example.hook.js
const useExample = () => {
  const myLogicFn = () => 'Example String';

  return { myLogicFn };
};

export default useExample;

// example.js
import react from 'react';
import useExample from './example.hook';

const Example = () => {
  const { myLogicFn } = useExample();

  return <h1>{myLogicFn()}</h1>;
};
```

#### • Form

You should use formik and Yup to handle controlled form in our app. Here is example of basic form creation:

    ├── pages/
        ├── example/
            ├── example.hook.js
            ├── example.js
            ├── example.schema.js
    ├── shared/
        ├── constants/
            ├── validation-messages.constantjs
            ├── regex.constantjs
        ├── components/
            ├── forms/
            ├── buttons/
        ├── validators/
            ├── phonenumber.validator.js

> example.schema.js file is validation component that we will use as default validators for our examle form. This file will export a validation schema and form default values.

```javascript
// phonenumber.validator.js

// indonesian phonenumber format validator
const phonenumberValidator = (value = '') => {
  const indicator = value.substr(0, value.indexOf('8') + 1); // get the value from first string to string in the position index of '8', include the '8'
  if (indicator === '8' || indicator === '08' || indicator === '628' || indicator === '+628') {
    return true;
  } else {
    return false;
  }
};

export default phonenumberValidator;


// validation-messages.constantjs
export const PHONENUMBER_FIELD_REQUIRED_MESSAGE = 'Phone number field is required';
export const PHONENUMBER_FIELD_WRONG_FORMAT_MESSAGE = 'Phone number format is wrong';

// regex.constant.js
export const NUMERICAL_WITH_PLUS_REGEX = /^\+?\d+$/;

// example.schema.js
import * as Yup from 'yup';
import {PHONE_NUMBER_FIELD_REQUIRED, PHONENUMBER_FIELD_WRONG_FORMAT_MESSAGE} from 'shared/constants/validation-messages.constant';
import {NUMERICAL_WITH_PLUS_REGEX} from 'shared/constants/regex.constant';
import {phonenumberValidator} from 'shared/validators/phonenumber.validator';

export const ExampleFormSchema = Yup.object().shape({
  phonenumber: Yup.string().required(PHONE_NUMBER_FIELD_REQUIRED).matches(NUMERICAL_WITH_PLUS_REGEX, PHONENUMBER_FIELD_WRONG_FORMAT_MESSAGE).test(
      "phonenumberFormat",
      VALIDATION_MESSAGES.FIELD_PHONENUMBER_WRONG_FORMAT,
      phonenumberValidator
    )
});

export const exampleFormInitialValues = {
  phonenumber: ''
};

// example.hook.js
const useExample = () => {
  const handleFormValid = ({values}) => console.log(values);

  return { handleFormValid };
};

export default useExample;

// example.js
import react from 'react';
import { Formik } from 'formik';
import { Form, FormField } from 'shared/components/form'; // you should using Form and FormField from global shared components
import {Button} from 'shared/components/buttons'
import { ExampleSchema } from './example.schema.js';
import useExample from './example.hook.js';

const Example = () => {
  const {handleFormValid} = useExample()

  return (
    <Formik
      validationSchema={ExampleFormSchema}
      defaultValues={exampleFormInitialValues}
      onSubmit={handleFormValid}>
        {({handleSubmit}) => (
          <Form>
            <FormField name="phonenumber" lable="Phonenumber" />
            <Button type="submit" theme="primary">Submit Form</Button>
          </Form>
        )}
  </Formik>)
};

export default Example;
```

if you want to use scroll to error field functionality, you need to use `<FormButton/>` component.

```javascript
// example.js
import react from 'react';
import { Formik } from 'formik';
import { Form, FormField, FormButton } from 'shared/components/form'; // you should using Form and FormField from global shared components
import { ExampleSchema } from './example.schema.js';
import useExample from './example.hook.js';

const Example = () => {
  const { handleFormValid } = useExample();

  return (
    <Formik validationSchema={ExampleFormSchema} defaultValues={exampleFormInitialValues}>
      {() => (
        <Form>
          <FormField name="phonenumber" lable="Phonenumber" />
          <FormButton type="button" theme="primary" onValid={handleFormValid}>
            Submit Form
          </FormButton>
        </Form>
      )}
    </Formik>
  );
};

export default Example;
```

#### • Route Creation

React router dom is a library, most used with reactjs to handle routing in react application. For performance improvement, using react loadable is a good solution. React loadable is a library to handle component splitting in react application. We can combine react loadable and react router to get more performant react application. Here is basic app example of using route and serve `/example` url with server side configuration support.

    ├── src/
        ├── pages/
            ├── home/
                ├── home.js
                ├── index.js
            ├── example/
                ├── example.js
                ├── index.js
            ├── not-found/
                ├── not-found.js
                ├── index.js
            ├── main.js
            ├── main.routes.js
        ├── shared
            ├── components
                ├── route-list.js // you will always use this shared component to render list of route
    ├── app.js
    ├── index.js // index.js in our src folder is file that using by create-react-app to determine that the file is root to our application.

```javascript
//example/example.js
import react from 'react';

const Example = () => <h1>Example Component</h1>;

export default Example;

// /example/index.js
export {default} from './example';

// /home/home.js
import react from 'react';

const Home = () => <h1>Home Component</h1>;

export default Home;

// /home/index.js
export {default} from './home';


// /not-found/not-found.js
import react from 'react';

const NotFound = () => <h1>Not Found Component</h1>;

export default NotFound;

// /not-found/index.js
export {default} from './not-found';

// route-list.js
import React from 'react';
import { withRouter, Switch, Redirect, Route } from 'react-router-dom';

const RouteList = ({ routes, match, location }) => (
  <Switch>
    {routes.map(route => {
      const routeUrl = match.url === '/' ? `${route.path}` : `${match.url}${route.path}`;
      return <Route {...route} key={location.pathname} path={routeUrl} />;
    })}
    <Route render={() => <Redirect to="/not-found" />} />
  </Switch>
);

export default withRouter(RouteList);
```

```javascript

// main.routes.js
import React from 'react';
import Loadable from 'react-loadable';
import { RouteList } from 'shared/components/route-list.js';

const routes = [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import(/* webpackChunkName: "home" */ './home'),
      loading: () => null,
      modules: ['home']
    })
  },
  {
    path: '/example',
    exact: true,
    component: Loadable({
      loader: () => import(/* webpackChunkName: "example" */ './example'),
      loading: () => null,
      modules: ['example']
    })
  },
  {
    path: '/not-found',
    exact: true,
    component: Loadable({
      loader: () => import(/* webpackChunkName: "not-found" */ './not-found'),
      loading: () => null,
      modules: ['not-found']
    })
  }
];

const MainRoutes = () => <RouteList routes={routes} />;

export default MainRoutes;

// main.js
import React from 'react';
import MainRoutes from './main.routes';

const Main = () => <MainRoutes/>

export default Main;

// app.js
import React from 'react';
import { render, hydrate } from 'react-dom';
import Loadable from 'react-loadable';
import Main from 'pages';
import { Frontload } from 'react-frontload';
import { BrowserRouter } from 'react-router-dom';

const App = () => (<BrowserRouter>
                    <Frontload noServerRender={true}>
                      <Main />
                    </Frontload>
                  </BrowserRouter>)


const root = document.querySelector('#root');

export default (() => {
  if (root.hasChildNodes() === true) {
    // If it's an SSR, use hydrate to get fast page loads by just
    // attaching event listeners after the initial render
    Loadable.preloadReady().then(() => {
      hydrate(<App />, root);
    });
  } else {
    // If application not running on the server, just render like normal
    render(<App />, root);
  }
})();

// src/index.js
export { default } from "./app";
```

**Note**

> As you can see, in `main.routes.js` we are set in route option `exact: true` it means tell react router that our route dont have any sub/child route. For comment `/* webpackChunkName: "not-found" */`, it tells react loadable to rename our chunks/splitted script.

#### • Add Font Awesome Icon

You can use react font awesome icon component to register and use font awesome icon in your application

    ├── src/
        ├── pages/
            ├── example/
                ├── example.js
                ├── index.js
    ...

```javascript
//example/example.js
import react from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Example = () => <h1>Example Component <FontAwesomeIcon icon="chevron-right"/></h1>;

export default Example;

// /example/index.js
export {default} from './example';
```

register your icon in `register-fa-icons` file in global utils folder

```javascript
// shared/utils/register-fa-icons.util.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const registerFaIcons = () => {
  return library.add(faChevronRight);
};

export default registerFaIcons;
```

call the `register-fa-icons.util.js` in `main.js` in the root pages folder.

```javascript
// main.js
import React from 'react';
import MainRoutes from './main.routes';
import registerFaIcons from 'shared/utils/register-fa-icons.util';

registerFaIcons(); // register font awesome icons

const Main = () => <MainRoutes />;

export default Main;
```

#### • Script Injection

If you want to inject extenal scripts or external script with url, you can use `<ScriptInjection/>` component

    ├── src/
        ├── pages/
            ├── example/
                ├── example.js
    ...

```javascript
//example/example.js
import react, { Fragment } from 'react';
import ScriptInjection from 'shared/components/script-injection'; // import script injecrtion component

const Example = () => {
  return (
    <Fragment>
      <h1>Example Component </h1>
      <ScriptInjection content="alert('custom script')" />
      <ScriptInjection src="https://my-external-script.com/script.js" />
    </Fragment>
  );
};
```

#### • Custom SEO Head tag

if you want to inject custom seo content in your specific component, you can use shared `<Head/>` component.

    ├── src/
        ├── pages/
            ├── example/
                ├── example.js
    ...

```javascript
//example/example.js
import react, { Fragment } from 'react';
import ScriptInjection from 'shared/components/script-injection'; // import script injecrtion component
import Head from 'shared/components/head';

const Example = () => {
  return (
    <Fragment>
      <Head title="My Example Page" />
      <h1>Example Component </h1>
    </Fragment>
  );
};
```
