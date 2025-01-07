export function Hero () {
    return(
        <div className="relative w-full h-40 md:h-42 bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 rounded-lg overflow-hidden mt-5">
        <div className="absolute inset-0 bg-[url('/path/to/your/image.svg')] bg-no-repeat bg-cover opacity-10"></div>
      <div  className="flex items-center justify-center h-full">
        <h1 className="text-white text-2xl md:text-4xl font-bold text-center">
          What are you making today?
        </h1>
        </div>
</div>

    )
}