import {
  Button,
  useDidFinishSSR,
} from '@my/ui'
import DraggableFlatList from 'react-native-draggable-flatlist'

const array = [...Array(20).keys()].map((i) => ({ key: `item-${i}`, label: `Item ${i}` }))

export function HomeScreen() {
  const isClient = useDidFinishSSR()

  if (!isClient) {
    return null
  }

  return (
    <>
      <DraggableFlatList
        data={array}
        renderItem={({ item, drag, isActive }) => (
          <Button
            size="$6"
            key={item.key}
            onPress={drag}
            style={{ backgroundColor: isActive ? 'red' : 'white' }}
          >
            {item.label}
          </Button>
        )}
        keyExtractor={(item) => item.key}
        onDragEnd={({ data }) => console.log(data)}
      />
    </>
  )
}
