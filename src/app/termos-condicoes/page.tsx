import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";

const TermsPage = () => {
    return (
        <>
            <Navbar />
            <Wrapper className="py-20 relative">
                <Container>
                    <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">

                        <h1 className="text-4xl font-bold mb-8 text-center">Termos e Condições Gerais de Uso</h1>

                        <p className="text-lg text-muted-foreground mb-8 text-center">
                            Os serviços do REDEFIGITAL são fornecidos pela pessoa jurídica Razão Social/nome: <strong>RIVERIS LTDA ME</strong>, inscrito no CNPJ/CPF sob o nº <strong>13.530.690/0001-32</strong>, titular da propriedade intelectual sobre software, website, aplicativos, conteúdos e demais ativos relacionados à plataforma REDEFIGITAL.
                        </p>

                        {/* Seção 1 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">1. Do objeto</h2>
                            <p className="mb-4">
                                A plataforma visa licenciar o uso de seu software, website, aplicativos e demais ativos de propriedade intelectual, fornecendo ferramentas para auxiliar e dinamizar o dia a dia dos seus usuários.
                            </p>
                            <p className="mb-4">
                                A plataforma caracteriza-se pela prestação do serviço de aproximação entre os fabricantes de produtos cosméticos, os consultores dos produtos cosméticos e os comerciantes dos produtos cosméticos.
                            </p>
                            <p className="mb-4">
                                A plataforma realiza a aproximação dos atores retromencionados para fomentar e potencializar a possibilidade de negócios entre os usuários.
                            </p>
                        </section>

                        {/* Seção 2 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">2. Da aceitação</h2>
                            <p className="mb-4">
                                O presente Termo estabelece obrigações contratadas de livre e espontânea vontade, por tempo indeterminado, entre a plataforma e os usuários.
                            </p>
                            <p className="mb-4">
                                Ao utilizar a plataforma o usuário aceita integralmente as presentes normas e compromete-se a observá-las, sob o risco de aplicação das penalidades cabíveis.
                            </p>
                            <p className="mb-4">
                                A aceitação do presente instrumento é imprescindível para o acesso e para a utilização de quaisquer serviços fornecidos pela plataforma. Caso não concorde com as disposições deste instrumento, o usuário não deve utilizá-los.
                            </p>
                        </section>

                        {/* Seção 3 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">3. Do acesso dos usuários</h2>
                            <p className="mb-4">
                                Serão utilizadas todas as soluções técnicas à disposição do responsável pela plataforma para permitir o acesso ao serviço 24 (vinte e quatro) horas por dia, 7 (sete) dias por semana.
                            </p>
                            <p className="mb-4">
                                No entanto, a navegação na plataforma ou em alguma de suas páginas poderá ser interrompida, limitada ou suspensa para atualizações, modificações ou qualquer ação necessária ao seu bom funcionamento.
                            </p>
                        </section>

                        {/* Seção 4 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">4. Do cadastro</h2>
                            <p className="mb-4">
                                O acesso às funcionalidades da plataforma exigirá a realização de um cadastro prévio e, a depender dos serviços escolhidos, o pagamento de determinado valor.
                            </p>
                            <p className="mb-4">
                                Ao se cadastrar o usuário deverá informar dados completos, recentes e válidos, sendo de sua exclusiva responsabilidade manter referidos dados atualizados, bem como o usuário se compromete com a veracidade dos dados fornecidos.
                            </p>
                            <p className="mb-4">
                                O usuário se compromete a não informar seus dados cadastrais e/ou de acesso à plataforma a terceiros, responsabilizando-se integralmente pelo uso que deles seja feito.
                            </p>
                            <p className="mb-4">
                                Menores de 18 anos e aqueles que não possuírem plena capacidade civil deverão obter previamente o consentimento expresso de seus responsáveis legais para utilização da plataforma e dos serviços ou produtos, sendo de responsabilidade exclusiva dos mesmos o eventual acesso por menores de idade e por aqueles que não possuem plena capacidade civil sem a prévia autorização.
                            </p>
                            <p className="mb-4">
                                Mediante a realização do cadastro o usuário declara e garante expressamente ser plenamente capaz, podendo exercer e usufruir livremente dos serviços e produtos.
                            </p>
                            <p className="mb-4">
                                O usuário deverá fornecer um endereço de e-mail válido, através do qual o site realizará todas as comunicações necessárias.
                            </p>
                            <p className="mb-4">
                                Após a confirmação do cadastro, o usuário possuirá um login e uma senha pessoal, a qual assegura ao usuário o acesso individual à mesma. Desta forma, compete ao usuário exclusivamente a manutenção de referida senha de maneira confidencial e segura, evitando o acesso indevido às informações pessoais.
                            </p>
                            <p className="mb-4">
                                Toda e qualquer atividade realizada com o uso da senha será de responsabilidade do usuário, que deverá informar prontamente a plataforma em caso de uso indevido da respectiva senha.
                            </p>
                            <p className="mb-4">
                                Não será permitido ceder, vender, alugar ou transferir, de qualquer forma, a conta, que é pessoal e intransferível.
                            </p>
                            <p className="mb-4">
                                Caberá ao usuário assegurar que o seu equipamento seja compatível com as características técnicas que viabilize a utilização da plataforma e dos serviços ou produtos.
                            </p>
                            <p className="mb-4">
                                O usuário poderá, a qualquer tempo, requerer o cancelamento de seu cadastro junto à plataforma/aplicativo. O seu descadastramento será realizado o mais rapidamente possível, desde que não sejam verificados débitos em aberto.
                            </p>
                            <p className="mb-4">
                                O usuário, ao aceitar os Termos e Política de Privacidade, autoriza expressamente a plataforma a coletar, usar, armazenar, tratar, ceder ou utilizar as informações derivadas do uso dos serviços, do site e quaisquer plataformas, incluindo todas as informações preenchidas pelo usuário no momento em que realizar ou atualizar seu cadastro, além de outras expressamente descritas na Política de Privacidade que deverá ser autorizada pelo usuário.
                            </p>
                        </section>

                        {/* Seção 5 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">5. Dos serviços ou produtos</h2>
                            <p className="mb-4">
                                A plataforma poderá disponibilizar para o usuário um conjunto específico de funcionalidades e ferramentas para otimizar o uso dos serviços e produtos.
                            </p>
                            <p className="mb-4">
                                Na plataforma os serviços ou produtos oferecidos estão descritos e apresentados com o maior grau de exatidão, contendo informações sobre suas características, qualidades, quantidades, composição, preço, garantia, prazos de validade e origem, entre outros dados, bem como sobre os riscos que apresentam à saúde e segurança do usuário.
                            </p>
                            <p className="mb-4">
                                Antes de finalizar a compra sobre determinado produto ou serviço, o usuário deverá se informar sobre as suas especificações e sobre a sua destinação.
                            </p>
                        </section>

                        {/* Seção 6 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">6. Dos preços</h2>
                            <p className="mb-4">
                                A plataforma se reserva no direito de reajustar unilateralmente, a qualquer tempo, os valores dos serviços ou produtos sem consulta ou anuência prévia do usuário.
                            </p>
                            <p className="mb-4">
                                Os valores aplicados são aqueles que estão em vigor no momento do pedido.
                            </p>
                            <p className="mb-4">
                                Os preços são indicados em reais e não incluem as taxas de entrega, as quais são especificadas à parte e são informadas ao usuário antes da finalização do pedido.
                            </p>
                            <p className="mb-4">
                                Na contratação de determinado serviço ou produto, a plataforma poderá solicitar as informações financeiras do usuário, como CPF, endereço de cobrança e dados de cartões.
                            </p>
                            <p className="mb-4">
                                Ao inserir referidos dados o usuário concorda que sejam cobrados, de acordo com a forma de pagamento que venha a ser escolhida, os preços então vigentes e informados quando da contratação. Referidos dados financeiros poderão ser armazenados para facilitar acessos e contratações futuras.
                            </p>
                            <p className="mb-4">
                                A contratação dos serviços será renovada automaticamente pela plataforma, independentemente de comunicação ao usuário, mediante cobrança periódica da mesma forma de pagamento indicada pelo usuário quando da contratação do serviço.
                            </p>
                        </section>

                        {/* Seção 7 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">7. Do cancelamento</h2>
                            <p className="mb-4">
                                O usuário poderá cancelar a contratação dos serviços de acordo com os termos que forem definidos no momento de sua contratação.
                            </p>
                            <p className="mb-4">
                                Ainda, o usuário também poderá cancelar os serviços em até 7 (sete) dias após a contratação, mediante contato com o email: <a href="mailto:suporte@redefigital.com.br" className="text-primary hover:underline">suporte@redefigital.com.br</a> de acordo com o Código de Defesa do Consumidor (Lei no. 8.078/90).
                            </p>
                            <p className="mb-4">
                                O serviço poderá ser cancelado por:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>a) parte do usuário: nessas condições os serviços somente cessarão quando concluído o ciclo vigente ao tempo do cancelamento;</li>
                                <li>b) violação dos Termos de Uso: os serviços serão cessados imediatamente.</li>
                            </ul>
                        </section>

                        {/* Seção 8 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">8. Da troca e devolução</h2>
                            <p className="mb-4">
                                A política de troca e devoluções da plataforma é regida conforme o Código de Defesa do Consumidor (Lei nº 8.078/90).
                            </p>
                            <p className="mb-4">
                                A troca e/ou devolução do produto poderá ocorrer por:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>a) direito de arrependimento;</li>
                                <li>b) vício do produto.</li>
                            </ul>
                            <p className="mb-4">
                                Em caso de arrependimento, o usuário poderá devolver o produto em até 7 (sete) dias após o seu recebimento, mediante contato com o email: <a href="mailto:suporte@redefigital.com.br" className="text-primary hover:underline">suporte@redefigital.com.br</a> de acordo com o Código de Defesa do Consumidor (Lei nº 8.078/90).
                            </p>
                            <p className="mb-4">
                                Em caso de vício do produto, deverá ser verificado vícios de qualidade ou quantidade que tornem o produto impróprios ou inadequados ao consumo a que se destinam ou que lhes diminuam o valor.
                            </p>
                            <p className="mb-4">
                                Ainda, poderão ser trocados ou devolvidos os produtos ou serviços que apresentam disparidade com as indicações constantes na plataforma no momento da compra ou na embalagem, respeitando as variações decorrentes de sua natureza.
                            </p>
                            <p className="mb-4">
                                O usuário deverá entrar em contato com o email: <a href="mailto:suporte@redefigital.com.br" className="text-primary hover:underline">suporte@redefigital.com.br</a> tão logo constate o vício.
                            </p>
                            <p className="mb-4">
                                Se, no prazo máximo de 30 (trinta) dias, não for possível resolver o vício ou, independentemente deste prazo, a substituição das partes viciadas puder comprometer a qualidade ou características do produto ou serviço, diminuir-lhe o valor ou se tratar de produto ou serviço essencial, o usuário poderá optar pela substituição do produto por outro da mesma espécie ou pela reexecução do serviço, pela devolução das quantias pagas ou pelo abatimento proporcional do preço.
                            </p>
                        </section>

                        {/* Seção 9 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">9. Do suporte</h2>
                            <p className="mb-4">
                                Em caso de qualquer dúvida, sugestão ou problema com a utilização da plataforma, o usuário poderá entrar em contato com o suporte, através do email: <a href="mailto:suporte@redefigital.com.br" className="text-primary hover:underline">suporte@redefigital.com.br</a>
                            </p>
                            <p className="mb-4">
                                Estes serviços de atendimento ao usuário estarão disponíveis nos seguintes dias e horários: de segunda a sexta feiras das 8h:00 as 17h:00 e 24h no chatbot.
                            </p>
                        </section>

                        {/* Seção 10 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">10. Das responsabilidades</h2>
                            <p className="mb-4">
                                É de responsabilidade do usuário:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>a) defeitos ou vícios técnicos originados no próprio sistema do usuário;</li>
                                <li>b) a correta utilização da plataforma, dos serviços ou produtos oferecidos, prezando pela boa convivência, pelo respeito e cordialidade entre os usuários;</li>
                                <li>c) pelo cumprimento e respeito ao conjunto de regras disposto nesse Termo de Condições Geral de Uso, na respectiva Política de Privacidade e na legislação nacional e internacional;</li>
                                <li>d) pela proteção aos dados de acesso à sua conta/perfil (login e senha).</li>
                                <li>e) os conteúdos ou atividades ilícitas praticadas através da sua plataforma.</li>
                                <li>f) pela proteção aos dados a que tiver acesso em virtude do seu perfil junto à plataforma, assumindo obrigação de não divulgação a que título for de qualquer dados à sua disposição, sob pena de responsabilização civil, criminal e administrativa.</li>
                            </ul>
                            <p className="mb-4">
                                É de responsabilidade da plataforma REDEFIGITAL:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>a) indicar as características do serviço ou produto;</li>
                                <li>b) as informações que foram por ele divulgadas, sendo que os comentários ou informações divulgadas por usuários são de inteira responsabilidade dos próprios usuários;</li>
                            </ul>
                            <p className="mb-4">
                                A plataforma não se responsabiliza por links externos contidos em seu sistema que possam redirecionar o usuário à ambiente externo a sua rede.
                            </p>
                            <p className="mb-4">
                                Não poderão ser incluídos links externos ou páginas que sirvam para fins comerciais ou publicitários ou quaisquer informações ilícitas, violentas, polêmicas, pornográficas, xenofóbicas, discriminatórias ou ofensivas.
                            </p>
                        </section>

                        {/* Seção 11 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">11. Dos direitos autorais</h2>
                            <p className="mb-4">
                                O presente Termo de Uso concede aos usuários uma licença não exclusiva, não transferível e não sublicenciável, para acessar e fazer uso da plataforma e dos serviços e produtos por ela disponibilizados.
                            </p>
                            <p className="mb-4">
                                A estrutura do site ou aplicativo, as marcas, logotipos, nomes comerciais, layouts, gráficos e design de interface, imagens, ilustrações, fotografias, apresentações, vídeos, conteúdos escritos e de som e áudio, programas de computador, banco de dados, arquivos de transmissão e quaisquer outras informações e direitos de propriedade intelectual da razão social <strong>RIVERIS DISTRIBUIDORA LTDA</strong>, observados os termos da Lei da Propriedade Industrial (Lei nº 9.279/96), Lei de Direitos Autorais (Lei nº 9.610/98) e Lei do Software (Lei nº 9.609/98), estão devidamente reservados.
                            </p>
                            <p className="mb-4">
                                Este Termos de Uso não cede ou transfere ao usuário qualquer direito, de modo que o acesso não gera qualquer direito de propriedade intelectual ao usuário, exceto pela licença limitada ora concedida.
                            </p>
                            <p className="mb-4">
                                O uso da plataforma pelo usuário é pessoal, individual e intransferível, sendo vedado qualquer uso não autorizado, comercial ou não-comercial.
                            </p>
                            <p className="mb-4">
                                Tais usos consistirão em violação dos direitos de propriedade intelectual da razão social <strong>RIVERIS DISTRIBUIDORA LTDA</strong>, puníveis nos termos da legislação aplicável.
                            </p>
                        </section>

                        {/* Seção 12 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">12. Das sanções</h2>
                            <p className="mb-4">
                                Sem prejuízo das demais medidas legais cabíveis, a razão social <strong>RIVERIS DISTRIBUIDORA LTDA</strong> poderá, a qualquer momento, advertir, suspender ou cancelar a conta do usuário:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>a) que violar qualquer dispositivo do presente Termo;</li>
                                <li>b) que descumprir os seus deveres de usuário;</li>
                                <li>c) que tiver qualquer comportamento fraudulento, doloso ou que ofenda a terceiros.</li>
                            </ul>
                        </section>

                        {/* Seção 13 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">13. Da rescisão</h2>
                            <p className="mb-4">
                                A não observância das obrigações pactuadas neste Termo de Uso ou da legislação aplicável poderá, sem prévio aviso, ensejar a imediata rescisão unilateral por parte da razão social <strong>RIVERIS DISTRIBUIDORA LTDA</strong> e o bloqueio de todos os serviços prestados ao usuário.
                            </p>
                        </section>

                        {/* Seção 14 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">14. Das alterações</h2>
                            <p className="mb-4">
                                Os itens descritos no presente instrumento poderão sofrer alterações, unilateralmente e a qualquer tempo, por parte da empresa <strong>RIVERIS DISTRIBUIDORA LTDA</strong>, para adequar ou modificar os serviços, bem como para atender novas exigências legais.
                            </p>
                            <p className="mb-4">
                                As alterações serão veiculadas pela plataforma REDEFIGITAL e o usuário poderá optar por aceitar o novo conteúdo ou por cancelar o uso dos serviços, caso seja assinante de algum serviço.
                            </p>
                            <p className="mb-4">
                                Os serviços oferecidos podem, a qualquer tempo e unilateralmente, e sem qualquer aviso prévio, ser deixados de fornecer, alterados em suas características, bem como restringido para o uso ou acesso.
                            </p>
                        </section>

                        {/* Seção 15 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">15. Da política de privacidade</h2>
                            <p className="mb-4">
                                Além do presente Termo, o usuário deverá consentir com as disposições contidas na respectiva Política de Privacidade a ser apresentada a todos os interessados dentro da interface da plataforma.
                            </p>
                        </section>

                        {/* Seção 16 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">16. Do foro</h2>
                            <p className="mb-4">
                                Para a solução de controvérsias decorrentes do presente instrumento será aplicado integralmente o Direito brasileiro.
                            </p>
                            <p className="mb-4">
                                Os eventuais litígios deverão ser apresentados no foro da comarca de <strong>São José do Rio Preto/SP</strong>, renunciando a qualquer outro por mais privilegiado que seja.
                            </p>
                        </section>

                        {/* Footer da Página */}
                        <div className="border-t border-border pt-8 mt-12">
                            <p className="text-center text-sm text-muted-foreground">
                                Última atualização: 27 de novembro de 2025
                            </p>
                            <p className="text-center text-sm text-muted-foreground mt-2">
                                © 2025 RIVERIS LTDA ME - REDEFIGITAL. Todos os direitos reservados.
                            </p>
                        </div>

                    </div>
                </Container>
            </Wrapper>
            <Footer />
        </>
    );
};

export default TermsPage;
