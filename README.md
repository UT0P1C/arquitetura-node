
## Estilo arquitetural de uma API REST em Node.Js

# utilizando Node, Express e PostgreSQL


	Basic authentication - Uma forma de autenticação que o próprio protocolo HTTP especifíca, é a forma de autenticação mais simples

	JWT - Json Web Token é um token para garantirmos consistência na autenticação

	o cliente faz uma requisição de login e o microserviço em Node retorna um Token para o cliente

	utilizaremos e validaremos esse mesmo token para verificar se o usuário está apto a acessar o microserviço


# Exemplo:

	o cliente faz uma requisição para o microserviço de produtos, o microserviço de produtos faz uma requisição para o microserviço de autenticação para validar o token, o ms de autenticação retorna se o token é válido e então o ms de produtos retorna os produtos para o cliente

# CRUD de usuários

	GET users
	GET users/:uuid
	POST users
	PUT users/:uuid
	DELETE users/:uuid


# autenticação de token

	POST /token
	POST /token/validate
