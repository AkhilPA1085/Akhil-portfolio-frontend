'use client';
import Typewriter from "typewriter-effect";

const TypeWriter = ({string}) => {
  return (
    <Typewriter
      options={{
        strings: [string],
        autoStart:true,
        loop:true,
      }}
    />
  );
};

export default TypeWriter;
