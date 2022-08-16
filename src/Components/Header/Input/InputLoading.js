import { memo } from "react";
import { ClipLoader } from "react-spinners";

const InputLoading = () => {
  return (
    <div className="input-loading">
      <div className="input-loading__body">
        <ClipLoader
          color="black  "
          loading
          size={30}
          speedMultiplier={0.8}
          className="spinner"
        />
      </div>
    </div>
  );
};

export default memo(InputLoading);
