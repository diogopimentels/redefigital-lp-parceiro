import { FEATURES_CONSULTORA } from "@/constants/features-consultora";
import { cn } from "@/lib";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const FeaturesConsultora = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                {/* --- COPY PARA CONSULTORA --- */}
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-4">
                        Venda produtos incríveis <span className="font-subheading italic">sem investir em estoque</span>
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Tenha acesso a centenas de produtos de cosméticos de várias marcas. Simples assim.
                    </p>
                </div>
                {/* --- FIM DA COPY --- */}
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 relative overflow-visible">

                {FEATURES_CONSULTORA.map((feature, index) => (
                    <Container key={feature.title} delay={0.1 + index * 0.1} className={cn(
                        "relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-border/50 hover:border-border/100 transition-colors",
                        index === 3 && "lg:col-span-2",
                        index === 2 && "md:col-span-2 lg:col-span-1",
                    )}>

                        {/* Cores do MagicCard */}
                        <MagicCard
                            gradientFrom="#8B2E52" // Rosa (Secondary)
                            gradientTo="#B76A58" // Terracota (Primary)
                            className="p-4 lg:p-6 lg:rounded-3xl"
                            gradientColor="rgba(183, 106, 88, 0.1)" // Glow Terracota
                        >
                            {/* 1. Ícone de Destaque */}
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                                <feature.icon className="size-8 text-primary" />
                            </div>

                            {/* 2. Título */}
                            <h3 className="text-xl font-semibold mb-2">
                                {feature.title}
                            </h3>

                            {/* 3. Descrição */}
                            <p className="text-sm text-muted-foreground">
                                {feature.description}
                            </p>

                        </MagicCard>
                    </Container>
                ))}
            </div>
        </div>
    )
};

export default FeaturesConsultora