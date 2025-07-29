import CarCard from "./carCard";
import tesla from '../images/tesla.jpg'
import ford from '../images/fordmustang.avif'
import bmw from '../images/bmw.webp'
import audi from '../images/audi.jpg'
import toyata from '../images/toyata.jpg'
import civic from '../images/civics.jpg'
import lamborgini from '../images/lamborgini.webp'
import jeep from '../images/jeep.webp'

const cars = [
  {
    name: "Tesla Model",
    desc: "Electric car with premium features.",
    img: tesla,
  },
  {
    name: "Ford Mustang",
    desc: "Classic muscle car with power.",
    img: ford,
  },
  {
    name: "BMW X5",
    desc: "Luxury SUV with modern tech.",
    img: bmw,
  },
  {
    name: "Audi",
    desc: "Sleek and efficient sedan.",
    img: audi,
  },
  {
    name: "Toyota Corolla",
    desc: "Reliable and affordable.",
    img: toyata,
  },
  {
    name: "Honda Civic",
    desc: "Popular compact car.",
    img: civic,
  },
  {
    name: "Lamborghini Huracan",
    desc: "Supercar with insane speed.",
    img: lamborgini,
  },
  {
    name: "Jeep Wrangler",
    desc: "Off-road legend.",
    img: jeep,
  }
];

export default function CarSection() {
  return (
    <section className="px-6 py-10 bg-gray-50" id="carSection">
      <h2 className="text-2xl font-bold mb-6 text-center">Available Cars</h2>
      <div className="grid  lg:grid-cols-3 gap-8 mt-14">
        {cars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>
    </section>
  );
}
