import { SearchIcon } from '@heroicons/react/outline'
import Trending from './Trending'
import Image from 'next/image'

const Widgets = ({ trendingResults, followResults }) => {
  return (
    <div className="ml-8 hidden space-y-5 py-1 lg:inline xl:w-[450px]">
      <div className="sticky top-0 z-50 w-11/12 bg-black py-1.5 xl:w-9/12">
        <div className="relative flex items-center rounded-full bg-[#202327] p-3">
          <SearchIcon className="z-50 h-5 text-gray-500" />
          <input
            type="text"
            className="absolute inset-0 w-full rounded-full border border-transparent bg-transparent pl-11 text-[#d9d9d9] placeholder-gray-500 outline-none focus:border-[#1d9bf0] focus:bg-black focus:shadow-lg"
            placeholder="Search Twitter"
          />
        </div>
      </div>

      <div className="w-11/12 space-y-3 rounded-xl bg-[#15181c] pt-2 text-[#d9d9d9] xl:w-9/12">
        <h4 className="px-4 text-xl font-bold">What's happening</h4>
        {trendingResults.map((result, index) => (
          <Trending key={index} result={result} />
        ))}
        <button className="flex w-full cursor-pointer items-center justify-between px-4 py-3 font-light text-[#1d9bf0] transition duration-200 ease-out hover:bg-white hover:bg-opacity-[0.03]">
          Show more
        </button>
      </div>

      <div className="w-11/12 space-y-3 rounded-xl bg-[#15181c] pt-2 text-[#d9d9d9] xl:w-9/12">
        <h4 className="px-4 text-xl font-bold">Who to follow</h4>
        {followResults.map((result, index) => (
          <div
            className="flex cursor-pointer items-center px-4 py-2 transition duration-200 ease-out hover:bg-white hover:bg-opacity-[0.03]"
            key={index}
          >
            <Image
              src={result.userImg}
              width={50}
              height={50}
              objectFit="cover"
              className="rounded-full"
            />
            <div className="group ml-4 leading-5">
              <h4 className="font-bold group-hover:underline">
                {result.username}
              </h4>
              <h5 className="text-[15px] text-gray-500">{result.tag}</h5>
            </div>
            <button className="ml-auto rounded-full bg-white py-1.5 px-3.5 text-sm font-bold text-black">
              Follow
            </button>
          </div>
        ))}
        <button className="flex w-full cursor-pointer items-center justify-between px-4 py-3 font-light text-[#1d9bf0] transition duration-200 ease-out hover:bg-white hover:bg-opacity-[0.03]">
          Show more
        </button>
      </div>
    </div>
  )
}

export default Widgets
