import { Box, Text } from "native-base";

interface DadosMock {
  dados : {
    ORDEM:  string,
    ORDEMMOVIMENTO: string,
    NUMEROMOVIMENTO: string,
    CODIGOPARCEIRO: string,
    DESCRICAOPARCEIRO: string,
    CODIGOFILIALCONTABIL:string,
    DESCRICAOFILIALCONTABIL: string,
    CODIGOVENDEDOR: string,
    DESCRICAOVENDEDOR: string,
    TOTAL: number,
    STATUS: string,
    DATACADASTRO: string,
    USUARIOSEPARACAO: string,
    DATASEPARACAO: string,
    USUARIOCONFERENCIA: string,
    DATACONFERENCIA: string,
    SEQUENCIA: number,
    ORDENACAOITEM: string,
    RESGATE: string,
    CAMPOLIVREA2: string,
    CAMPOLIVREA3: string,
    DESCRICAOUSUARIOSEPARACAO: string,
    DESCRICAOUSUARIOCONFERENCIA: string,
    ENDERECOPARCEIRO: string
  }
    
}

interface Dados {
  dadosMock: DadosMock
}

interface DetailsTaskProps {
  props: Dados
}

export function DetailsTask({ dados }: DadosMock) {
  const { NUMEROMOVIMENTO, CODIGOPARCEIRO, STATUS, DATASEPARACAO, DATACADASTRO } = dados

  return (
    <Box borderColor={'gray.400'} borderWidth={2} borderRadius={4} p={4}>
      <Text marginBottom={2} color={'gray.500'}>
        Nº Doc:  <Text fontWeight={'bold'} color={'black'}>{NUMEROMOVIMENTO}</Text> 
      </Text>
      <Text marginBottom={2} color={'gray.500'}>
        Parceiro: <Text fontWeight={'bold'} color={'black'}>{CODIGOPARCEIRO}</Text>
      </Text>
      <Text marginBottom={2} color={'gray.500'}>
        Status: <Text fontWeight={'bold'} color={'black'}>{STATUS}</Text>
      </Text>
      <Text marginBottom={2} color={'gray.500'}>
        Data Separação: <Text fontWeight={'bold'} color={'black'}>{DATASEPARACAO}</Text>
      </Text>
      <Text marginBottom={2} color={'gray.500'}>
        Data Cadastro: <Text fontWeight={'bold'} color={'black'}>{DATACADASTRO}</Text>
      </Text>
    </Box>
  )
}