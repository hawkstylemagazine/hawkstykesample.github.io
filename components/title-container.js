import React from 'react';

const TitleImage = () => {
  const divStyle = {
    height: '200vh',
    backgroundImage: 'url("/img/title-fixed-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };


  return (
    <div style={divStyle}>
      <div className="top-0 left-0 h-[100vh] flex justify-center items-center z-50 ">
          <h1 className="text-white text-5xl font-extralight tracking-widest ">ISSUE 03 - RAVE WAVE</h1>
        </div>
        <div className="flex items-center justify-center h-screen pb-28">
          <img src={'/img/cover.jpg'} alt={'temp'} className="max-w-full max-h-full shadow-sm shadow-lilac" />
        </div>
    </div>
  );
};

export default TitleImage;
