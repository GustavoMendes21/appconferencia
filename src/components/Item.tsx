import { Box, Center, Text } from "native-base";

export function Item() {
  return (
    <Box borderColor={'gray.400'} borderWidth={2} borderRadius={4} p={4}>
      <Center>ARROZ TIO BENTO</Center>
      <Text marginBottom={2} color={'gray.500'}>
        Unidade:  <Text fontWeight={'bold'} color={'black'}>UN</Text> 
      </Text>
    <Text marginBottom={2} color={'gray.500'}>
      Código de Barras: <Text fontWeight={'bold'} color={'black'}>100500400</Text>
    </Text>
    <Text marginBottom={2} color={'gray.500'}>
      Código do Material: <Text fontWeight={'bold'} color={'black'}>004005001</Text>
    </Text>
    <Text marginBottom={2} color={'gray.500'}>
      Código Auxiliar: <Text fontWeight={'bold'} color={'black'}>304050</Text>
    </Text>
  </Box>
  )
}