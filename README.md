# Documentação Teste Técnico - Ensinio 



🚀 # Deploy: 



##  💡 Como Funciona a aplicação? 
A aplicação em questão trata-se de uma interface da empresa Ensinio, quando clicamos no botão Serviços ela abre um modal embaixo do contêiner azul com as principais soluções a mostra. Se clicar no botão X o modal é fechado. Quando clicamos no botão PT também abre um modal para que o usuário possa selecionar a linguagem escolhida, que também é fechado clicando no X. 



A página está toda traduzida para as linguagens de português, espanhol e inglês. 



A página também está responsiva, ou seja, se adapta a diversos tamanhos de telas incluindo o mobile. 



#  🎯 Tomada de Decisões
Inclui dois modais, um de linguagem e um com as soluções pois tentei que no lugar dos botões fossem select’s, mas ao tentar adicionar imagens ao select(fornecidas de acordo com a interface do Figma) não consegui, então tive a ideia de criar os modais, assim ficaria mais bonito, mais funcional e entregaria uma melhor experiência ao usuário. 



#  ⚜️ Tecnologias Utilizadas: 


Aplicação desenvolvia com React com Javascript, StyledComponents, fonts Degular e Inter, imagens fornecidas no link do Figma, i18n para tradução, e hooks para o funcionamento da aplicação. Axios, Json-server para a integração com APi fictícia. 

Para a hospedagem da aplicação foi utilizado o Vercel. 



#  💻 Código e Jornada (Passo a Passo do desenvolvimento da aplicação) 


1 - Ao criar a aplicação, no main principal foi definido que teríamos dois contêiners: Header e ContainerInfos, no Header a informações dentro do background azul que ocupa 50% da página e no containerinfos as outras informações. Dentro da pasta src foram criadas as pastas Containers que dentro dele tem a Home, Components, que possui o Header, ContainerzInfos, Modal e ModalLinguage e para cada um um arquivo index.jsx e o styles.já com a estilização de cada um deles. Dentro do src tem a pasta styles para o GlobalStyles, ou seja, estilizações para a página toda. 



Estilização foi feita totalmente com styled components. Fontes utilizadas: Degular e Inter.  Botões possuem também usabilidade, todos eles possuem cursor:pointer. 



2 - Após a estilização dos dois containers foi criado o primeiro modal de soluções principais que abre de acordo com o clique do botão serviços e também fecha se o usuário clicar no X no canto superior dele. Para que ele fosse exibido foi usado o conceito de props, para que quando o botão fosse clicado o modal fosse aberto e também o useState que começa false, ou seja, quando a aplicação inicia o modal está fechado, o useState só fica true quando o botão serviços é clicado. 



3 - O mesmo foi feito logo após na criação do segundo modal, de linguagem. 

Logo após a criação e estilização do modal foi dado sua funcionalidade, para fazer a tradução foi utilizado o i18n, foi feita a instação com yarn, foi importado no main principal para que a atualização pegasse toda aplicação, e para fazer a tradução foi criada uma pasta com i18n dentro dela o arquivo principal e após 3 json, um para tradução em português , um em inglês e um em espanhol, assim como, logo após, todos os components da aplicação foram traduzidos usando a const  {T} e o useTranslation que é um Hook do React, assim como useState, useEffect, entre outros. 



4 -  Para que as 3 informações de Trilhas, Playlists e Coleções fossem consumidas pela APi fictícia fornecida e que estava contida no db.json, primeiro foi instalado o json-Server nas dependências do packge.json, assim como no packge.json foi adicionado a tag “Server” para que, ao iniciar a aplicação dando o comando “yarn dev” o Server (db.json) também fosse aberto. Foi utilizado o Axios para a integração com a APi fake, como também o get para chamar as informações. Criei a pasta services, dentro Dela um arquivo com api.js e importei no ContainerInfos e fiz a lógica com usestate e useeffect e logo embaixo onde renderiza a página coloquei um map para que fazendo o mapeamento do json mostrasse as informações com {item.title.pt} {item.description.pt} à príncipio fiz a lógica de map.items em cada uma das 3 divs, mas na tela da aplicação estavam aparecendo 6 divs, então corrigi a configuração e coloquei as 3 divs dentro do mesmo map e deu certo. Detalhe: essas 3 divs não ficaram traduzidas, somente em português, porque o vscode estava me exigindo que eu escolhesse entre Pt, en e es no final de {item.title} ou {item.description} 



5 - Então subi pro github e fiz o deploy na vercel, como o json-server utiliza o localhost para a api fake, em outras telas não estava aparecendo as 3 divs que consomem dados do db.json, então subi um outro arquivo somente com o db.json e fiz o deploy dele também na vercel, editei no meu código o link da api para o link que o vercel me devolveu para que eu conseguisse que com o novo deploy da aplicação as 3 divs funcionassem e aparecessem na tela de qualquer computador/Celular que acessasse seu link de deploy. 





# 📧 Considerações Finais
Espero que vocês gostem do resultado da aplicação, tentei entregar excelência e a melhor experiência quanto a qualidade da experiência do usuário. Tenham certeza que dei o meu máximo. Espero que dê tudo certo, pois será uma grande honra fazer parte do time da Ensinio!





# 👩🏻‍💻 Autoria: 



Anne Beatriz Caldeira de Andrade
