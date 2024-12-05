import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import { AddButton, Container, Produto } from './styles'

//React Hooks
//---------------
//useRef
//useState / estado -> É uma variavel que toda vez que troca de valor a tela irá "recarregar os valores"
//{ v4 } from 'uuid' / Teoricamente gera chaves randomicas para uso, por exemplo de keys

// TODOS OS ELEMENTOS RETORNADOS PRECISAM DE UM OBJETO PAI NO REACT

function teste() {
  const Titulo_T1 = "Testando a primeira tela"
  const conta = "isso é java script"

  return (
    /* Para injetar JAVASCRIPT, adicione "{}"*/

    <div>
      <h1>{Titulo_T1}</h1>
      <h2>{1 + 2 + " " + conta}</h2>
      <h3>1 + 2 isso é html</h3>
    </div>
  )
}

function Home(){
  
  const inputRef = useRef() // colocado a função de biblioteca "useRef" dentro de uma variavel
  const [produtos, setProdutos] = useState([]) // [nome da variável, função para colocar os valores]
                                               // = useState(começando com um array vazio, por que
                                               // começa com nada)

  function clicado(){
      if(inputRef.current.value != ''){
      setProdutos([{ id: v4(), nome: inputRef.current.value }, ...produtos]) 
      //"..." -> spread operator / mantem os valores anteriores
      inputRef.current.value = ''
    }
  }

  function DeletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !== id))
    //pegar o array e manter somente os produtos que tenham o id diferente
    //do id enviado por parametro
  }

  return(

    <Container>
      <h1>Lista de Compras</h1>
      <hr />
      <input placeholder="produto..." ref={inputRef}/>
      {/*^^^^^^^Esse é o elemento que precisamos para pegar os dados */}
      <AddButton onClick={clicado}>Adicionar</AddButton>

      {
        produtos.map( produto => (
        <Produto key={produto.id}>
          <p>{produto.nome}</p>
          {/* Esta div coloca apenas o nome do produto e guarda o id dele
          // É PRECISO COLOCAR key={variável de array} para identificar cada elemento presente
          //dentro desse array 
          //No caso:
                //produto.id = UUID GERADO COM A BIBLIOTECA
                //produto.nome = VALOR CAPTURADO PELO INPUT*/}
          <button onClick={() => DeletarProduto(produto.id)}>🗑️</button>
          {/*Toda vez que uma função tem parametros, precisa fazer da forma acima */}
        </Produto>
      ))}
    </Container>
  
  )
}

export default Home
