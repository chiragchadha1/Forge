import { Button } from "./Button"

function Work() {
  return (
      <div className="flex flex-col justify-center items-center bg-forge-bg gap-8 p-8">
          <h3>What We Do</h3>
          <div className="grid grid-cols-[repeat(3,minmax(278px,278px))] gap-8">
              <div className="flex flex-col justify-start items-center text-center bg-white rounded-2xl p-6 gap-6">
                  <img src="src/assets/images/image-wireframe.svg" />
                  <p>Work in teams to build meaningful products that address issues in our community</p>
              </div>
              <div className="flex flex-col justify-start items-center text-center bg-white rounded-2xl p-6 gap-6">
                  <img src="src/assets/images/image-wireframe.svg" />
                  <p>Make incredible connections through our workshops, the Sherman Center community, and our speaker series with industry experts</p>
              </div>
              <div className="flex flex-col justify-start items-center text-center bg-white rounded-2xl p-6 gap-6">
                  <img src="src/assets/images/image-wireframe.svg" />
                  <p>Gain valuable technical skills, product development knowledge, and entrepreneurial experience</p>
              </div>
          </div>
          <Button>Learn More</Button>
    </div>
  )
}

export default Work