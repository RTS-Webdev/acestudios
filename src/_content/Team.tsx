import { Members } from '../_constants';

export const Team = () => {
    return (
        <div className="container mx-auto p-6">
            <hr className="border-t-2 border-gray-100 my-8 dark:border-zinc-700" />
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-3xl font-bold mb-4 dark:text-white">OUR TEAM</h1>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                    {Members.map((member) => (
                        <div key={member.name} className="text-center">
                            <div className="relative w-32 h-32 mx-auto overflow-hidden">
                                <img 
                                    src={member.image} 
                                    className="absolute inset-0 w-full h-full object-cover rounded-full" 
                                    alt={`${member.name}`}
                                />
                            </div>
                            <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                            <p className="text-gray-500 dark:text-gray-300">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Team;