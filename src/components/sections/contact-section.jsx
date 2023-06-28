import Image from "next/image";
import React from "react";
import ButtonMailto from "../button-mail-to";
import btnShape3 from "@/src/images/button_shapes/button_shape3.png";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative h-screen flex items-center justify-center w-full"
    >
      {/* <Image
        src={bg}
        alt="White background image"
        width={"100%"}
        height={600}
        className="drop-shadow-2xl w-[80%] h-[120%]"
      /> */}
      <div className="absolute w-full h-full flex justify-center items-center max-w-screen-lg">
        {/* Contact Us */}
        <div className="max-w-[85rem] px-4 py-10 lg:px-6 lg:py-12 mx-auto ">
          <div className="max-w-xl mx-auto relative">
            <div className="relative">
              <Image src={btnShape3} />
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
              <h1 className="text-3xl text-gray-800 sm:text-6xl dark:text-white">
                Contact me
              </h1>
            </div>
          </div>
          <div className="mt-12 max-w-lg mx-auto mb-10">
            {/* Card */}
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-12 dark:border-gray-700  bg-white  font-serif">
              <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                Fill in the form
              </h2>
              <form>
                <div className="grid gap-4">
                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label
                        htmlFor="hs-firstname-contacts-1"
                        className="block text-sm text-gray-700 font-medium dark:text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="hs-firstname-contacts-1"
                        id="hs-firstname-contacts-1"
                        className="px-4 py-2 block w-full border-gray-200 border-2 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hs-lastname-contacts-1"
                        className="block text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="hs-lastname-contacts-1"
                        id="hs-lastname-contacts-1"
                        className="px-4 py-2 block w-full border-gray-200 border-2 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      />
                    </div>
                  </div>
                  {/* End Grid */}
                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label
                        htmlFor="hs-email-contacts-1"
                        className="block text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="hs-email-contacts-1"
                        id="hs-email-contacts-1"
                        autoComplete="email"
                        className="px-4 py-2 block w-full border-gray-200 border-2 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hs-phone-number-1"
                        className="block text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="hs-phone-number-1"
                        id="hs-phone-number-1"
                        className="px-4 py-2 block w-full border-gray-200 border-2 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      />
                    </div>
                  </div>
                  {/* End Grid */}
                  <div>
                    <label
                      htmlFor="hs-about-contacts-1"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Details
                    </label>
                    <textarea
                      id="hs-about-contacts-1"
                      name="hs-about-contacts-1"
                      rows={4}
                      className="px-4 py-2 block w-full border-gray-200 border-2 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 resize-none"
                      defaultValue={""}
                    />
                  </div>
                </div>
                {/* End Grid */}
                <div className="mt-6 grid">
                  <ButtonMailto
                    label={"Send inquires"}
                    mailto="mailto:email@example.com?subject=Mail from our EVA | ART website"
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500">
                    We'll get back to you in 1-2 business days.
                  </p>
                </div>
              </form>
            </div>
            {/* End Card */}
          </div>
        </div>
        {/* End Contact Us */}
      </div>
    </section>
  );
};

export default ContactSection;
