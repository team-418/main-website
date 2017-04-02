import PrimaryNavigation from './components/primary_navigation';
import React from 'react';
import { render } from 'react-dom';
import HtmlToReact from 'html-to-react'

import FixedLayoutWithSidebar from './components/fixed_layout_with_sidebar';

var htmlToReactParser = new HtmlToReact.Parser(React);

render(
  <FixedLayoutWithSidebar 
    leftLinks={[<a href="#">Elements</a>]} 
    rightLinks={[<a href="#">Sign In Fake</a>]} 
    sidebarContent={htmlToReactParser.parse(document.getElementById('navigational-links').innerHTML)}
    mainBodyContent={htmlToReactParser.parse(document.getElementById('sidebar-content').innerHTML)} />, 
  document.getElementById('root')
);

document.getElementById('navigational-links').remove();
document.getElementById('sidebar-content').remove();
