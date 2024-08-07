import { Metadata } from "next";

type Props = {};
export const metadata: Metadata = {
  title: "Gold-Plane",
  description: "Make a  wesite",
};
const page = (props: Props) => {
  return (
    <section className="">
      <h1 className="text-center w-full text-xl font-bold bg-slate-50 py-1 text-primary md:text-4xl">
        Gold Plane
      </h1>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-7 md:py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-background dark:bg-transparent md:border md:shadow-lg text-gray-800">
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-4xl dark:text-gray-50 font-bold leading-tight lg:text-5xl">
                Let&lsquos talk!
              </h2>
              <div className="text-gray-600 dark:text-gray-200">
                wana a free website ? <br /> contact now
              </div>
            </div>
            <img src="/contact.svg" alt="" className="p-6 h-52 md:h-64" />
          </div>
          <form className="space-y-6 dark:text-gray-50">
            <div>
              <label htmlFor="name" className="text-sm">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Number
              </label>
              <input
                id="number"
                type="number"
                className="w-full p-3 rounded bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                className="w-full p-3 rounded bg-gray-100"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-rose-600 text-gray-50"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="grid md:grid-cols-2 py-10 gap-8 ">
          <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-transparent text-gray-800">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-3xl font-semibold text-center dark:text-gray-50">
                Your opinion matters!
              </h2>
              <div className="flex flex-col items-center py-6 space-y-3 dark:text-gray-100">
                <span className="text-center">How was your experience?</span>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    title="Rate 1 stars"
                    aria-label="Rate 1 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 2 stars"
                    aria-label="Rate 2 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 3 stars"
                    aria-label="Rate 3 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 4 stars"
                    aria-label="Rate 4 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 5 stars"
                    aria-label="Rate 5 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 text-gray-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <textarea
                  rows={3}
                  placeholder="Message..."
                  className="p-4 rounded-md resize-none text-gray-800 bg-gray-50"
                ></textarea>
                <button
                  type="button"
                  className="py-4 my-8 font-semibold rounded-md text-white  bg-rose-600"
                >
                  Leave feedback
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm text-gray-600 dark:text-gray-100"
              >
                Maybe later
              </a>
            </div>
          </div>
          <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-transparent dark:text-gray-50 text-gray-800">
            <div className="flex flex-col w-full">
              <h2 className="text-3xl font-semibold text-center">
                Customer reviews
              </h2>
              <div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
                <div className="flex">
                  <button
                    type="button"
                    title="Rate 1 stars"
                    aria-label="Rate 1 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 2 stars"
                    aria-label="Rate 2 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 3 stars"
                    aria-label="Rate 3 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 4 stars"
                    aria-label="Rate 4 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 text-gray-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 5 stars"
                    aria-label="Rate 5 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 text-gray-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                </div>
                <span className="text-gray-600">3 out of 5</span>
              </div>
              <p className="text-sm text-gray-600">861 global ratings</p>
              <div className="flex flex-col mt-4">
                <div className="flex items-center space-x-1">
                  <span className="flex-shrink-0 w-12 text-sm">5 star</span>
                  <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
                    <div className="bg-orange-300 h-4 w-5/6"></div>
                  </div>
                  <span className="flex-shrink-0 w-12 text-sm text-right">
                    83%
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="flex-shrink-0 w-12 text-sm">4 star</span>
                  <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
                    <div className="bg-orange-300 h-4 w-4/6"></div>
                  </div>
                  <span className="flex-shrink-0 w-12 text-sm text-right">
                    67%
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="flex-shrink-0 w-12 text-sm">3 star</span>
                  <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
                    <div className="bg-orange-300 h-4 w-3/6"></div>
                  </div>
                  <span className="flex-shrink-0 w-12 text-sm text-right">
                    50%
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="flex-shrink-0 w-12 text-sm">2 star</span>
                  <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
                    <div className="bg-orange-300 h-4 w-2/6"></div>
                  </div>
                  <span className="flex-shrink-0 w-12 text-sm text-right">
                    33%
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="flex-shrink-0 w-12 text-sm">1 star</span>
                  <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
                    <div className="bg-orange-300 h-4 w-1/6"></div>
                  </div>
                  <span className="flex-shrink-0 w-12 text-sm text-right">
                    17%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
