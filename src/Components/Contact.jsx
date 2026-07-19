import { MapPin, Phone, Mail } from 'lucide-react';
import Contactform from './Contactform';
function Contact(){

  return (
    <div>
      {/* Hero Section */}
      <div className='project text-2xl text-white flex justify-center items-center bg-gray-800 h-60'>
        <div className='z-10 text-center'>
          <h1 className='text-5xl font-bold p-2'>Contacts</h1>
          <p>Home – Contact</p>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className='flex flex-col lg:flex-row'>
        {/* Contact Info */}
        <div className="bg-gray-50 p-8 w-full lg:w-1/2 flex flex-col justify-center">
          <div className="max-w-2xl space-y-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-orange-500 font-semibold text-sm uppercase">
                  Contact Us
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
                Let's Build a Better<br /> Future, Together.
              </h1>

              <p className="text-gray-500 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-1">
                    Creative District Ahmad Yani No. 456 Medan, North Sumatera
                  </h3>
                  <p className="text-gray-500 text-sm">Call support center 24/7</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-1">
                    +800-3374-4676
                  </h3>
                  <p className="text-gray-500 text-sm">Call support center 24/7</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-1">
                    hola@dominantsite.com
                  </h3>
                  <p className="text-gray-500 text-sm">Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
      <div className="w-full lg:w-1/2">
  <Contactform />
</div>
      </div>
    </div>
  );
}

export default Contact;
