function Hero() {
  return (
    <div className="bg-white flex flex-row justify-center items-center min-h-[600px]">
      <div className="flex flex-row items-start gap-6">
        <div className="flex flex-col justify-center items center">
          <h3 className="stroke !text-5xl">forge your own</h3>
        </div>
        <div className="flex flex-col justify-center items center gap-6 slide">
          <h3 className="text-forge-orange !text-5xl slide-up">journey</h3>
          <h3 className="text-forge-orange !text-5xl slide-up">path</h3>
          <h3 className="text-forge-orange !text-5xl slide-up">experience</h3>
        </div>
      </div>
    </div>
  )
}

export default Hero