import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function registerFaIcons() {
  return library.add(faUser);
}
