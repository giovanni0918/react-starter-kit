import React, {Component} from 'react';
import Github from './Github';

const View1 = () => (
  <div id='View1' className='wrapper'>
    <h2 className='ViewTitle'>View 1</h2>
    <Github username='giovanni0918'/>
  </div>
);

const View2 = () => (
  <div id='View2' className='wrapper'>
    <h2 className='ViewTitle'>View 2</h2>
    <Github username='juan1003'/>
  </div>
);

const View3 = () => (
  <div id='View3' className='wrapper'>
    <h2 className='ViewTitle'>View 3</h2>
    <Github username='marcmaceira'/>
  </div>
);

export {View1, View2, View3};
