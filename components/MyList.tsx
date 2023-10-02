import DraggableFlatList from 'react-native-draggable-flatlist';
import QuoteCard from './QuoteCard';
import { MovieQuote } from '../types/my-types';

interface MyListProps {
  listData: MovieQuote[];
  onDragEnd: (data: { data: MovieQuote[] }) => void;
  onDeleteItem: (id: string) => void;
  listEmptyComponent?: any;
  listFooterComponent?: any;
}

const MyList = ({
  listData,
  onDragEnd,
  onDeleteItem,
  listEmptyComponent,
  listFooterComponent,
}: MyListProps) => {
  return (
    <DraggableFlatList
      data={listData}
      onDragEnd={onDragEnd}
      keyExtractor={(item) => item.id}
      renderItem={(props) => <QuoteCard {...props} onDelete={onDeleteItem} />}
      ListEmptyComponent={listEmptyComponent ?? null}
      ListFooterComponent={listFooterComponent ?? null}
    />
  );
};

export default MyList;
