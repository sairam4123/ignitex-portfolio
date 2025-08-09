import Image from "next/image";
import teamData from "ignx/data/team.json";
import { Link } from "lucide-react";
// import { FireworkConfetti } from "ignx/@components/FireworkConfetti";

export default function Home() {
  return (
    <div className="flex flex-col p-2 gap-4">
      <div className="p-4">

    <div className="p-2 mb-4 relative">
      <Image
        src="/banners/banner1.jpg"
        alt="IGNITEX Banner"
        width={1024}
        height={800}
        className="rounded-lg w-full h-auto shadow-lg hidden md:flex"
        />
        <Image
          src="/banners/banner1-vert.jpg"
          alt="IGNITEX Banner"
          width={1000}
          height={500}
          className="rounded-lg w-full h-auto shadow-lg flex md:hidden"
        />
        <a href="https://form.jotform.com/252189146557062" className="absolute bottom-4 right-4 bg-amber-600 p-2 rounded-lg shadow-md flex flex-row gap-2 items-center justify-center cursor-pointer hover:bg-amber-500 text-white">
         <Link /> Join now
        </a>
      </div>

      <div className="flex md:flex-row md:justify-end flex-col p-4 rounded-lg items-center shadow-md gap-2 bg-white">
        <Image
          src="/logo.png"
          alt="IGNITEX Logo"
          width={1000}
          height={1000}
          className="rounded-full mr-auto w-1/2 h-auto md:h-4/5 md:w-auto"
        />
        <p className="max-w-2xs text-2xl text-center md:text-left text-balance">
          Where Real Entrepreneurs Begin Their <span className="font-bold">Journey.</span>
        </p>
      </div>
      </div>
          {/* <FireworkConfetti /> */}

      <div className="flex flex-col items-stretch justify-between md:flex-row p-4 gap-4">
        <div className="flex flex-col p-4 rounded-lg shadow-md gap-2 bg-white">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="max-w-lg text-balance text-base/relaxed">
            We are a dynamic and dedicated team united by a shared vision: to
            execute impactful events, drive innovation, and maintain seamless
            coordination across all fronts. Each member brings their unique
            strengths to the table, forming a well-balanced core that handles
            everything from technology and finances to documentation and
            creativity.
          </p>
        </div>
        <div className="flex flex-col p-4 rounded-lg shadow-md gap-2 bg-white">
          <h1 className="text-3xl font-bold">Our Vision</h1>
          <p className="max-w-lg text-base/relaxed text-balance">
            To foster a collaborative, innovative, and impactful environment
            where every event, initiative, and interaction reflects excellence,
            professionalism, and purpose. We aim to set new standards in
            coordination, creativity, and execution—becoming a team that others
            look up to, not just for what we do, but how we do it.
          </p>
        </div>
      </div>
      <div className="flex flex-col p-4 gap-2">
        <h1 className="text-3xl font-bold">Meet the Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {teamData.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              imageSrc={member.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamMemberCard({
  name,
  role,
  imageSrc,
}: {
  name: string;
  role: string;
  imageSrc: string;
}) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
      <Image
        src={imageSrc}
        alt={`${name}'s photo`}
        width={100}
        height={100}
        className="rounded-full"
      />
      <h3 className="mt-2 text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
}
