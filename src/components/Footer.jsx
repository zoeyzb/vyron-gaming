import { FaGithub } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full bg-[#5542ff] py-5 text-black">
    <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 md:flex-row">
      <p className="text-center text-sm font-light">© 2026 VYRON · Interactive gaming-universe concept</p>
      <a href="https://github.com/zoeyzb/vyron-gaming" target="_blank" rel="noopener noreferrer" aria-label="View Vyron source on GitHub" className="inline-flex items-center gap-2 text-sm hover:text-white"><FaGithub /> Source and attribution</a>
      <a href="mailto:sierra@recoverrevenue.company?subject=Vyron%20Gaming%20Concept%20Enquiry" className="text-sm hover:underline">Contact us</a>
    </div>
  </footer>
);
export default Footer;
