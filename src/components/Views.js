/*
MIT License

Copyright (c) 2020 Giovanni Orlando

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import React from 'react';
import Github from './Github';

const View1 = () => (
    <div id="View1" className="wrapper">
        <h2 className="ViewTitle">View 1</h2>
        <Github username="giovanni0918" />
    </div>
);

const View2 = () => (
    <div id="View2" className="wrapper">
        <h2 className="ViewTitle">View 2</h2>
        <Github username="juan1003" />
    </div>
);

const View3 = () => (
    <div id="View3" className="wrapper">
        <h2 className="ViewTitle">View 3</h2>
        <Github username="marcmaceira" />
    </div>
);

export { View1, View2, View3 };
