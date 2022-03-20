import { DotsHorizontalIcon } from '@heroicons/react/outline'
import Image from 'next/image'

function Trending({ result }) {
  return (
    <div className="flex cursor-pointer items-center justify-between px-4 py-2 transition duration-200 ease-out hover:bg-white hover:bg-opacity-[0.03]">
      <div className="space-y-0.5">
        <p className="text-xs font-medium text-[#6e767d]">{result.heading}</p>
        <h6 className="max-w-[250px] text-sm font-bold">
          {result.description}
        </h6>
        <p className="max-w-[250px] text-xs font-medium text-[#6e767d]">
          Trending with{' '}
          {result.tags.map((tag, index) => (
            <span className="tag" key={index}>
              {tag}
            </span>
          ))}
        </p>
      </div>

      {result.img ? (
        <Image
          src={result.img}
          width={70}
          height={70}
          objectFit="cover"
          className="rounded-2xl"
        />
      ) : (
        <div className="icon group">
          <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
        </div>
      )}
    </div>
  )
}

export default Trending
