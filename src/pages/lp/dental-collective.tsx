import HubSpotForm from "~/components/common/HubspotForm";
import Container from "~/components/structure/Container";
import Section from "~/components/structure/Section";
import Logo from 'public/assets/voicestack-whitelogo.svg'
import Image from "next/image";
import BoltIcon from "~/components/icons/BoltIcon";
import AlertIcon from "~/components/icons/AlertIcon";
import ChartBarIcon from "~/components/icons/ChartBarIcon";
import StackIcon from "~/components/icons/StackIcon";
import SparklesIcon from "~/components/icons/SparklesIcon";


{/* <script>
    import Section from "$lib/components/layout/Section.svelte";
    import Markdown from "svelte-exmarkdown";

    let md = " # h1";
</script> */}


function DentalCollective() {
    return (
      <div className="min-h-[100vh] flex flex-col">
        <Section className="py-sm md:pt-md bg-vs-blue flex-grow" >
          <Container>
            <div className="relative w-full flex items-center flex-col">
              <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[70px] justify-between pb-10 w-full">
                <div className="flex flex-col items-start w-full flex-grow lg:max-w-[620px]">
                  <div className="flex mb-4">
                    <Image src={Logo} alt='VoiceStack' className=''></Image>
                  </div>
                  <h1 className="text-white font-bold font-manrope text-left text-[36px] lg:text-[56px] leading-[116%] -tracking-[1px]  mb-[12px]">
                      <span className="text-[#B5EB92]">AI-driven</span> phone system custom-made for dental offices.
                  </h1>
                  <p className="text-left w-full font-medium text-[18px] md:text-[24px] leading-[1.33] text-white mb-[18px]">
                      Analyze phone calls, identify missed opportunities, and re-engage with prospects.
                  </p>
                  <p className="text-white/90 text-[16px] lg:text-[18px] max-w-[500px]">Increase new patient growth with state-of-the-art features including Call Transcriptions, Call Analytics, Two-way Texts & more.</p>

                  <div className="w-full h-full flex justify-start relative items-center md:py-8 py-8 text-center">
                    <ul className="flex flex-wrap h-full justify-start md:grid-cols-3 grid-cols-3 md:gap-[24px] gap-[24px]  z-10" >
                        <li className="bg-white/10 rounded-[10px] py-[18px] px-3 flex flex-col items-center justify-center w-[148px] gap-[6px]">
                              <SparklesIcon></SparklesIcon>
                              <span className="text-white text-sm leading-[1.6] text-center">AI-Driven Transcripts</span>
                        </li>
                        <li className="bg-white/10 rounded-[10px] py-[18px] px-3 flex flex-col items-center justify-center w-[148px] gap-[6px]">
                              <StackIcon></StackIcon>
                              <span className="text-white text-sm leading-[1.6] text-center">AI-Driven Transcripts</span>
                        </li>
                        <li className="bg-white/10 rounded-[10px] py-[18px] px-3 flex flex-col items-center justify-center w-[148px] gap-[6px]">
                              <ChartBarIcon></ChartBarIcon>
                              <span className="text-white text-sm leading-[1.6] text-center">AI-Driven Transcripts</span>
                        </li>
                        <li className="bg-white/10 rounded-[10px] py-[18px] px-3 flex flex-col items-center justify-center w-[148px] gap-[6px]">
                              <AlertIcon></AlertIcon>
                              <span className="text-white text-sm leading-[1.6] text-center">AI-Driven Transcripts</span>
                        </li>
                        <li className="bg-white/10 rounded-[10px] py-[18px] px-3 flex flex-col items-center justify-center w-[148px] gap-[6px]">
                              <BoltIcon></BoltIcon>
                              <span className="text-white text-sm leading-[1.6] text-center">AI-Driven Transcripts</span>
                        </li>
                        

                      
                    </ul>
                  </div>
                </div>

                <div className="flex-grow border rounded-[20px] bg-white p-8 lg:max-w-[514px] relative">
                  <h2 className="text-3xl mb-[5px]">Book a Demo</h2>
                  <p className="text-gray-700 text-base mb-6">Complete the brief form to schedule your free VoiceStack demo!</p>
                  <HubSpotForm></HubSpotForm>
                </div>
                
              </div>
              
            </div>
            
          </Container>
        </Section>
        <footer className="flex w-full justify-center py-8 bg-gray-50 px-8 text-center">
          <p>&copy;2017 - 2024 Good Methods Global Inc. All rights reserved.</p>
        </footer>
      </div>
        
    );
}

export default DentalCollective;

