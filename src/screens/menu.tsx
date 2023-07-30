import { Flex, Box, Center, Spacer, Text, Container, FlatList, Pressable } from 'native-base'
import { View, Image } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons/'
import { ModalConfig } from '../components/ModalConfig';
interface MenuButtonProps {
  text: string
  children: React.ReactNode
}

const buttonList = [
  {
    text: 'separacao',
    icon: <MaterialIcons name='add-shopping-cart' size={40} color={'white'}/>
  },
  {
    text: 'conferencia',
    icon: <MaterialIcons name='assignment-turned-in' size={40} color={'white'}/>
  },
  {
    text: 'configurações',
    icon: <MaterialIcons name='settings' size={40} color={'white'}/>
  }
]

function MenuButton({ text, children }: MenuButtonProps) {
  return (
    <Pressable onPress={() => console.log(text)} >
      <Center 
        backgroundColor={'orange.600'} 
        borderRadius={8} 
        width={125} 
        height={125}
        m={4}
        shadow={'6'}
      >
        <Center>
          <View>{children}</View>
          <Text fontWeight={'bold'} color={'white'} mt={2}>{text.toUpperCase()}</Text>
        </Center>
      </Center>
    </Pressable>
  )
}

export function Menu() {
 
  return (
    <Box flex={1} safeArea backgroundColor={'trueGray.100'}>
      <Box backgroundColor={'gray.800'} height={'64'} borderBottomRadius={20}>
        <Center flex={1}>
          <Image source={require('../../assets/ic_logo_og1.png')} style={ { width: 400, height: 160, resizeMode: 'contain' } } ></Image>
        </Center>
      </Box>
      <Center>
        <FlatList data={buttonList} numColumns={2} renderItem={
          ({item}) => <MenuButton text={item.text}>{item.icon}</MenuButton>
        }/>
        <ModalConfig/>
      </Center>
   </Box>
  )
}