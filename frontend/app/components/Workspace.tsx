import Header from "./Header";
import MissionCard from "./MissionCard";
import PromptInput from "./PromptInput";


export default function Workspace(){
    return(
        <section className="flex flex-1 flex-col p-10">
            <Header />

            <div className="text-center">
                <MissionCard />
            </div>
            <div className="mt-auto mb-1">
                <PromptInput />
            </div>

        </section>
        
    );
}