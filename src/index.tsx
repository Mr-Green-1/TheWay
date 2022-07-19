import React from 'react';
import './index.css';
import {subscribe} from './Redux/State';
import {renderTree} from './renderTree';


subscribe(renderTree);



