import { Box, Button, HStack, Input, Text } from "native-base";
import { MaterialIcons } from '@expo/vector-icons/'


function QuantityInput() {
  return (
    <HStack width={"full"}  marginY={1}>
      <Input type="text" flex={1} marginRight={2} borderColor={"orange.600"} borderWidth={2}></Input>
      <Button backgroundColor={"orange.600"}>
        <MaterialIcons name='check' size={28} color={'white'}/>
      </Button>
        
    </HStack>
  )
}

function BarCodeReaderWrapper() {
  return (
    <HStack width={"full"} marginY={1}>
      <Input type="text" flex={1}  marginRight={2} borderColor={"orange.600"} borderWidth={2}></Input>
      <Button background={'gray.800'}>
        <MaterialIcons name='camera-enhance' size={28} color={'white'}/>
      </Button>
    </HStack>
  )
}


export function CheckForm() {
  return (
    <Box>
      <BarCodeReaderWrapper/>
      <QuantityInput/>
    </Box>
  )
}