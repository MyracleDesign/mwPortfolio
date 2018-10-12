// FontAwesome 5
import {
  library,
  dom
} from '@fortawesome/fontawesome-free'

// FontAwesome 5 Icon Sets
import solid from '@fortawesome/fontawesome-free/js/solid';
import regular from '@fortawesome/fontawesome-free/js/regular';
import brands from '@fortawesome/fontawesome-free/js/brands';

// Populate FontAwesome 5 icon library
if (library) {
  library.add(solid);
  library.add(regular);
  library.add(brands);
}

if (dom) {
  dom.watch();
}
