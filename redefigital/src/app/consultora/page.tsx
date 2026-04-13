import Wrapper from "@/components/global/wrapper";
import AnalysisConsultora from "@/components/marketing/analysis-consultora";
import FeaturesConsultora from "@/components/marketing/features-consultora";
import HeroConsultora from "@/components/marketing/hero-consultora";
import Integration from "@/components/marketing/integration";
import CtaConsultora from "@/components/marketing/cta-consultora";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";

const ConsultoraPage = () => {
    return (
        <>
            <Navbar />
            <Wrapper className="py-20 relative">
                <HeroConsultora />
                <div id="hub">
                    <Integration />
                </div>
                <div id="analise">
                    <AnalysisConsultora />
                </div>
                <div id="funcionalidades">
                    <FeaturesConsultora />
                </div>
                <CtaConsultora />
            </Wrapper>
            <Footer />
        </>
    )
};

export default ConsultoraPage
