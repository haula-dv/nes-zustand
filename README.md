# N E S - Z U S T A N D

By [hau la](https://nexgen-software.vercel.app)

This library handles setting the value of the store outside of the React component, an idea inspired by the [recoil-nexus](https://www.npmjs.com/package/recoil-nexus) library.

To achieve the flexible usage provided by [recoil-nexus], I customized it based on the core of [zustand](https://zustand-demo.pmnd.rs/), allowing the value to be reset from anywhere.

## Installation

```bash
npm install nes-zustand
```

```bash
yarn add nes-zustand
```

## Usage

```javascript
// src/store.ts
import { createNesZustandStore } from "nes-zustand";

// Create a store
export const loadingState = createZustandStore({
  key: "loadingState",
  default: false,
});
```

```javascript
// api.ts
// Function submit form outside of the React component
// This example want to set loading when submitting the api

import { loadingState } from "@/store/common";
import { firebase } from "@/utils/config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getZustandValue, setZustandValue } from "nes-zustand";
import { toast } from "sonner";
import { IContactValues } from "./type";

export const submitContactAPI = async (payload: IContactValues) => {
  setZustandValue(loadingState, true); // set loading value => true
  try {
    const docRef = await addDoc(collection(firebase, "users"), {
      ...payload,
    });
    const loading = getZustandValue(loadingState);
    console.log("Get value", loading); // Output => true (You can get value here)

    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  } finally {
    setZustandValue(loadingState, false); // finally set loading value => false
    toast("Submit successfully!");
  }
};
```

```javascript
// Loading component
import { loadingState } from "@/store/common";
import { Backdrop, CircularProgress } from "@mui/material";
import { useStore } from "zustand";

export const MainLoading = () => {
  const loading = useStore(loadingState, (state) => state.value);

  return (
    <Backdrop open={loading}>
      <CircularProgress
        sx={{
          height: "30px !important",
          width: "30px !important",
          color: "#fff",
        }}
      />
    </Backdrop>
  );
};
```

| Method             | Returns                                                   |
| ------------------ | --------------------------------------------------------- |
| createZustandStore | create state function                                     |
| setZustandValue    | setter function, pass value to be set as second parameter |
| getZustandValue    | getter function                                           |