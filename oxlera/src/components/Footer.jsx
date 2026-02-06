import logo from './../assets/logo.png'; 

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-[1100px] mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900">
              <img 
                src={logo} 
                alt="Oxlera" 
                className="h-8 w-auto opacity-80" 
              />
              <span>Oxlera</span>
            </div>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-sm">
              Bringing nature indoors with professional, sustainable, and minimal systems designed specifically for the modern workspace.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-5">
              Platform
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-sm text-gray-500 hover:text-green-800 transition-colors">Features</a>
              </li>
              <li>
                <a href="#how" className="text-sm text-gray-500 hover:text-green-800 transition-colors">How it works</a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-500 hover:text-green-800 transition-colors">Get started</a>
              </li>
            </ul>
          </div>

          {/* Social/Legal Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@oxlera.in" className="text-sm text-gray-500 hover:text-green-800 transition-colors">Email Us</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-green-800 transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-green-800 transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 font-medium">
            © {year} Oxlera Pvt. Ltd. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Eco-System Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;