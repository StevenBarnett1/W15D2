import React from 'react';
// import Clock from './components/Clock';
// import Folder from './components/Folder';
// import Weather from './components/Weather';
import Weather from './components/WeatherFc';
// import AutoComplete from './components/Auto';
import Folder from "./components/FolderFc"
import Auto from "./components/AutoFc"
import Clock from "./components/ClockFc"

const names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander'
];

const folders = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second folder here' },
  { title: 'three', content: 'Third folder here' }
];

const App = () => (
  <div>
    <Folder folders={folders} />
    <Auto names = {names} />
    {/* <Folder folders={folders} /> */}
    {/* <AutoComplete names={names} /> */}
    <Weather />
    <Clock />
  </div>
);

export default App;
