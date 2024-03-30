# 🏠 Projeto Airbnb - JavaScript 1º Checkpoint

Este projeto é uma tentativa de replicar alguns dos elementos dinâmicos do Airbnb usando JavaScript.

## 🚀 Integrantes do Projeto
- **Matheus Farias** (RM554254)
- **Miguel Parrado** (RM554007)
- **Pedro Henrique** (RM553988)
- **Vitor Pinheiro** (RM553693)

## 📝 Requisitos do Projeto

1. **Menu Funcionando**: Implementamos um menu suspenso que responde às interações do usuário. Quando o usuário clica no ícone do menu, o menu suspenso abre, exibindo várias opções. Quando o usuário clica novamente no ícone do menu, o menu suspenso fecha.

2. **Botão de Salvar**: Implementamos um botão de salvar que altera seu estado quando clicado. Ele alterna entre “Salvar” e “Salvo”. Quando o botão é clicado, ele verifica se o item já está salvo. Se já estiver salvo, ele remove o item do `localStorage`, atualiza o texto do botão para “Salvar” e muda a cor do coração para sua cor original. Se o item não estiver salvo, ele salva o item no `localStorage`, atualiza o texto do botão para “Salvo” e muda a cor do coração para vermelho.

3. **Avaliações dos Clientes Dinâmicas**: As avaliações dos clientes são geradas dinamicamente a partir de um objeto JavaScript. Cada avaliação é representada por um objeto com propriedades para o nome do cliente, foto, comentário, estadia e número de estrelas. Essas avaliações são então renderizadas na página usando o DOM. Isso permite que as avaliações sejam facilmente atualizadas, adicionadas ou removidas.

4. **Galeria de Fotos**: Implementamos uma galeria de fotos que os usuários podem navegar. Cada imagem na galeria pode ser clicada para abrir um modal que exibe a imagem em um tamanho maior. O modal inclui botões ‘Próximo’ e ‘Anterior’ que os usuários podem usar para navegar pelas imagens na galeria enquanto o modal está aberto. Há também um botão ‘Sair’ que fecha o modal.

Além disso, o projeto deve usar certas técnicas e recursos de JavaScript, incluindo:

- Manipulação do DOM, como `classList.toggle` e `classList.add`.
- Uso de `localStorage` para salvar dados no navegador do usuário.
- Consumo de arrays de objetos.
- Uso de funções de seta e strings de modelo.
- Aplicação de princípios de programação funcional.
