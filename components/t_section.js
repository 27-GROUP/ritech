import team_list from "./team_list";
export default function T_section() {

  return (
    <section className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center mt-10">
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Meet Our Expert Team</h2>
            <p class="mb-3 font-normal text-dark-700 dark:text-dark-400">We are all passionate and impact-driven </p>
          </div>
          <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {team_list.map((team_list) => (
               <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
               <div class="grid grid-cols-1">
                 <div class="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
                 <div className="space-y-4 text-center group">
                <div className="w-56 h-56 mx-auto rounded-[4rem] rotate-45 overflow-hidden md:w-40 md:h-40 lg:w-56 lg:h-56">
                <img class="w-64 h-64 mx-auto object-cover rounded-full" 
                    src={team_list.image} />
                </div>
                </div>
                   <div class="p-6 lg:text-center">
                     <span class="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase"> {team_list.role}</span>
                     <h4 class="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">{team_list.name}</h4>
                     <p class="mt-3 text-base leading-relaxed text-dark-500">{team_list.experience}</p>
                     <div class="mt-6">
                       <a href={team_list.website} class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">View website </a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );

}