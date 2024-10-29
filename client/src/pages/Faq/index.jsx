import React from 'react';
import {faqTeams} from '../../assets';
import {FaqPageData} from '../../components/Constant'

const Faq = () => {
  return (
    <section className='w-11/12 xl:w-9/12 mx-auto'>
          <img className='h-40 md:h-60 lg:h-[500px] w-full object-cover hover:saturate-50 saturate-100 duration-200' src={faqTeams} alt="teams" />
          <div className='py-5 lg:py-10 space-y-6'>
            {FaqPageData?.map((data,i)=>(
            <div className='space-y-2'>
              <h4 className='text-lg font-PoppinsRegular'>{data.title}</h4>
              <p className='text-base font-PoppinsRegular'>{data.desc}</p>
            </div>
            ))}
          </div>
    </section>
  )
}

export default Faq;