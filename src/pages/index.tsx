import { Flex, VStack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { trpc } from '@/utils/trpc'
import { AddFishTankButton } from '@/features/fishtank/components/AddFishTankButtons'
import fishtank from 'public/assets/fishtank_static.png'
import Image from 'next/image'
import { FishObject } from '@/features/fishtank/components/Fish'
import { Fish, FishType } from '@/features/fishtank/type/fish'

const Index = () => {
  const {data} = trpc.fish.list.useQuery()
  const createFishMutation = trpc.fish.create.useMutation()
  const [fishesToDisplay, setFishesToDisplay] = useState<Fish[]>([])
  const addFish = async ( name: string, type: FishType) => {
    const newFish = await createFishMutation.mutateAsync({name, type})
    const temp = [...fishesToDisplay]
    temp.push(newFish as Fish)
    setFishesToDisplay(temp)
  }

  useEffect(()=>{
    if (data) {
      setFishesToDisplay(data.map((fish)=>{
        return {
          id: fish.id,
          name: fish.name,
          type: fish.type as FishType
        }
      }))
    }
  },[data])

  return (
    <VStack justify={'start'} align={'center'} width="100%" height="100vh" paddingY="100px">
      <Text fontSize="45px" fontWeight="bold"> Nat's fish tank</Text>
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