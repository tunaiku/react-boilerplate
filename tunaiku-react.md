# Tunaiku React Project Structure and Pattern

## Core Dependencies

- [ReactJS](https://reactjs.org/) ![React](https://img.shields.io/badge/v-%5E16.8-blue.svg)
- [Create React App](https://facebook.github.io/create-react-app/) ![CRA](https://img.shields.io/badge/v-%5E2.1-blue.svg)
- [Axios](https://github.com/axios/axios)![Axios](https://img.shields.io/badge/v-%5E0.1.8-blue.svg)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)![ReactRouter](https://img.shields.io/badge/v-%5E4.3-blue.svg)
- [React Loadable](https://github.com/jamiebuilds/react-loadable) ![ReactLoadable](https://img.shields.io/badge/v-%5E5.5.0-blue.svg)
- [Formik](https://github.com/jaredpalmer/formik)![Formik](https://img.shields.io/badge/v-%5E1.5.1-blue.svg)
- [Formik Persist](https://github.com/jaredpalmer/formik-persist)![FormikPersist](https://img.shields.io/badge/v-%5E1.1.0-blue.svg)
- [Yup](https://www.npmjs.com/package/yup)![Yup](https://img.shields.io/badge/v-%5E0.26.10-blue.svg)
- [js-cookie](https://github.com/js-cookie/js-cookie)![JsCookie](https://img.shields.io/badge/v-%5E2.2.0-blue.svg)
- [Formare](https://github.com/dkk94/formare)![ReactLoadable](https://img.shields.io/badge/v-%5E0.5.0--beta.29-blue.svg)
- [Classnames](https://github.com/JedWatson/classnames)![classnames](https://img.shields.io/badge/v-%5E2.2.6-blue.svg)

## Main Directory Structure

<!-- prettier-ignore -->
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

  - pages : files and features that are specific to its pages
  - shared : reusable files and features will use in core application
  - assets : all static files
    - styles : customizable global styles for application
    - images : static images folder that will use in entire app
    - jsons : static jsons files
  - environments : store all environment variables / scripts

  > > **_Note_**: Shared vs Modules Folder.

  > > > Notice in that project structure in our example folder , we have **shared** and **shared** folder. What different between this two folder is their purpose. All files in shared folder are files that we will use in example and in it's sub directory folde. In **_modules_** folder, all files in that folder just will only use in example folder and not shareable.

  > > **_Note_**: Modules folder creation

  > > > Notice in that project structure in our example folder, we currently have **modules**, it's because we have more than 1 hook. If u only have one hook in that directory, you should not put it in modules folder. This applies not only for services like hooks or context, but applies for constants, components, utils, etc.

  Example small refactor and improvement in our example folder:

  <!-- prettier-ignore -->
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

  <!-- prettier-ignore -->
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
