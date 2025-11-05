import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/marketing/analysis";
import Companies from "@/components/marketing/companies";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import Integration from "@/components/marketing/integration";
import Cta from "@/components/marketing/cta";

const HomePage = () => {
    return (
        <Wrapper className="py-20 relative">
            <Hero />
            <div id="marcas">
                <Companies />
            </div>
            <div id="hub">
                <Integration />
            </div>
            <div id="analise">
                <Analysis />
            </div>
            <div id="funcionalidades">
                <Features />
            </div>
            <Cta />
        </Wrapper>
    )
};

export default HomePage
