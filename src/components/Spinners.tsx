import {
    ClipLoader as ReactClipLoader,
    BeatLoader as ReactBeatLoader,
    ScaleLoader as ReactScaleLoader,
  } from "react-spinners";
  
  const css_override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red"
  };
  
  interface Props {
    loading: boolean;
  }
  
  const ClipLoader = (props: Props) => {
    return (
      <ReactClipLoader
        color="#008374"
        loading={props.loading}
        size={150}
        cssOverride={css_override}
      />
    );
  };
  
  const BeatLoader = (props: Props) => {
    return (
      <ReactBeatLoader
        loading={props.loading}
        size={10}
        cssOverride={css_override}
      />
    );
  };
  
  const ScaleLoader = (props: Props) => {
    return (
      <ReactScaleLoader 
        loading={props.loading} 
       cssOverride={css_override} />
    );
  };
  
  export { ClipLoader, BeatLoader, ScaleLoader };