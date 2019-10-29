import React from "react";
import { withContext } from "react-dims";

const styles = {
  height: "100%",
  backgroundColor: "red"
};

const ReactNode = ({ dims }) => {
  return (
    <div style={styles}>
      width~{Math.floor(dims.width)}, height~{Math.floor(dims.height)}
    </div>
  );
};

const ReactNodeTest = ({ dims }) => {
  return (
    <div style={styles}>
      width~{dims.width}__ height~{dims.height}
    </div>
  );
};

export default withContext(ReactNodeTest);
