import { Box, Button, Center, Divider, HStack, Heading, Text } from "native-base";
import { Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons/'
import { TaskActions } from "../components/TaskActions";
import { DetailsTask } from "../components/DetailsTask";
import { Item } from "../components/Item";
import { useState } from "react";
import { CheckForm } from "../components/CheckForm";
import { ListItens } from "../components/ListItens";

const DadosMock = {
    "ORDEM": "0000000001",
    "ORDEMMOVIMENTO": "0000001578",
    "NUMEROMOVIMENTO": "000122",
    "CODIGOPARCEIRO": "100002",
    "DESCRICAOPARCEIRO": "OG1",
    "CODIGOFILIALCONTABIL": "00001",
    "DESCRICAOFILIALCONTABIL": "OG1 SYSTEMS LTDA",
    "CODIGOVENDEDOR": "00001",
    "DESCRICAOVENDEDOR": "OG1",
    "TOTAL": 602.1,
    "STATUS": "0",
    "DATACADASTRO": "2023-06-13 11:34:47",
    "USUARIOSEPARACAO": "00001",
    "DATASEPARACAO": "2023-06-21 09:36:22",
    "USUARIOCONFERENCIA": "00001",
    "DATACONFERENCIA": "2023-06-21 09:36:53",
    "SEQUENCIA": 1,
    "ORDENACAOITEM": "D",
    "RESGATE": "P",
    "CAMPOLIVREA2": "",
    "CAMPOLIVREA3": "",
    "DESCRICAOUSUARIOSEPARACAO": "Administrador",
    "DESCRICAOUSUARIOCONFERENCIA": "Administrador",
    "ENDERECOPARCEIRO": "MACEIO"
}

export function Conferir() {
  const [taskHasStarted, setTaskHasStarted] = useState<boolean>(true)
  
  
  return (
    <Box safeArea>
      <Box backgroundColor={'gray.800'} height={'20'}></Box>
      {/* {back button} */}
      <Box paddingX={4}>
        <HStack justifyContent={'space-between'} marginY={4}>
          <Button background={'orange.600'} paddingX={6}>
            <MaterialIcons name='arrow-left' size={30} color={'white'} />
          </Button>
          <TaskActions/>
        </HStack>
        { taskHasStarted ? <CheckForm/> : <DetailsTask dados={DadosMock} />}

        <Center>
          <Text>Itens</Text>
          <Divider bg="gray.400" thickness="2" orientation="horizontal" marginBottom={4} />
        </Center>
        <ListItens/>
      </Box>
    </Box>
  )
}