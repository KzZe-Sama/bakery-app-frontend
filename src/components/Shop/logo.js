import React from "react";

export default function logo({ url, h, w }) {
  return <img src={url} height={`${h}px`} width={`${w}px`}></img>;
}
