import { Hello } from './Hello';
import { Info } from './Info';

// Type Issue: Cannot find module './App.module.css' or its corresponding type declarations.
// import * as styles from './App.module.css';

// Enabling default imports in Rspack does not work (as defined in https://rspack.rs/guide/tech/css#css-modules)
import styles from './App.module.css';

export const App = () => (
  <div className={styles.app}>
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <Info />
  </div>
);
