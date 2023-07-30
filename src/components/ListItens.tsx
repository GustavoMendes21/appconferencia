import { Box, Center, FlatList, Text } from "native-base";
import { useState } from 'react'

interface Produto {
  "ORDEM": string,
  "ORDEMMOVIMENTO": string,
  "NUMEROITEM": number,
  "CODIGOMATERIAL": string,
  "CODIGOBARRA": string,
  "DESCRICAOMATERIAL": string,
  "CODIGOALMOXARIFADO": string,
  "DESCRICAOALMOXARIFADO": string,
  "QUANTIDADE": number,
  "CUSTO": number,
  "UNIDADE": string,
  "FATOR": number,
  "STATUS": string,
  "DATACADASTRO": string,
  "QUANTIDADESEPARACAO": number,
  "USUARIOSEPARACAO": string,
  "DATASEPARACAO": string,
  "QUANTIDADECONFERENCIA": number,
  "USUARIOCONFERENCIA": string,
  "DATACONFERENCIA": string,
  "CODIGOAUXILIAR": string,
  "NUMEROMOVIMENTO": string
}

interface ItemProps {
  data: Produto
}

export function Item({ data }: ItemProps) {
  const [isSeparacao, setIsSeparacao] = useState<boolean>(true)

  return (
    <Box borderColor={'gray.400'} borderWidth={2} borderRadius={4} p={4} marginTop={2}>
      <Center>{data.DESCRICAOMATERIAL}</Center>
      { isSeparacao && 
        <Text marginBottom={2} color={'gray.500'}>
          Quantidade:  <Text fontWeight={'bold'} color={'black'}>{ data.QUANTIDADE }</Text>
        </Text>
      }

      <Text marginBottom={2} color={'gray.500'}>
        Unidade:  <Text fontWeight={'bold'} color={'black'}>{ data.UNIDADE }</Text>
      </Text>
      <Text marginBottom={2} color={'gray.500'}>
        Código de Barras: <Text fontWeight={'bold'} color={'black'}>{ data.CODIGOBARRA }</Text>
      </Text>
      <Text marginBottom={2} color={'gray.500'}>
        Código do Material: <Text fontWeight={'bold'} color={'black'}>{ data.CODIGOAUXILIAR }</Text>
      </Text>
      <Text marginBottom={2} color={'gray.500'}>
        Código Auxiliar: <Text fontWeight={'bold'} color={'black'}>{ data.CODIGOMATERIAL }</Text>
      </Text>
    </Box>
  )
}


export function ListItens() {
  const itemList = [
    {
      "ORDEM": "0000000006",
      "ORDEMMOVIMENTO": "0000001590",
      "NUMEROITEM": 1,
      "CODIGOMATERIAL": "010200001",
      "CODIGOBARRA": "78935761",
      "DESCRICAOMATERIAL": "ABRIDADOR DE LATA",
      "CODIGOALMOXARIFADO": "00001",
      "DESCRICAOALMOXARIFADO": "LOJA",
      "QUANTIDADE": 5,
      "CUSTO": 0.64,
      "UNIDADE": "UN",
      "FATOR": 1,
      "STATUS": "3",
      "DATACADASTRO": "2023-07-17 21:00:58",
      "QUANTIDADESEPARACAO": 5,
      "USUARIOSEPARACAO": "00001",
      "DATASEPARACAO": "2023-07-17 21:41:50",
      "QUANTIDADECONFERENCIA": 0,
      "USUARIOCONFERENCIA": "",
      "DATACONFERENCIA": "",
      "CODIGOAUXILIAR": "001021",
      "NUMEROMOVIMENTO": "000127"
    },
    {
      "ORDEM": "0000000006",
      "ORDEMMOVIMENTO": "0000001590",
      "NUMEROITEM": 2,
      "CODIGOMATERIAL": "010100001",
      "CODIGOBARRA": "7891234567895",
      "DESCRICAOMATERIAL": "ARROZ TIO BENTO",
      "CODIGOALMOXARIFADO": "00001",
      "DESCRICAOALMOXARIFADO": "LOJA",
      "QUANTIDADE": 32,
      "CUSTO": 6,
      "UNIDADE": "UN",
      "FATOR": 1,
      "STATUS": "3",
      "DATACADASTRO": "2023-07-17 21:00:58",
      "QUANTIDADESEPARACAO": 32,
      "USUARIOSEPARACAO": "00001",
      "DATASEPARACAO": "2023-07-17 21:43:08",
      "QUANTIDADECONFERENCIA": 0,
      "USUARIOCONFERENCIA": "",
      "DATACONFERENCIA": "",
      "CODIGOAUXILIAR": "001001",
      "NUMEROMOVIMENTO": "000127"
    }
  ]

  return (
    <FlatList data={itemList} renderItem={({ item }) => (
      <Item data={item} />
    )}>

    </FlatList>
  )
}