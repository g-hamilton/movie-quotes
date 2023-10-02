import { View, TextInput } from 'react-native';

interface InputProps {
  value: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: () => void;
}

const Input = ({
  value,
  placeholder,
  onChangeText,
  onSubmitEditing,
}: InputProps) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        className='bg-white p-3 rounded-md border-2 border-slate-300'
      />
    </View>
  );
};

export default Input;
