## 0.Prerequisites
- Node JS
## 1.Install the package
- npm install @ssteph/easymodal
## 2.Import the component (in your jsx)
```js 
import Modal from '@ssteph/easymodal/dist/components/Modal';
```
- use ``` <Modal/> ``` to display it in your component.
## 3.Basic example
```js 
import Modal from '@ssteph/easymodal/dist/components/Modal';
import { useState } from "react";

function MyComponent() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <button onClick={handleModalOpen}>Test</button>
    <Modal
          yourText="Insert your text here..."
          open={isModalOpen}
          close={handleModalClose}
        />
    </>
  );
}
```

## 4.Example with styles defined
### 4.1.config
- You can use an object for configuring the modal style:
```js 
const config =[{"background":{
    backgroundColor: "rgba(0, 120, 0, 0.6)",
}},{"modal":{
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "20px",
    width: "500px",
    height: "auto",
}}];
```
```
      - to change the background of the modal:
        - modify the backgrouncolor property
      - to change the modal
        - modify or add property in "modal" property
```
### 4.2.example
```js
import Modal from '@ssteph/easymodal/dist/components/Modal';
import { useState } from "react";

function MyComponent() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const config =[{"background":{
    backgroundColor: "rgba(0, 120, 0, 0.6)",
}},{"modal":{
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "20px",
    width: "500px",
    height: "auto",
}}];

  return (
    <>
    <button onClick={handleModalOpen}>Test</button>
    <Modal
          yourText="Insert your text here..."
          open={isModalOpen}
          close={handleModalClose}
          style={config}
        />
    </>
  );
}
```