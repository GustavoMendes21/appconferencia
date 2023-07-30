import { Box, Button, Center, HStack, Text } from "native-base";
import { useState } from "react";
import { Pressable } from "react-native";

function ActionButtonWrapper() {
  return (
    <HStack >
      <Button 
        px={6} 
        background={'white'} 
        borderColor={'orange.600'} 
        borderWidth={2}
        marginRight={4}
      >
        <Text color={"orange.600"} fontWeight={'bold'}>Pausar</Text>
      </Button>
      <Button
        px={6} 
        background={'orange.600'} 
      >
        <Text color={"white"} fontWeight={'bold'}>Finalizar</Text>
      </Button>
    </HStack>
  )
}

function ButtonInitTask() {
  return (
    <Button px={6} background={'orange.600'}>
      <Text color={"white"} fontWeight={'bold'}>Iniciar</Text>
    </Button>
  )
}

export function TaskActions() {
  const [taskHasStarted, setTaskHasStarted] = useState<boolean>(true)
  
  return (
    <Box>
      {
        taskHasStarted ? <ActionButtonWrapper/> : <ButtonInitTask/> 
      }

    </Box>
  )
}