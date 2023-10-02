import { View, Text } from 'react-native';

const MyListTip = () => {
  return (
    <View className='items-center justify-center mx-2 mt-4'>
      <Text className='text-slate-500'>
        💡 <Text className='font-bold'>Tip:</Text> Long press and drag your
        quotes to re-order them, with your favourite at the top.
      </Text>
    </View>
  );
};

export default MyListTip;
