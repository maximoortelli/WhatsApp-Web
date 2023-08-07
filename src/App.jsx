import { BsFillPeopleFill, BsChatLeftTextFill, BsFilter, BsEmojiSmile, BsMicFill} from "react-icons/bs"
import { RiMore2Fill, RiLoader3Line, RiSearchLine, RiLinkM, RiMicFill } from "react-icons/ri"
import { LuCheckCheck } from "react-icons/lu"
import { AiFillCamera, AiOutlineFileGif } from "react-icons/ai"



function App() {

  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-4 text-gray-300">

      {/* Contacts */}
       <div className="flex flex-col w-[550px]">

         {/* Profile */}
         <div className="p-3.5 h-[18vh] bg-[#F0F2F5]">

                 {/*Usuario de Whatsapp*/}
                 <div className="">
                   <img src="https://img.freepik.com/free-photo/middle-
                             aged-cheerful-dark-skinned-male-with-shini
                             ng-smile_273609-28538.jpg?w=740&t=st=1686871494~
                             exp=1686872094~hmac=922ab15131a44438019276f816f2
                             bd567db9d4b11d988a538fd19e5ddd83ce0f"
                         className="w-12 h-12 object-cover -mt-[8px] abbsolute rounded-full cursor-pointer"></img>
                 </div>
                 


               {/*iconos de usuario*/}
               <div className="flex items-center gap-8 text-[#54656F] text-2xl ml-[310px] -mt-[36px] absolute">
                     <BsFillPeopleFill className="hover:cursor-pointer"/>
                     <RiLoader3Line className="hover:cursor-pointer"/>
                     <BsChatLeftTextFill className="hover:cursor-pointer"/>
                     <RiMore2Fill className="hover:cursor-pointer"/>
               </div>


           {/* Buscador de chat */}
           <form className="w-full xl:mt-3.5 ">

               <div className=" bg-white w-[554px] h-[55px] -ml-[20px]">
                   <RiSearchLine className="translate-y-[20px] ml-8 cursor-pointer text-[#54656F]"/>
                   <input className="text-gray-400 bg-gray-100 w-[485px] rounded-xl py-1.5 pl-16 pr-4 outline-none ml-5 mb-3 -mt-2" placeholder="Find a chat or start a new one."/>
                   <BsFilter className="text-gray-400 xl:ml-[32.3rem] xl:-mt-[2.7rem] text-2xl font-extrabold cursor-pointer" />
               </div>

           </form>

         </div>

           { /* Contacts */}
            <div className="bg-white h-[80vh] overflow-y-scroll">
                {/* Contact 1*/}
                 <div className="p-4 flex items-center gap-4 bg-[#F5F6F6] border-black cursor-pointer">
                  <img src="
                             https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest
                             _176420-18743.jpg?w=740&t=st=1686923148~exp=1686923748~hmac=49ce9b800ed0561b05f81d47c2b5e6    
                             1be02dc305f4019fe05205d314e886cdc5" className="w-12 h-12 object-cover rounded-full"></img> 
                
                   <div className="flex-1 flex justify-between">
                        <div>
                          <h1 className="text-lg text-black">Michael Gonzalez</h1>
                          <p className="text-gray-500 text-md">Wow, that´s amazing.</p>
                        </div>

                        <div className="text-xs text-gray-500 ">
                             10:42
                        </div>
                   </div>

                 </div>

                 {/* Contact 2*/}
                 <div className="p-4 flex items-center gap-4 hover:bg-[#F5F6F6] cursor-pointer ">
                  <img src="https://img.freepik.com/free-photo/smiley-man-with-arms-cros
                            sed-posing_23-2148306586.jpg?w=740&t=st=1686923142~exp=16869
                            23742~hmac=742dde477039d5c834131ba128c3ce25cadc074fcd3e34bc5
                            1ff03609d8ac8d0" 
                             className="w-12 h-12 object-cover rounded-full"></img> 
                
                   <div className="flex-1 flex justify-between ">
                        <div>
                          <h1 className="text-lg text-black">Henry</h1>
                          <p className="text-gray-500 flex items-center gap-1">
                            <LuCheckCheck className="text-lg text-cyan-400"/>
                            <AiFillCamera />
                             Photo </p>
                        </div>

                        <div className="text-xs text-gray-500 ">
                             Yesterday
                        </div>
                   </div>

                 </div>

                 {/* Contact 3*/}
                 <div className="p-4 flex items-center gap-4 hover:bg-[#F5F6F6] cursor-pointer ">
                 <img src="
                             https://img.freepik.com/free-photo/beautiful-curly-girl-poin
                             ting-finger_176420-168.jpg?w=740&t=st=1686925690~exp=1686926
                             290~hmac=452883bca49d8e98d11eba84ed4a6d09169d51325eab3eceabd
                             7595d0b47094b" 
                             className="w-12 h-12 object-cover rounded-full"></img> 
                
                   <div className="flex-1 flex justify-between ">
                        <div>
                          <h1 className="text-lg text-black">Laura Steward</h1>
                          <p className="text-gray-500 text-md">Hi mate, how have you been? We have a meeting this Saturday.</p>
                        </div>

                        <div className="text-xs text-gray-500 ">
                             Friday
                        </div>
                   </div>

                 </div>

                 {/* Contact 4*/}
                 <div className="p-4 flex items-center gap-4 hover:bg-[#F5F6F6] cursor-pointer ">
                  <img src="
                             https://img.freepik.com/free-photo/awkward-unsure-clueless-cute-clums
                             y-european-blond-female-assistant-wear-glasses-messy-bun-smirking-uns
                             ure-spread-hands-sideways-unaware-holding-smartphone-sure-how-solve-p
                             roblem_176420-35495.jpg?t=st=1686916150~exp=1686916750~hmac=666dfb5fd
                             5d9aff6f56ad8f6785a1ff72043999a79535f8891a6ab39853bccd6" 
                             className="w-12 h-12 object-cover rounded-full"></img> 
                
                   <div className="flex-1 flex justify-between ">
                        <div>
                          <h1 className="text-lg text-black">Alejandra </h1>
                          <p className="text-gray-500 flex items-center gap-1">
                            <LuCheckCheck className="text-lg text-cyan-400"/>
                            <BsMicFill />
                             0:05 </p>
                        </div>

                        <div className="text-xs text-gray-500 ">
                             Wednesday
                        </div>
                   </div>

                 </div>

                 {/* Contact 5*/}
                 <div className="p-4 flex items-center gap-4 hover:bg-[#F5F6F6] cursor-pointer ">
                  <img src="
                             https://img.freepik.com/free-photo/portrait-beautiful-executive-busines
                             swoman-smart-casual-wear-looking-camera-smiling-happy-modern-office-wor
                             kplace-night_7861-3199.jpg?w=900&t=st=1686925900~exp=1686926500~hmac=60
                             4cafe751ab6606cfd5743c30e212f896c40d60c0079574611cf718e53ce431" 
                             className="w-12 h-12 object-cover rounded-full"></img> 
                
                   <div className="flex-1 flex justify-between ">
                        <div>
                          <h1 className="text-lg text-black">Boss</h1>
                          <p className="text-gray-500 text-md">Congratulations on your raise.</p>
                        </div>

                        <div className="text-xs text-gray-500 ">
                             Monday
                        </div>
                   </div>

                 </div>

                 {/* Contact 6*/}
                 <div className="p-4 flex items-center gap-4 hover:bg-[#F5F6F6] cursor-pointer ">
                  <img src="
                             https://img.freepik.com/free-photo/portrait-smiling-young-beautiful-dar
                             k-skinned-curly-student-girl-cafe-terrace-holding-textbooks-wearing-yel
                             low-coat-enjoys-weather_295783-3438.jpg?w=740&t=st=1686925946~exp=16869
                             26546~hmac=88f0d4b88f58c188693aea3055640b4d6de7396554822f756460e5985894
                             554c5" 
                             className="w-12 h-12 object-cover rounded-full"></img> 
                
                   <div className="flex-1 flex justify-between ">
                        <div>
                          <h1 className="text-lg text-black">Sofia Y.</h1>
                          <p className="text-gray-500 text-md">I miss you, call me when you arrive.</p>
                        </div>

                        <div className="text-xs text-gray-500 ">
                        20/09/2023
                        </div>
                   </div>

                 </div>

                 {/* Contact 7*/}
                 <div className="p-4 flex items-center gap-4 hover:bg-[#F5F6F6] cursor-pointer ">
                  <img src="
                             https://img.freepik.com/free-photo/young-bearded-man-with-striped-shi
                             rt_273609-5677.jpg?w=740&t=st=1686926075~exp=1686926675~hmac=54eccb1c
                             1c672033561ee8f2819e9a3ded08781346d3ab43333c7847bb02dfd5"
                             className="w-12 h-12 object-cover rounded-full"></img> 
                
                   <div className="flex-1 flex justify-between ">
                        <div>
                          <h1 className="text-lg text-black">Juan</h1>
                          <p className="text-gray-500 flex items-center gap-1">
                            <LuCheckCheck className="text-lg text-cyan-400"/>
                            <AiOutlineFileGif />
                             GIF </p>
                        </div>

                        <div className="text-xs text-gray-500 ">
                             17/07/2023
                        </div>
                   </div>

                 </div>

                 {/* Contact 8*/}
                 <div className="p-4 flex items-center gap-4 hover:bg-[#F5F6F6] cursor-pointer ">
                  <img src="
                             https://img.freepik.com/free-photo/portrait-good-looking-confident-red
                             head-mature-guy-with-bristle-round-glasses-holding-hands-chest-smiling
                             -broadly_176420-27456.jpg?w=740&t=st=1686926109~exp=1686926709~hmac=c5
                             4fb4eefcf56133fd08d7e7b8b18575561274ca59058e33951ce829e15fc011" 
                             className="w-12 h-12 object-cover rounded-full"></img> 
                
                   <div className="flex-1 flex justify-between ">
                        <div>
                          <h1 className="text-lg text-black">Steve</h1>
                          <p className="text-gray-500 text-md">Hello Steve, how are you?.</p>
                        </div>

                        <div className="text-xs text-gray-500 ">
                             28/05/2023
                        </div>
                   </div>

                 </div>
            </div>

       </div>

       {/* Chat */}
        <div className="xl:col-span-3">
               
               {/*Receptor de mensaje*/}
               <header className="xl:h-[10vh] xl:ml-[15.4vw] bg-[#F0F2F5] pl-4 flex items-center justify-between cursor-pointer">

                 <div className="flex items-center gap-4 pt-[-110px]">
                     <img src="
                             https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest
                             _176420-18743.jpg?w=740&t=st=1686923148~exp=1686923748~hmac=49ce9b800ed0561b05f81d47c2b5e6    
                             1be02dc305f4019fe05205d314e886cdc5" 
                             className="w-10 h-10 object-cover rounded-full cursor-pointer">
                     </img>
                     
                     <div>
                         <h1 className="text-black text-lg">Michael Gonzalez</h1>
                         <span className="text-gray-500 ">In Line</span>
                     </div>

                  </div>

                  <div className="flex items-center gap-8 text-gray-500 text-2xl pr-7 pb-2">
                      <RiSearchLine className="cursor-pointer"/>
                      <RiMore2Fill className="cursor-pointer"/>
                  </div>
               </header>

                {/* Mensajes*/}
                <main className="bg-[#efeae2] h-[80vh] xl:ml-[15.3vw] overflow-y-scroll">
                  
                  {/*Background*/}

                  
                  <div>
                    {/* Messages */}
                    
                    <img src="Chat oficial.jpg" className="h-[749px] w-[800px] object-cover -mt-1"></img>

                  </div>
                  
                </main>

                {/*Enviar mensaje*/}
                <div className="h-[10vh] xl:ml-[15.4vw] text-gray-500 flex items-center justify-between bg-[#F0F2F5] ">
                      
                      <div className="flex items-center ml-4">
                         <BsEmojiSmile className="cursor-pointer text-2xl"/>
                         <RiLinkM className="cursor-pointer ml-6 text-2xl"/>
                      </div>
                      
                      <form className="w-10/12">
                         <input type="text" placeholder="Write a message here" className="bg-white w-[95vh] h-[7vh] ml-5 pl-5 outline-none rounded-xl"/> 
                      </form>
                      
                      <div className="w-1/12">
                         <RiMicFill className="ml-4 text-2xl h-[60px] mr-[100vw] cursor-pointer" />
                      </div>
                </div>
            
        </div>
       
    </div>
  )
}

export default App
