import { Flex, Box, Center, Spacer, Text, Container } from 'native-base'
import { View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons/'
interface MenuButtonProps {
  text: 'separacao' | 'conferencia'
  children: React.ReactNode
}

function MenuButton({ text, children }: MenuButtonProps) {
  return (
    <Center 
      backgroundColor={'amber.400'} 
      borderRadius={8} 
      width={125} 
      height={125}
    >
      <Center>
        <View>{children}</View>
        <Text fontWeight={'bold'} color={'white'} mt={2}>{text.toUpperCase()}</Text>
      </Center>
    </Center>
  )
}

export function Menu() {
  return (
    <Box flex={1}>
      <Flex direction='row' flex={1} px={10}>
        <MenuButton text='separacao'>
          <MaterialIcons name='add-shopping-cart' size={40} color={'white'}/>
        </MenuButton>
        <Spacer/>
        <MenuButton text='separacao'>
          <MaterialIcons name='assignment-turned-in' size={40} color={'white'}/>
        </MenuButton>
      </Flex>
    </Box>
  )
}