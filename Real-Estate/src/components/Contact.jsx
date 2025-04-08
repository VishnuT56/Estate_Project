import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {


  // form creation 
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    //Access Key
    formData.append("access_key", YOUR_ACCESS_KEY);


    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("")
       toast.success("Form Submitted Successfully")                 //message styling
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };



  return (
    <motion.div
      initial={{opacity: 0, x:-200}}    //animation
      transition={{duration: 1}}      //animation
      whileInView={{opacity: 1, x:0}}     //animation
      viewport={{once: true}}           //animation

    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'
    id='Contact'>
         <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact 
          <span className='underline underline-offset-4 decoration-1 under font-light'> With Us</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Let's Build Your Future Together</p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
          <div className='flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
               Name
              <input className='w-full border border-blue-400 rounded py-3 px-4 mt-2' 
              type="text" name='Name' placeholder='Enter Your Name' required />
            </div>

            <div className='w-full md:w-1/2 text-left md:pl- mt-5'>
               Email
              <input className='w-full border border-blue-400 rounded py-3 px-4 mt-2' 
              type="email" name='Email' placeholder='Enter Your Email' required />
            </div>
          </div>

          <div className='my-5 text-left'>
            Message
            <textarea className='w-full border border-blue-400 rounded py-3 px-4 mt-2 h-45 resize-none'
            name="Message" placeholder='Enter Message' required></textarea>
          </div>

          <button className='bg-yellow-500 text-white py-2 px-10 mb-10 cursor-pointer rounded-2xl hover:bg-violet-500 hover:shadow-lg hover:shadow-blue-400'>
            {result ? result : "Send Message"}
          </button>
        </form>

       
    </motion.div>
  )
}

export default Contact