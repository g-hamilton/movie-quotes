import { Text, TouchableOpacity, View } from 'react-native';
import {
  ScaleDecorator,
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import { MovieQuote } from '../types/my-types';
import { FontAwesome } from '@expo/vector-icons';

interface QuoteCardProps extends RenderItemParams<MovieQuote> {
  onDelete: (id: string) => void;
}

const QuoteCard = ({ item, drag, isActive, onDelete }: QuoteCardProps) => {
  return (
    <ScaleDecorator>
      <View className='flex-row mb-2'>
        <View className='flex-1'>
          <TouchableOpacity
            onLongPress={drag}
            disabled={isActive}
            className={`items-center justify-center px-2 py-4 rounded-md ${
              isActive ? 'bg-green-300' : 'bg-white'
            }`}
          >
            <Text className='text-slate-600 font-semibold'>{item.quote}</Text>
          </TouchableOpacity>
        </View>
        <View className='items-center justify-center px-2 ml-2 bg-red-400 rounded-md'>
          <TouchableOpacity onPress={() => onDelete(item.id)}>
            <FontAwesome name='trash-o' size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </ScaleDecorator>
  );
};

export default QuoteCard;
