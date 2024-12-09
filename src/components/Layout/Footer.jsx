import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FooterData } from "../../utils/data";

const Footer = () => {
  return (
    <footer className="bg-neutral-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white mb-4">Useful PDFs</h3>
            <ul className="space-y-2">
              {FooterData.pdfLinks.map((pdf, index) => (
                <li key={index}>
                  <a
                    href={pdf.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:underline"
                  >
                    {pdf.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {FooterData.socialMediaLinks.map((platform, index) => (
                <a
                  key={index}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-100 text-lg"
                  aria-label={`Visit our ${platform.name}`}
                >
                  <platform.icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white mb-4">Main Office</h3>
            <div className="flex items-center mb-2">
              <FaLocationDot className="text-primary-100 text-xl mr-2" />
              <p className="text-sm text-white">
                123 Fitness Lane, Gym City, Fitland
              </p>
            </div>
            <div className="flex items-center mb-2">
              <FaPhone className="text-primary-100 text-xl mr-2" />
              <p className="text-sm text-white">Phone: (123) 456-7890</p>
            </div>
            <div className="flex items-center">
              <IoIosMail className="text-primary-100 text-xl mr-2" />
              <p className="text-sm text-white">Email: contact@gymcenter.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Gym Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
