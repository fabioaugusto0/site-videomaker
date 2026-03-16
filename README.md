# Fábio Augusto — Landing Page Institucional

Este repositório contém o código-fonte da Landing Page oficial de Fábio Augusto, focada em Produção Audiovisual e Estratégia para a Área da Saúde. O código foi desenvolvido focando em **Alta Performance (Core Web Vitals)** e forte **Acessibilidade/SEO**.

## 🎨 Identidade Visual (Design System)

### Cores Base (Hexadecimais)
* **Fundo Principal (Dark Base)**: `#080810` (Preto azulado profundo)
* **Roxo Neon Primário**: `#C840F0` (Elementos de destaque e CTAs primários)
* **Roxo Médio**: `#8B2FC9` (Transições e gradientes)
* **Lilás Suave**: `#D4A8FF` (Textos secundários e micro-copy)
* **Branco Puro**: `#FFFFFF` (Textos principais e Headlines)
* **Cinza Escuro**: `#12121E` (Fundo de cards)
* **Cinza Médio**: `#2A2A3D` (Bordas e divisórias sutis)

### Tipografia
* **Headlines / Títulos (`h1`, `h2`, `h3`)**: `Space Grotesk` (Pesos 700/800)
* **Corpo do texto / Subtítulos (`p`, `span`)**: `Inter` (Pesos 400/500/600)

## 📁 Estrutura de Assets
Nunca adicione mídias soltas na raiz junto ao `index.html`. O projeto segue a estrutura padrão pré-configurada em `/assets`:

* `/assets/images/`: Imagens estáticas. **Regra Ouro**: Sempre exporte em formato `.webp` para manter uma pontuação no Google PageSpeed alta.
* `/assets/videos/`: Vídeos nativos locais. Estes devem ser vídeos curtos de preview (como b-rolls rápidos) exportados em `.mp4`. No código eles devem usar os parâmetros estritos: `<video muted autoplay loop playsinline>`.
* `/assets/icons/`: Arquivos `.svg` reais para serem injetados nas páginas.

### 🎥 Sobre os Vídeos na Seção "Projetos" e "Feedbacks"
Em áreas que mostram portfólio de vídeos mais longos ou pesados, **nunca integre as versões completas no código local**. 
Nós utilizamos iFrames embedados do **Vimeo** (links com parâmetros `&background=1&autoplay=1&loop=1&muted=1`) para impedir travamentos de rede no site pelo celular e assegurar reprodução instantânea.

## 🚀 SEO e Otimizações de E-E-A-T Inclusas
* O arquivo `index.html` contém um `<h1>` oculto (`sr-only`) feito sob medida para leitura estrutural robótica pelo Google Maps e Busca Semântica.
* O arquivo conta no inicio com Metadados **Open Graph** (Imagem de Preview no Link WhatsApp/Instagram).
* Json-LD aplicado simulando `ProfessionalService` atuando com Local SEO para a região de Fortaleza, CE.
