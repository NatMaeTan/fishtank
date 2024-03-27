import { Flex, Text, VStack } from "@chakra-ui/layout"
import { Fish, FishType } from "../type/fish"
import Image from 'next/image'
import fish1 from 'public/assets/fish1.svg'
import fish2 from 'public/assets/fish2.svg'
import fish3 from 'public/assets/fish3.svg'
import fish4 from 'public/assets/fish4.svg'
import fish5 from 'public/assets/fish5.svg'
import fish6 from 'public/assets/fish6.svg'

type FishProps = {
    name: string,
    type: FishType
}
export const FishObject = ({name, type}: FishProps) =>{
      const fishesToSvgMap = {
        fish1: fish1,
        fish2: fish2,
        fish3: fish3,
        fish4: fish4,
        fish5: fish5,
        fish6: fish6,
      }
    
      const lowestTopValue = 0
      const highestTopValue = 400
      const topValue = `${Math.floor(Math.random() * (highestTopValue - lowestTopValue + 1) + lowestTopValue)}px`
      const lowestLeftValue = 0
      const highestLeftValue = 700
      const leftValue = `${Math.floor(Math.random() * (highestLeftValue - lowestLeftValue + 1) + lowestLeftValue)}px`
    return <VStack width={'100px'} height='100px' justify={'center'} align={'center'} gap={0} position={'absolute'} left={leftValue} top={topValue}>
        <Image src={fishesToSvgMap[type]} alt='fishImage' width={100} height={75} />
        <Text w='100%' height='25px' textAlign='center' marginY='0' color='white'>{name}</Text>
    </VStack>
}