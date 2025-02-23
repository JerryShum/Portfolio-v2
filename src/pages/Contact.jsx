import { motion } from "framer-motion";
import PageHeading from "../ui/Layout/PageHeading";
import FooterComponent from "../ui/Layout/FooterComponent";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <>
      <PageHeading>Get In Touch</PageHeading>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex min-h-[70vh] items-center justify-center px-4"
      >
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block font-sans text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-sans text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-sans text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-black px-4 py-2 font-sans text-white transition-colors hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
      <FooterComponent contactPage={true} />
    </>
  );
}

export default Contact;
