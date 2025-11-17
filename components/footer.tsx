// components/Footer.tsx
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";


export default function Footer() {
  
  return (
    <footer className="bg-gray-900 text-white relative z-10">
       
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">AngelSoft</h2>
            <p className="text-gray-400">
              Transforming ideas into digital experiences. We craft software that your users love.
            </p>
            <div className="flex space-x-4 mt-4">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-400"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-700"
              >
                <FaLinkedinIn />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-pink-500"
              >
                <FaInstagram />
              </motion.a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition">Careers</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/web-development" className="hover:text-white transition">Web Development</Link>
              </li>
              <li>
                <Link href="/app-development" className="hover:text-white transition">App Development</Link>
              </li>
              <li>
                <Link href="/ui-ux-design" className="hover:text-white transition">UI/UX Design</Link>
              </li>
              <li>
                <Link href="/digital-marketing" className="hover:text-white transition">Digital Marketing</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">123 AngelSoft Street<br />San Francisco, CA 94105</p>
            <p className="text-gray-400 mt-2">Email: info@angelsoft.io</p>
            <p className="text-gray-400 mt-2">Phone: +1 234 567 890</p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm"
        >
          &copy; {new Date().getFullYear()} AngelSoft. All rights reserved.
        </motion.div>
      </div>
 


     
    </footer>
  );
}
