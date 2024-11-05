import React from "react";
import { AboutImageData, InstaData } from "../../components/Constant";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function AboutUs() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>
          Find top services from Best Visa Agents in Dubai UAE | Ztartvisa
        </title>
        <meta
          name="description"
          content="Discover why Ztartvisa is the best choice for visa services in Dubai. Our expert team simplifies the process, ensuring a seamless experience."
        />
        <link rel="canonical" href="https://ztartvisa.com/about" />
      </Helmet>
      <div>
        <div className="mt-20 flex flex-col gap-3 md:gap-3 w-full text-center ">
          <h2 className="text-xl lg:text-4xl  font-PoppinsRegular">
            Built to make your travel better
          </h2>
          <h1 className="text-3xl lg:text-7xl font-PoppinsExtraBold">
            We are <span className="text-visaclr">ztartvisa</span>
          </h1>
        </div>
        <div className="my-5 lg:my-20 w-full md:w-[95%] lg:w-[90%]  mx-auto max-h-fit pt-5  columns-2 md:columns-4 xl:columns-5 gap-3 md:gap-5 space-y-3 md:space-y-5">
          {AboutImageData?.map((data, i) => {
            return (
              <div className="break-inside-avoid monosary w-full" key={i}>
                <img
                  loading="lazy"
                  className="w-full h-full object-cover pointer-events-none"
                  src={data.Img}
                  alt="images"
                />
              </div>
            );
          })}
        </div>
        <div className="w-[90%] lg:w-[60%] flex flex-col gap-16 mx-auto pb-10">
          <p className="text-base lg:text-lg">
            Ztartvisa: We make getting your visa a breeze, so you can focus on
            the adventure!
            <br />
            <br />
            Feeling overwhelmed by visa applications? Don't worry, Ztartvisa is
            here to be your visa superhero! We're not some stuffy visa company
            with endless rules, we're here to help you get your visa quickly and
            easily.
            <br />
            <br />
            Think of us as your visa buddy. We'll answer all your questions in
            plain English, help you gather the documents, and make sure your
            application is strong and ready to go.
            <br />
            <br />
            Whether you're a travel pro or just starting your globetrotting
            journey, we've got your back. Let Ztartvisa handle the visa
            headaches, so you can get excited about exploring the world!
            <br />
            <br />
            Get a free consultation today and see how easy
            getting a visa can be!
          </p>
          <div className="w-full hidden md:flex justify-center align-middle">
            <button className="bg-visaclr text-base lg:text-lg text-white rounded-3xl hover:bg-visaclrhvr duration-150 px-24 py-2.5">
              Travel better
            </button>
          </div>
        </div>
        {/*  */}
        {/* <div className='w-[90%] lg:w-[50%] mx-auto mt-20'>
          <h2 className='text-2xl lg:text-5xl font-PoppinsBold'>ztartvisa's social reach:</h2>
        </div> */}
        {/* insta */}
        {/* <div className='w-[90%] lg:w-[70%] mx-auto'>
       <div className='grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-10 lg:gap-y-16 my-10 lg:my-20'>
       {InstaData?.map((data,i)=>(
                <div className='flex items-center gap-3'>
                  <div key={i} className='bg-gradient-to-r from-orange-300 via-pink-500 to-orange-500 w-fit rounded-full p-[3px]'>
                    <img className='pointer-events-none h-14 w-14 md:h-[4.2rem] md:w-[4.2rem] ' src={data.Img} alt="insta" />
                    </div>
                  <div className='flex flex-col gap-0'>
                      <p className='text-lg capitalize'>{data.title}</p>
                      <a href={data.link} target='_blank'><p className='text-lg text-gray-600'>{data.sub}</p></a>
                  </div>
                </div>
                ))}
                </div>
              </div> */}
      </div>
    </>
  );
}

export default AboutUs;
