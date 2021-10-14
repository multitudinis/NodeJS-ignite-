# Cadastro de carro

**RF**
Deve ser possivel cadastrar um carro
Deve ser possivel listar todas as categorias

**RN**
Não deve ser possivel cadastrar um carro com uma placa ja existente.
Não deve ser possivel alterar a placa de um carro para uma placa ja existente.
O carro deve ser cadastrado por padrao com disponibilidade.
Não deve ser possivel cadastrar um carro sem credencial de administrador.

# Listagem de carros

**RF**
Deve ser possivel listar todos os carros disponiveis
Deve ser possivel listar todos os carros disponiveis pelo nome da categoria
Deve ser possivel listar todos os carros disponiveis pelo nome da marca
Deve ser possivel listar todos os carros disponiveis pelo nome do carro

**RN**
Usuario não precisa estar logado no sistema

# Cadastro de especificação no carro

**RF**
Deve ser possivel cadastrar uma especificação num carro.
Deve ser possivel listar todas as especificações

**RN**
Não deve ser possivel cadastrar uma especificação num carro não cadastrado.
Não deve ser possivel cadastrar uma especificação ja existente num mesmo carro.
Não deve ser possivel cadastrar uma especificação sem credencial de administrador.

# Cadastrar imagem do carro

**RF**
Deve ser possivel cadastrar a imagem do carro
Deve ser possivel listar todos os carros

**RNF**
Deve ser utilizado o multer para realizar o upload

**RN**
Usuario deve poder cadastrar mais de uma imagem por carro
O usuario responsavel pelo cadastro deve ser administrador

# Aluguel de carro

**RF**
Deve ser possivel cadastrar um aluguel

**RN**
O aluguel deve ter duração minima de 24 horas
Não deve ser possivel cadastrar um novo aluguel caso ja exista um aberto para o mesmo carro
Não deve ser possivel cadastrar um novo aluguel caso ja exista um aberto para o mesmo usuario