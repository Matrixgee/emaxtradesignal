import logo from '../assets/EMAXLOGO.png'
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Facebook,
  Shield,
  Users,
  Award,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-50 to-white border-t border-blue-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center mb-[23px] gap-2 cursor-pointer">
          <img src={logo} alt="" className="h-[80px] w-[95px]" />
        </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Your trusted partner in building wealth through smart investment
              strategies. Empowering investors with expert insights and
              innovative solutions.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
              >
                <Twitter className="h-5 w-5 text-blue-600" />
              </a>
              <a
                href="#"
                className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-blue-600" />
              </a>
              <a
                href="#"
                className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
              >
                <Facebook className="h-5 w-5 text-blue-600" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Services</h4>
            <ul className="space-y-2">
              {[
                "Portfolio Management",
                "Financial Planning",
                "Risk Assessment",
                "Market Analysis",
                "Retirement Planning",
                "Tax Optimization",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Resources</h4>
            <ul className="space-y-2">
              {[
                "Investment Guide",
                "Market Insights",
                "Research Reports",
                "Educational Content",
                "Webinars",
                "FAQ",
              ].map((resource) => (
                <li key={resource}>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {resource}
                  </a>


                </li>
              ))}
            </ul>
          </div>


          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="text-slate-600 text-sm">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-600" />
                <span className="text-slate-600 text-sm">
                  info@emaxsignaltrade
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-600 mt-0.5" />
                <span className="text-slate-600 text-sm">
                  123 Financial District
                  <br />
                  New York, NY 10004
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
              <Shield className="h-6 w-6 text-blue-700" />
              <div>
                <div className="font-semibold text-slate-800 text-sm">
                  SEC Registered
                </div>
                <div className="text-slate-600 text-xs">Investment Advisor</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
              <Users className="h-6 w-6 text-blue-700" />
              <div>
                <div className="font-semibold text-slate-800 text-sm">
                  10,000+ Clients
                </div>
                <div className="text-slate-600 text-xs">Trusted Worldwide</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
              <Award className="h-6 w-6 text-blue-700" />
              <div>
                <div className="font-semibold text-slate-800 text-sm">
                  Award Winning
                </div>
                <div className="text-slate-600 text-xs">
                  Excellence in Service
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-sm text-slate-300">
              © 2025 Emax Signal Trade. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Disclosures
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer