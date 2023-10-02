import { View, Text } from 'react-native';

const MyListEmpty = () => {
  return (
    <View className='items-center justify-center mx-2 mt-4'>
      <Text className='text-slate-500'>
        🎥 <Text className='font-bold'>Get started:</Text> Add your favourite
        movie quotes to keep track of them!
      </Text>
    </View>
  );
};

export default MyListEmpty;
