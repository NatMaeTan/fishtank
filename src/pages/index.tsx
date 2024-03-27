import { Flex, VStack, Text } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { trpc } from '@/utils/trpc'
import { AddFishTankButton } from '@/features/fishtank/components/AddFishTankButtons'
import fishtank from 'public/assets/fishtank_static.png'
import Image from 'next/image'
import { FishObject } from '@/features/fishtank/components/Fish'
import { Fish, FishType } from '@/features/fishtank/type/fish'

const Index = () => {
  const fishes = trpc.fish.list.useQuery()
  const [fishesToDisplay, setFishesToDisplay] = useState<Fish[]>([])
  const addFish = (id: string, name: string, type: FishType) => {
    const newFish: Fish = {id, type, name}
    const temp = [...fishesToDisplay]
    temp.push(newFish)
    setFishesToDisplay(temp)
    
  }
  return (
    <VStack justify={'center'} align={'center'} width="100%" height="100vh">
      <Text fontSize="90px"> Welcome to your fish tank</Text>
      <Flex position='relative' w="800px" height="70%" justify={'center'} align={'center'}  onClick={() => {console.log("test")}} background={fishtank.src}>
        <Flex w="800px" height='500px' position={'relative'} justify={'center'} align={'center'}>
        <Image src={fishtank} alt='fishtank' width='800' height='500'></Image>
        {fishesToDisplay && fishesToDisplay.map((fish: Fish)=>{
            return <FishObject key={fish.id} name={fish.name} type={fish.type as FishType}/>
        })}
        </Flex>
      </Flex>
      <AddFishTankButton onAddFish={addFish}/>
    </VStack>
  )
}
export default Index