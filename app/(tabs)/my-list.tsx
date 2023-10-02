import { SafeAreaView, View } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import Input from '../../components/Input';
import MyList from '../../components/MyList';
import MyListEmpty from '../../components/MyListEmpty';
import MyListTip from '../../components/MyListTip';
import { getData, storeData } from '../../utils/helpers';
import * as Crypto from 'expo-crypto';
import { MovieQuote } from '../../types/my-types';

const MyListScreen = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([] as MovieQuote[]);
  const listLoaded = useRef(false);

  const addQuoteToList = () => {
    if (!text || !text.length) return;
    const quote = { id: Crypto.randomUUID(), quote: text } as MovieQuote;
    setList((list: MovieQuote[]) => [quote, ...list]);
    setText('');
  };

  const deleteQuoteFromList = (id: string) => {
    setList((list: MovieQuote[]) => list.filter((item) => item.id !== id));
  };

  useEffect(() => {
    async function getList() {
      const savedList = await getData('my-list');
      setList(savedList || []);
    }
    if (!listLoaded.current) {
      getList();
      listLoaded.current = true;
    } else {
      storeData('my-list', list);
    }
  }, [list]);

  return (
    <SafeAreaView className='bg-slate-200 flex-1'>
      <View className='px-2 flex-1'>
        <View className='mt-2'>
          <Input
            value={text}
            placeholder='Add a new quote...'
            onChangeText={setText}
            onSubmitEditing={addQuoteToList}
          />
        </View>
        <View className='mt-2 flex-1'>
          <MyList
            listData={list}
            onDragEnd={({ data }) => setList(data)}
            onDeleteItem={deleteQuoteFromList}
            listEmptyComponent={MyListEmpty}
            listFooterComponent={list.length > 1 ? MyListTip : null}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyListScreen;
