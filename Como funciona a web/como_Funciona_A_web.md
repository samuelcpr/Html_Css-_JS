# para acessar um site
* ex: http
* dominio:<URL>.com.br

# utilizamos o protocolo http
hipertext transfer protocol
função: troca de mensagens entre computadores
mensagens---- A mensagem é quebrada em diversos pedaços chamados de (chunks)

# url 
* uniform resource locator
localizador e identificador de um recurso
recurso, nesse caso, é o site
# cliente 
* é o computador dispositivo ou aplicativo que fez o pedido de busca
ou seja o Browser
# servido 
* computador configuarado para receber os pedidos e enviar respostas aos pedidos

# TCP 
* transmisson control protocol
* função que garanti que os pacotes cheguem corretamente ao destino
# Dns
* domain name servers
* função: converter um Dominio em um endereço de ip

# IP
internet protocol
Função: endereçamento dos computadores ou seja a identidade

# seu pedido etá percorrendo diversos proxies 
#    poxy 
* qualquer dispositivo no meio do caminho
* modem, roteador, outros computadores
* função: encaminhamento dos pacotes 

# Passo 1º 
Você digita a URL: https//rocketseat.com.br

# Passo 2º 
E iniciado uma linha de comunicação, através do protocolo tcp,
entre o seu computador (cliente) até o computador que tem a pagina (servidor).

# passo 3º 
O endereço é convertido em um (76.76.21.21) através do DNS

# Passo 4º 
seu pedido está percorrendo deversos proxies

# Passo 5º
Seus pedido chega até o servidor 

# Passo 6º
servidor analisa seu pedido e te dá uma resposta, neste caso, positiva

# Passo 7º
O caminho de volta é semelhante ao de ida, passando
pela a linha de comunicação que foi criada.

# Passo 8º
O browser recebe os pedaços e monta a tela do site pra voce 

# Passo 9º
Esse processo acontece muitas vezes, pois para cada recurso (html,css,javascript,imagem...) é feita uma nova conexão.

