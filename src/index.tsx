import './index.css';
import {store} from './Redux/State';
import {renderTree} from './renderTree';


store.subscribe(renderTree);
renderTree();

