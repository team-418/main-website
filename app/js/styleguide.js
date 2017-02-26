import PrimaryNavigation from './components/primary_navigation';
import React from 'react';
import { render } from 'react-dom';

render(
  <PrimaryNavigation leftLinks={[<a href="#">Elements</a>]} rightLinks={[<a href="#">Sign In Fake</a>]} />, 
  document.getElementById('primary-navigation')
);
