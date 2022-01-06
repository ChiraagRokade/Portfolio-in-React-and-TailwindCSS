import React from "react";
import Layout from "../compoents/Layout";
import emailjs from 'emailjs-com';
function Contact() {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_3am9xze','template_zsgj7jw', e.target,'user_K4R9sn1VfcY3klJVx8QC8').then(res => {
      console.log(res);
    }).catch(err=> console.log(err));
  }
  return (
    <Layout>
      <div>
        <div className='h-screen mt-10'>
          <lottie-player
            src='https://assets6.lottiefiles.com/packages/lf20_mwawjro9.json'
            background='transparent'
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className='w-screen flex justify-center'>
          <div className='md:w-full w-1/2 p-10 shadow-2xl bg-gray-50'>
            <h1 className='font-merr font-bold text-3xl text-center'>
              Contact me to know more
            </h1>
            <form onSubmit={sendEmail}>
              <input
                type='text'
                name="name"
                placeholder=' Name'
                className='w-full border-2 border-gray-400 rounded-md p-1 shadow-xl mt-5'
              />
              <input
                type='email'
                name="email"
                placeholder=' Email'
                className='w-full border-2 border-gray-400 rounded-md p-1 shadow-xl mt-5'
              />
              <textarea
                cols='30'
                rows='10'
                type='text'
                name="message"
                placeholder=' Message'
                className='w-full border-2 border-gray-400 rounded-md p-1 shadow-xl mt-5'
              />
              <button className='bg-blue-600 rounded text-white px-5 py-1 mt-3 font-pt shadow-lg' type="submit" value="Send">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
