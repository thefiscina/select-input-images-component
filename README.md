# select-input-images

[Português]
Um pacote customizado para selects, utilizando imagens.
Alterado por Jonathas Fiscina


[Inglês]
A custom package for selects, using images.
## Installation

```sh
npm install https://github.com/thefiscina/select-input-images-component.git
yarn add https://github.com/thefiscina/select-input-images-component.git
```



## Usage

```js
import React from 'react';
import SelectInput from 'select-input-images';
import { Image } from 'react-native';

import flagBR from '../assets/img/icons8-brazil-48.png';
import flagEUA from '../assets/img/icons8-usa-48.png';
import flagSPAN from '../assets/img/icons8-spain-48.png';

export default function App() {
  const [country, setCountry] = React.useState();

  //recomendamos a utilização dessa função para renderizar as imagens
    const returnURIimage = (DefaultImage) => {
        return Image.resolveAssetSource(DefaultImage).uri;
    }


  return (

    <SelectInput
        defaultButtonText="Selecione"
        buttonStyle={{ width: 'auto', borderRadius: 10, backgroundColor: 'transparent' }}
        buttonTextStyle={{ color: '#fff' }}
        data={[
            { 'Português', code: 'PT', img: returnURIimage(flagBR) },
            { 'Inglês', code: 'EUA', img: returnURIimage(flagEUA) },
            { 'Espanhol', code: 'SPAN', img: returnURIimage(flagSPAN) }
        ]}                                              
        valueSelected={country}
        onSelect={async (selectedItem, index) => {
            setCountry(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
        }}
        rowTextForSelection={(item, index) => {
            return item
        }}
    />
  );
}
```

## License

MIT