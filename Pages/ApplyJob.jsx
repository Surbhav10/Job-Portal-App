import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import { assets, jobsData } from '../assets/assets';
import { Loading } from '../Components/Loading';
import { Navbar } from '../Components/Navbar';
import kconvert from 'k-convert'
import moment from 'moment'
import { JobCard } from '../Components/JobCard';
import { Footer } from '../Components/Footer';

const ApplyJob = () => {

  const { id } = useParams();

  const [JobData, setJobData] = useState(null);

  const { jobs } = useContext(AppContext);

  const fetchJob = () => {
    if (!jobs || jobs.length === 0) return;

    const data = jobs.filter(job => String(job._id) === String(id));

    if (data.length !== 0) {
      setJobData(data[0]);
      console.log("Job Found:", data[0]);
    } else {
      console.log("Job not found for ID:", id); // FIXED!
    }
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob();
    }

  }, [id, jobs]);

  return JobData ? (
    <>
      <Navbar />
      <div className='min-h-screen flex flex-col py-10 container px-4 2x1:px-20 mx-auto'>
        <div className='bg-white text-black rounded-lg w-full'>
          <div className='flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded-xl'>
            <div className='flex flex-col md:flex-row items-center '>
              <img className='h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border' src={JobData.companyId.image} alt='' />
              <div className='text-center md:text-left text-neutral-700'>
                <h1 className='text-2x1 sm:text-4x1 font-medium'>{JobData.title}</h1>
                <div className='flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2'>
                  <span className='flex items-center gap-1'>
                    <img src={assets.suitcase_icon} alt='' />
                    {JobData.companyId.name}
                  </span>
                  <span className='flex items-center gap-1'>
                    <img src={assets.location_icon} />
                    {JobData.location}
                  </span>
                  <span className='flex items-center gap-1'>
                    <img src={assets.person_icon} alt='' />
                    {JobData.level}
                  </span>
                  <span className='flex items-center gap-1'>
                    <img src={assets.money_icon} alt='' />
                    CTC : {kconvert.convertTo(JobData.salary)}
                  </span>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center text-end text-sm max-md:text-center'>
              <button className='bg-blue-600 p-2.5 px-10 text-white rounded'>Apply Now</button>
              <p className='mt-1 text-gray-600 '>Posted {moment(JobData.date).fromNow()}</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row justify-between items-start'>
            <div className='w-full lg:w-2/3'>
              <h2 className='fonnt-bold text-2xl mb-4'>Job description</h2>
              <div className='rich-text' dangerouslySetInnerHTML={{ __html: JobData.description }}></div>
              <button className='bg-blue-600 p-2.5 px-10 text-white rounded mt-10'>Apply Now</button>
            </div>
            {/* More Jobs Section */}
           <div className='w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5'>
  <h2>
    More jobs from {JobData?.companyId?.name}
  </h2>

  {jobs
    .filter(
      job =>
        job._id !== JobData._id &&
        job.companyId._id === JobData.companyId._id
    )
    .slice(0, 4)
    .map(job => (
      <JobCard key={job._id} job={job} />
    ))}
</div>


          </div>
        </div>
      </div>
      <Footer/>


    </>
  ) :
    (
      <Loading />
    )
}

export default ApplyJob;
