import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const ContactUs = () => {
  return (
    <section className="py-16 container mx-auto px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 shadow-lg py-8 px-5">
        <div>
          <h2 className="font-bold mb-4 text-xl text-accent">CONTACT FORM</h2>
          <div className="flex justify-center items-center">
            <form>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered rounded-none input-md w-[49%] mb-5 mr-[2%]"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered rounded-none input-md w-[49%] mb-5"
              />
              <input
                type="text"
                placeholder="Enter Subject"
                className="input input-bordered rounded-none input-md w-[49%] mb-5 mr-[2%]"
              />
              <input
                type="number"
                placeholder="Enter Phone Number"
                className="input input-bordered rounded-none input-md w-[49%] mb-5"
              />
              {/* Adjusted height of the textarea */}
              
              <div className="flex justify-center">
                <input
                  type="submit"
                  value="SEND MESSAGE"
                  className="btn bg-primary hover:bg-white duration-700 text-white hover:text-primary border-primary border-2 hover:border-primary font-bold rounded-none w-full max-w-xs mt-2"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="border-1 py-3">
          <h2 className="font-bold text-xl pb-2 text-accent">
            CONTACT ADDRESS
          </h2>
          <div className="flex justify-start items-center border py-7 px-3">
            <div>
              <div className="flex justify-start items-center gap-3 mb-8">
                <div className="text-white text-xl bg-primary p-2">
                  <MdLocationOn />
                </div>
                <div className="text-accent text-sm">
                  <h4>KLU, Vijayawada</h4>
                  <h2>Green Fields</h2>
                </div>
              </div>

              <div className="flex justify-start items-center gap-3 mb-8">
                <div className="text-xl text-white bg-primary p-2">
                  <BsFillTelephoneFill />
                </div>
                <div className="text-accent text-sm">
                  <h4>+91-1234-567-890</h4>
                </div>
              </div>

              <div className="flex justify-start items-center gap-3">
                <div className="text-white text-xl bg-primary p-2">
                  <AiOutlineMail />
                </div>
                <div className="text-accent font-bolder text-sm">
                  <h4>jobs@scan.com</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
