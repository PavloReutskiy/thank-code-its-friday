const Home = (): JSX.Element => {
  return (
    <>
      <header className="mx-auto px-[7.5%] font-condensed">
        <h1 className="
          flex flex-col justify-center items-center
          md:flex-row md:gap-6 lg:gap-4
          mt-4 sm:mt-6 xxl:mt-10
          font-bold uppercase text-black text-center leading-none
          drop-shadow-md
        ">
          <div className="
            ml-[-7px]
            text-[105px] sm:text-[160px] md:text-[125px] lg:text-[160px] xl:text-[200px] xxl:text-[245px]
            leading-[0.9] tracking-[-7px] lg:tracking-[-9px] xxl:tracking-[-12px]
          ">
            Blog
          </div>
          <div className="
            md:max-w-[300px] lg:max-w-[370px] xl:max-w-[470px] xxl:max-w-[545px]
            text-[21px] sm:text-[33px] md:text-[45px] lg:text-[55px] xl:text-[70px] xxl:text-[80px]
            md:leading-tight lg:leading-[1.2]
            md:text-left
          ">
            Thank&nbsp;code it’s&nbsp;friday
          </div>
        </h1>
      </header>

      <main className="mx-auto px-[7.5%] font-condensed">

      </main>
    </>
  );
};

export default Home;
