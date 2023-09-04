import { createContext } from "react";
import { DeviceDimensions } from "../utils/window";

const WindowContext = createContext({
  windowSize: DeviceDimensions.MaxMobileWidth,
  setWindowSize: () => {},
});

export default WindowContext