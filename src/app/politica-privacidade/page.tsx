import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";

const PrivacyPolicyPage = () => {
    return (
        <>
            <Navbar />
            <Wrapper className="py-20 relative">
                <Container>
                    <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">

                        <h1 className="text-4xl font-bold mb-8">Política de Privacidade e Segurança</h1>

                        <p className="text-lg text-muted-foreground mb-8">
                            Última atualização: 25 de novembro de 2025
                        </p>

                        {/* Seção 1 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">1. Informações Gerais</h2>
                            <p className="mb-4">
                                A presente Política de Privacidade e Segurança tem por objetivo esclarecer como a plataforma <strong>REDEFIGITAL</strong>,
                                operada pela <strong>RIVERIS LTDA ME</strong>, inscrita no CNPJ sob o nº <strong>[INSERIR CNPJ]</strong>,
                                com sede em São José do Rio Preto/SP, realiza a coleta, uso, armazenamento, tratamento e proteção dos dados
                                pessoais dos seus usuários.
                            </p>
                            <p className="mb-4">
                                A RIVERIS LTDA ME atua como <strong>Controladora de Dados</strong> nos termos da Lei Geral de Proteção de Dados
                                (LGPD – Lei nº 13.709/2018), sendo responsável pelas decisões referentes ao tratamento de dados pessoais.
                            </p>
                            <p className="mb-4">
                                Esta política explica de forma clara e transparente quais dados são coletados, as finalidades do tratamento,
                                os fundamentos legais, as medidas de segurança implementadas e os direitos dos titulares de dados.
                            </p>
                        </section>

                        {/* Seção 2 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">2. Dados Coletados</h2>
                            <p className="mb-4">
                                A REDEFIGITAL coleta diferentes categorias de dados pessoais, conforme descrito abaixo:
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">2.1. Dados Cadastrais Fornecidos pelo Usuário</h3>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>Nome completo</li>
                                <li>CPF ou CNPJ</li>
                                <li>Data de nascimento</li>
                                <li>Endereço de e-mail</li>
                                <li>Número de telefone/celular</li>
                                <li>Endereço completo (CEP, logradouro, número, complemento, bairro, cidade, estado)</li>
                                <li>Informações de perfil profissional (quando aplicável)</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">2.2. Dados de Uso, Logs e Interações</h3>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>Registros de acesso à plataforma (data, hora, duração)</li>
                                <li>Páginas visitadas e funcionalidades utilizadas</li>
                                <li>Histórico de navegação na plataforma</li>
                                <li>Interações com conteúdos, produtos e serviços</li>
                                <li>Comunicações enviadas e recebidas através da plataforma</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">2.3. Dados Técnicos do Dispositivo</h3>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>Endereço IP (Internet Protocol)</li>
                                <li>Tipo e versão do navegador</li>
                                <li>Sistema operacional</li>
                                <li>Identificadores de dispositivo</li>
                                <li>Resolução de tela</li>
                                <li>Fuso horário e configurações de idioma</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">2.4. Dados Financeiros (quando aplicável)</h3>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>Informações de pagamento (processadas por meio de parceiros certificados PCI-DSS)</li>
                                <li>Histórico de transações realizadas</li>
                                <li>Dados bancários para recebimento de valores (consultoras e parceiros)</li>
                                <li>Notas fiscais e comprovantes</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">2.5. Cookies, Sessões e Tecnologias de Rastreamento</h3>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>Cookies de sessão e persistentes</li>
                                <li>Web beacons e pixels de rastreamento</li>
                                <li>Tokens de autenticação e sessão</li>
                                <li>Identificadores únicos para analytics e remarketing</li>
                            </ul>
                        </section>

                        {/* Seção 3 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">3. Como os Dados São Usados</h2>
                            <p className="mb-4">
                                Os dados pessoais coletados são utilizados para as seguintes finalidades:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li><strong>Operação da plataforma:</strong> Viabilizar o funcionamento técnico e operacional dos serviços oferecidos pela REDEFIGITAL.</li>
                                <li><strong>Autenticação e segurança:</strong> Identificar e autenticar usuários, prevenir fraudes, acessos não autorizados e atividades ilícitas.</li>
                                <li><strong>Comunicação:</strong> Enviar notificações, atualizações, informações sobre pedidos, transações, novidades e comunicações de marketing (quando consentido).</li>
                                <li><strong>Prestação de serviços contratados:</strong> Executar os contratos firmados entre usuários, consultoras e parceiros comerciais.</li>
                                <li><strong>Processamento de transações:</strong> Intermediar, processar e registrar transações comerciais e financeiras.</li>
                                <li><strong>Otimização da experiência:</strong> Personalizar conteúdos, recomendar produtos e melhorar a usabilidade da plataforma.</li>
                                <li><strong>Análise e estatísticas:</strong> Gerar relatórios, métricas e análises para melhorias contínuas dos serviços.</li>
                                <li><strong>Atendimento ao usuário:</strong> Responder solicitações, dúvidas, reclamações e fornecer suporte técnico.</li>
                                <li><strong>Cumprimento de obrigações legais:</strong> Atender exigências fiscais, tributárias, regulatórias e judiciais.</li>
                                <li><strong>Registros contábeis e auditorias:</strong> Manter registros necessários para fins contábeis, auditorias e conformidade legal.</li>
                            </ul>
                        </section>

                        {/* Seção 4 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">4. Base Legal do Tratamento (LGPD)</h2>
                            <p className="mb-4">
                                O tratamento de dados pessoais pela REDEFIGITAL está fundamentado nas seguintes bases legais previstas na LGPD:
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">4.1. Consentimento</h3>
                            <p className="mb-4">
                                Quando você fornece autorização expressa para o tratamento de seus dados pessoais para finalidades específicas,
                                como o envio de comunicações de marketing e newsletters.
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">4.2. Execução de Contrato</h3>
                            <p className="mb-4">
                                Para o cumprimento de obrigações decorrentes dos Termos e Condições Gerais de Uso aceitos pelo usuário,
                                bem como para a prestação dos serviços solicitados.
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">4.3. Legítimo Interesse</h3>
                            <p className="mb-4">
                                Para fins de prevenção a fraudes, segurança da plataforma, melhorias nos serviços, análises estatísticas
                                e otimização da experiência do usuário, sempre respeitando os direitos e liberdades fundamentais dos titulares.
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">4.4. Cumprimento de Obrigação Legal ou Regulatória</h3>
                            <p className="mb-4">
                                Para atender exigências legais, regulatórias, fiscais, tributárias, bem como ordens judiciais,
                                requisições de autoridades competentes e cumprimento de normas aplicáveis.
                            </p>
                        </section>

                        {/* Seção 5 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">5. Compartilhamento de Dados</h2>
                            <p className="mb-4">
                                A REDEFIGITAL poderá compartilhar dados pessoais com terceiros nas seguintes hipóteses:
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">5.1. Prestadores de Serviços e Parceiros</h3>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li><strong>Processadores de pagamento:</strong> Para viabilizar transações financeiras (ex: gateways de pagamento, adquirentes, bandeiras de cartões).</li>
                                <li><strong>Provedores de hospedagem e infraestrutura:</strong> Para armazenamento de dados em servidores seguros (cloud computing).</li>
                                <li><strong>Ferramentas de analytics:</strong> Para análise de uso, métricas e otimização da plataforma (ex: Google Analytics).</li>
                                <li><strong>Plataformas de e-mail marketing:</strong> Para envio de comunicações autorizadas.</li>
                                <li><strong>Serviços de autenticação e segurança:</strong> Para proteção contra fraudes e acessos não autorizados.</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">5.2. Obrigações Legais</h3>
                            <p className="mb-4">
                                Quando necessário para cumprimento de ordem judicial, requisição de autoridade competente ou disposição legal.
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">5.3. Proteção de Direitos</h3>
                            <p className="mb-4">
                                Para proteger os direitos, propriedade e segurança da REDEFIGITAL, seus usuários e terceiros,
                                incluindo a aplicação dos Termos de Uso e prevenção de atividades ilícitas.
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">5.4. Política de Não Venda de Dados</h3>
                            <p className="mb-4 font-semibold">
                                A REDEFIGITAL NÃO vende, aluga, comercializa ou cede dados pessoais de seus usuários a terceiros
                                para finalidades de marketing ou publicidade sem o consentimento expresso do titular.
                            </p>
                        </section>

                        {/* Seção 6 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">6. Armazenamento e Segurança</h2>
                            <p className="mb-4">
                                A REDEFIGITAL adota medidas técnicas e administrativas de segurança para proteger os dados pessoais
                                contra acessos não autorizados, situações acidentais ou ilícitas de destruição, perda, alteração,
                                comunicação ou qualquer forma de tratamento inadequado ou ilícito.
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">6.1. Medidas de Segurança Implementadas</h3>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li><strong>Criptografia:</strong> Utilização de protocolos SSL/TLS para comunicação segura e criptografia de dados sensíveis armazenados.</li>
                                <li><strong>Controles de acesso:</strong> Autenticação multifator, controle de permissões e acesso restrito a dados pessoais.</li>
                                <li><strong>Servidores protegidos:</strong> Infraestrutura em cloud computing com certificações de segurança internacionais.</li>
                                <li><strong>Backups regulares:</strong> Rotinas automatizadas de backup para garantir a disponibilidade e integridade dos dados.</li>
                                <li><strong>Anonimização e pseudonimização:</strong> Quando possível, utilização de técnicas de anonimização para proteção adicional.</li>
                                <li><strong>Monitoramento contínuo:</strong> Sistemas de detecção de intrusão, logs de auditoria e monitoramento de atividades suspeitas.</li>
                                <li><strong>Treinamento de equipe:</strong> Capacitação contínua das equipes sobre boas práticas de segurança e proteção de dados.</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">6.2. Prazo de Retenção</h3>
                            <p className="mb-4">
                                Os dados pessoais serão armazenados pelo período necessário para o cumprimento das finalidades para as quais
                                foram coletados, incluindo o atendimento de obrigações legais, contratuais, de prestação de contas e
                                regulatórias. Após esse período, os dados serão eliminados ou anonimizados, salvo disposição legal em contrário.
                            </p>
                        </section>

                        {/* Seção 7 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">7. Direitos do Usuário (LGPD)</h2>
                            <p className="mb-4">
                                Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você, titular dos dados, possui os seguintes direitos:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li><strong>Confirmação da existência de tratamento:</strong> Saber se a REDEFIGITAL trata os seus dados pessoais.</li>
                                <li><strong>Acesso aos dados:</strong> Obter cópia dos dados pessoais tratados pela plataforma.</li>
                                <li><strong>Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
                                <li><strong>Anonimização, bloqueio ou eliminação:</strong> Requerer a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade.</li>
                                <li><strong>Portabilidade:</strong> Solicitar a portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa.</li>
                                <li><strong>Eliminação dos dados:</strong> Requerer a exclusão dos dados pessoais tratados com base no consentimento, salvo hipóteses legais de retenção.</li>
                                <li><strong>Informação sobre compartilhamento:</strong> Saber com quais entidades públicas e privadas os dados foram compartilhados.</li>
                                <li><strong>Informação sobre a possibilidade de não consentir:</strong> Ser informado sobre a possibilidade de não fornecer consentimento e as consequências.</li>
                                <li><strong>Revogação do consentimento:</strong> Revogar o consentimento previamente fornecido, a qualquer momento.</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">7.1. Como Exercer Seus Direitos</h3>
                            <p className="mb-4">
                                Para exercer qualquer um dos direitos acima, você pode entrar em contato conosco através do e-mail oficial:
                            </p>
                            <p className="mb-4 font-semibold text-lg">
                                📧 <a href="mailto:suporte@redefigital.com.br" className="text-primary hover:underline">suporte@redefigital.com.br</a>
                            </p>
                            <p className="mb-4">
                                As solicitações serão analisadas e respondidas em conformidade com os prazos e procedimentos estabelecidos pela LGPD.
                            </p>
                        </section>

                        {/* Seção 8 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">8. Cookies e Tecnologias Semelhantes</h2>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">8.1. O que são Cookies</h3>
                            <p className="mb-4">
                                Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você acessa um site.
                                Eles permitem que o site reconheça o seu dispositivo e armazene informações sobre suas preferências e atividades.
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">8.2. Para que Servem</h3>
                            <p className="mb-4">
                                A REDEFIGITAL utiliza cookies e tecnologias semelhantes para:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li><strong>Cookies essenciais:</strong> Necessários para o funcionamento básico da plataforma (ex: autenticação, segurança).</li>
                                <li><strong>Cookies de desempenho:</strong> Para entender como os usuários interagem com a plataforma e melhorar a performance.</li>
                                <li><strong>Cookies de funcionalidade:</strong> Para lembrar suas preferências e personalizar sua experiência.</li>
                                <li><strong>Cookies de publicidade:</strong> Para exibir anúncios relevantes e medir a eficácia de campanhas de marketing.</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">8.3. Gerenciamento de Cookies</h3>
                            <p className="mb-4">
                                Você pode configurar seu navegador para recusar cookies ou alertá-lo quando um cookie estiver sendo enviado.
                                No entanto, se você desativar os cookies, algumas funcionalidades da plataforma podem não funcionar corretamente.
                            </p>
                            <p className="mb-4">
                                Para mais informações sobre como gerenciar cookies, consulte as configurações do seu navegador ou visite:
                            </p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Google Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">support.google.com/chrome</a></li>
                                <li>Mozilla Firefox: <a href="https://support.mozilla.org/pt-BR/kb/cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">support.mozilla.org</a></li>
                                <li>Safari: <a href="https://support.apple.com/pt-br/guide/safari" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">support.apple.com/safari</a></li>
                                <li>Microsoft Edge: <a href="https://support.microsoft.com/pt-br/microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">support.microsoft.com/edge</a></li>
                            </ul>
                        </section>

                        {/* Seção 9 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">9. Exclusão de Dados e Descadastramento</h2>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">9.1. Solicitação de Exclusão</h3>
                            <p className="mb-4">
                                Você pode solicitar a exclusão da sua conta e dos dados pessoais associados a qualquer momento através do e-mail:
                            </p>
                            <p className="mb-4 font-semibold">
                                📧 <a href="mailto:suporte@redefigital.com.br" className="text-primary hover:underline">suporte@redefigital.com.br</a>
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">9.2. Prazo de Exclusão</h3>
                            <p className="mb-4">
                                A exclusão dos dados será realizada em até <strong>30 (trinta) dias</strong> após a confirmação da solicitação,
                                salvo quando houver impedimento legal ou contratual que justifique a retenção por prazo superior.
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">9.3. Limites Legais à Exclusão</h3>
                            <p className="mb-4">
                                Alguns dados podem ser mantidos mesmo após a solicitação de exclusão, quando necessário para:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>Cumprimento de obrigações legais, fiscais ou regulatórias;</li>
                                <li>Exercício regular de direitos em processo judicial, administrativo ou arbitral;</li>
                                <li>Proteção do crédito;</li>
                                <li>Segurança e prevenção a fraudes;</li>
                                <li>Atendimento a determinações de autoridades competentes.</li>
                            </ul>
                            <p className="mb-4">
                                Nestes casos, os dados serão mantidos apenas pelo período estritamente necessário e serão eliminados
                                tão logo cessem as hipóteses que justificaram sua retenção.
                            </p>
                        </section>

                        {/* Seção 10 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">10. Alterações da Política</h2>
                            <p className="mb-4">
                                A REDEFIGITAL reserva-se o direito de atualizar, modificar ou alterar esta Política de Privacidade e Segurança
                                a qualquer momento, a fim de refletir mudanças nas práticas de tratamento de dados, adequações legais,
                                melhorias nos serviços ou alterações tecnológicas.
                            </p>
                            <p className="mb-4">
                                Sempre que houver alterações substanciais, os usuários serão notificados através de:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>E-mail cadastrado na plataforma;</li>
                                <li>Aviso destacado no site ou aplicativo;</li>
                                <li>Publicação da versão atualizada com destaque para a data da última modificação.</li>
                            </ul>
                            <p className="mb-4">
                                A continuidade do uso da plataforma após a publicação de alterações implica na aceitação das novas condições.
                                Caso você não concorde com as modificações realizadas, poderá solicitar o cancelamento da sua conta e a
                                exclusão dos seus dados pessoais, observadas as limitações legais.
                            </p>
                            <p className="mb-4">
                                Recomendamos que você revise periodicamente esta política para se manter informado sobre como protegemos seus dados.
                            </p>
                        </section>

                        {/* Seção 11 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">11. Contato Oficial</h2>
                            <p className="mb-4">
                                Para dúvidas, esclarecimentos, solicitações relacionadas aos seus dados pessoais, exercício dos direitos
                                previstos na LGPD ou questões sobre esta Política de Privacidade e Segurança, entre em contato conosco:
                            </p>

                            <div className="bg-muted p-6 rounded-lg mb-4">
                                <p className="mb-2"><strong>RIVERIS LTDA ME (REDEFIGITAL)</strong></p>
                                <p className="mb-2"><strong>CNPJ:</strong> [INSERIR CNPJ]</p>
                                <p className="mb-2"><strong>E-mail oficial:</strong> <a href="mailto:suporte@redefigital.com.br" className="text-primary hover:underline">suporte@redefigital.com.br</a></p>
                                <p className="mb-2"><strong>Sede:</strong> São José do Rio Preto/SP</p>
                            </div>

                            <p className="mb-4">
                                Todas as solicitações serão analisadas e respondidas em conformidade com a legislação vigente e
                                em prazos razoáveis, sempre buscando garantir a proteção dos seus direitos.
                            </p>
                        </section>

                        {/* Seção 12 */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">12. Lei Aplicável e Foro</h2>
                            <p className="mb-4">
                                Esta Política de Privacidade e Segurança é regida pelas leis da República Federativa do Brasil,
                                em especial pela Lei Geral de Proteção de Dados (Lei nº 13.709/2018), pelo Marco Civil da Internet
                                (Lei nº 12.965/2014), pelo Código de Defesa do Consumidor (Lei nº 8.078/1990) e demais normas aplicáveis.
                            </p>
                            <p className="mb-4">
                                Fica eleito o foro da Comarca de <strong>São José do Rio Preto, Estado de São Paulo</strong>,
                                com exclusão de qualquer outro, por mais privilegiado que seja, para dirimir quaisquer questões
                                oriundas desta Política de Privacidade e Segurança.
                            </p>
                        </section>

                        {/* Footer da Política */}
                        <div className="border-t border-border pt-8 mt-12">
                            <p className="text-center text-sm text-muted-foreground">
                                Última atualização: 25 de novembro de 2025
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

export default PrivacyPolicyPage;
