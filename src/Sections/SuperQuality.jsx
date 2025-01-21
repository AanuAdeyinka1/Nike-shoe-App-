import { arrowRight } from "../assets/icons"
import Button from "../Components/Button";
import { shoe8} from "../assets/images"


const SuperQuality = () => {
  return (
    <section
    id="about-us "
    className="flex justify-between items-centermax-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      <h2 className="text-xl font-montserrat text-coral-red">Our Summer Collection</h2>
      <h1 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
        We provide you
      
      <span className="text-coral-red"> super </span>
      <span className="text-coral-red"> quality </span>
      shoes</h1>
      <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, Our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance. </p>
      <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11">
          <Button label="View details"/>
        </div>
      </div>
        <div className="flex-1 flex justify-center items-center">
         <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>
      
    </section>
  )
}

export default SuperQuality

