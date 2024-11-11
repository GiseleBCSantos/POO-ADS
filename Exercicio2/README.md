1. Qual a diferença entre tipagem dinâmica e tipagem estática?
>> Na tipagem dinâmica, não é necessário indicar o tipo da variável na declaração, pois seu tipo é definido durante a execução, enquanto na tipagem estática, o tipo da variável é declarado no codigo e é definido no momento da compilação e não pode ser alterado durante a execução.

2. Qual o principal problema do uso de tipagem dinâmica?
>> Erros só são detectados a tempo de execução, o que pode resultar em falhas difíceis em identificar.

3. Pesquise um exemplo na internet em que a tipagem dinâmica pode ser
problemático.
>> Erros em tempo de execução 

´´´python
a = "10"
b = 5
print(a + b) # Erro em tempo de execução

4. Pesquise e exemplifique com um exemplo porque dizemos que a linguagem C, mesmo tendo tipagem estática, possui tipagem fraca.
>> Permite manipulação automática de tipos e manipulação flexível de dados. Então, ao fazer operações entre tipagens diferentes (mas semelhantes), uma é automaticamente convertido na outra. 

5. Poderíamos dizer que a tipagem do TypeScript é fraca por uma variável do tipo number aceitar tanto inteiros como ponto flutuante?
Não.

