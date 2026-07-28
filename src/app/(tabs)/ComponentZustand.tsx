import { Button, Text, TextInput, View } from 'react-native';
import { useCounterStore } from '../store/useCounterStore';

export default function ComponentZustand() {
    const countState: number = useCounterStore((state) => state.count);
    const incrementCount: () => void = useCounterStore((state) => state.increment);
    const resetCount: () => void = useCounterStore((state) => state.reset);

    const nameState: string = useCounterStore((state) => state.name);
    const putName: (newName: string) => void = useCounterStore((state) => state.putName);

    const logName: () => void = useCounterStore((state) => state.logName);

    console.log("Current name");

    return (
        <View>
            <Text>Counter: { countState }</Text>
            <Text>Name: '{ nameState }'</Text>
            <Text>---</Text>
            <Button title="Increment counter" onPress={() => incrementCount()}/>
            <Button title="Reset counter" onPress={() => resetCount()}/>
            <TextInput 
                onChangeText={(value: string) => {
                    putName(value);
                    logName();
                }} 
                value={ nameState } 
                placeholder='write a text'
            />
            <Button title='Blank name' onPress={() => putName('')}/>
        </View>
    );
}