import { VStack, Text, Button, Input, HStack, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'
import fish1 from 'public/assets/fish1_bag.svg'
import fish2 from 'public/assets/fish2_bag.svg'
import fish3 from 'public/assets/fish3_bag.svg'
import fish4 from 'public/assets/fish4_bag.svg'
import fish5 from 'public/assets/fish5_bag.svg'
import fish6 from 'public/assets/fish6_bag.svg'
import { FishType } from '../type/fish'
import { v4 as uuidv4 } from 'uuid'
type AddFishTankButtonProps = {
  onAddFish: ( name: string, type: FishType) => void
}

export const AddFishTankButton = ({onAddFish}: AddFishTankButtonProps) => {
  const fishes: FishType[] = [
    'fish1',
    'fish2',
    'fish3',
    'fish4',
    'fish5',
    'fish6',
  ]
  const [selectedFish, setSelectedFish] = useState<FishType>()
  const [fishName, setFishName] = useState('')
  const fishesToSvgMap = {
    fish1: fish1,
    fish2: fish2,
    fish3: fish3,
    fish4: fish4,
    fish5: fish5,
    fish6: fish6,
  }
  return (
    <VStack width="800px" height="auto" justify="center" align="center">
      <Text width="100%" textAlign="center">
        Select the type of Fish
      </Text>
      <HStack width='100%' height='auto' justify='center' align='center'>
        {fishes.map((fish)=>{
          return (<Flex key={fish} width='120px' height='100px' position='relative' justify='center' align='center' onClick={()=>{
            fish === selectedFish? setSelectedFish(undefined):
            setSelectedFish(fish)}}>
                  <Image
                    src={fishesToSvgMap[fish]}
                    alt="fishImage"
                    width="120"
                    height="100"
                    style={
                      {
                        position: 'absolute',
                        top: fish === selectedFish? -30: undefined
                      }}
                  />
                  </Flex>)
        })}
      </HStack>
      <Text width="100%" textAlign="center">
        Give a name to your fish
      </Text>
      <Input
        width="200px"
        value={fishName}
        onChange={(event) => setFishName(event.target.value)}
      />
      <Button w="200px" height='20px' isDisabled={!(selectedFish && fishName)} onClick={()=>{
        const id = uuidv4();
        onAddFish(fishName, selectedFish!)
        setFishName('')
        setSelectedFish(undefined)
      }}>Add to tank</Button>
    </VStack>
  )
}