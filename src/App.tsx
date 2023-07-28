import React from 'react';
import './index.css';

import { Button } from './components/Button'
import { Color, Size } from './components/Button/ButtonTemplate';

const BUTTON_TEXT = 'start';

function App() {
  return (
    <div className="flex justify-center flex-wrap items-center h-screen column flex-col gap-1">
      <Button
        text={BUTTON_TEXT}
        size={Size.Small}
        link='yandex.ru'
      />
      <Button
        text={BUTTON_TEXT}
        color={Color.Green}
      />
      <Button
        text={BUTTON_TEXT}
        size={Size.Big}
        color={Color.Red}
      />
    </div>
  );
}

export default App;
