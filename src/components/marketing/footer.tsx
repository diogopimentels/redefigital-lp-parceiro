import Link from "next/link";
import Image from "next/image";
import Container from "../global/container";
import Icons from "../global/icons";

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-foreground/5 pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
                <Container>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-center gap-2">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/redefigital.png"
                                    alt="Logo Redefigital"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-base md:text-lg font-medium text-foreground">
                                Redefigital
                            </span>
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm text-start">
                            Conecte, venda, cresça. Sua marca na rede de consultora mais eficiente do Brasil.
                        </p>
                    </div>
                </Container>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <Container delay={0.1} className="h-auto">
                            <h3 className="text-base font-medium text-foreground">
                                Navegação
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                <li className="mt-2">
                                    <Link href="#hub" className="link hover:text-foreground transition-all duration-300">
                                        Hub 5.0
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#marcas" className="link hover:text-foreground transition-all duration-300">
                                        Marcas
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#analise" className="link hover:text-foreground transition-all duration-300">
                                        Análise
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#funcionalidades" className="link hover:text-foreground transition-all duration-300">
                                        Funcionalidades
                                    </Link>
                                </li>
                            </ul>
                        </Container>
                        <Container delay={0.2} className="h-auto">
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-foreground">
                                    Empresa
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                    <li>
                                        <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                            Sobre Nós
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                            Política de Privacidade
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                            Termos & Condições
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                    </div>
                </div>
            </div>

            <Container delay={0.5} className="w-full relative mt-12 lg:mt-20">
                <div className="mt-8 md:flex md:items-center justify-center footer w-full">
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()} Redefigital. Todos os direitos reservados.
                    </p>
                </div>
            </Container>
        </footer>
    )
};

export default Footer
