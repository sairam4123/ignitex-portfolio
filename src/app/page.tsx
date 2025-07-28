import Image from "next/image";
import teamData from "../data/team.json"; // Assuming you have a JSON file with team data

export default function Home() {
  return (
    <div className="flex flex-col p-2 gap-4">
      <div className="flex flex-col lg:flex-row p-4 gap-4">
        <div className="flex flex-col p-4 rounded-lg shadow-md gap-2 bg-white">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="max-w-2xl text-balance">
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
          <p className="max-w-2xl text-balance">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

export function TeamMemberCard({
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
