import * as React from 'react';
import { Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function StackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation, route }) => ({
                    title: "Home screen",
                })}
            />
        </Stack.Navigator>
    );
}

function HomeScreen({ navigation }) {
    const [count, setCount] = React.useState(0);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => setCount(c => c + 1)} title="Update count" />
            ),
        });
    }, [navigation, setCount]);

    return <Text>Count: {count}</Text>;
}

const Stack = createStackNavigator();

function Khello() {
    return (
        <NavigationContainer>
            <StackScreen/>
        </NavigationContainer>
    );
}

export {Khello as HeaderScreenInteractionDemo};
