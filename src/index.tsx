import './index.css';
import {store} from './components/Redux/State';
import {renderTree} from './renderTree';


store.subscribe(renderTree);
renderTree();

