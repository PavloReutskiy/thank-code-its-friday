import './HomeHeader.css';

export const HomeHeader = (): JSX.Element => {
  return (
    <header className='loading-animation mx-auto max-w-[85%] font-condensed'>
      <h1 className='h1-wrapper'>
        <span className='h1-left-part'>
          Blog
        </span>

        <span className='h1-right-part'>
          Thank&nbsp;code it’s&nbsp;friday
        </span>
      </h1>
    </header>
  );
};
