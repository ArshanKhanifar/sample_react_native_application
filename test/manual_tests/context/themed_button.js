import React from 'react';
import {ThemeContext} from './theme_context';
import {Button, View} from 'react-native';

class ThemedButton extends React.Component {
    render() {
        let props = this.props;
        let theme = this.context;
        return (
            <View
                style={{backgroundColor: theme.background}}
            >
                <Button
                    title="press me to change theme"
                    {...props}
                />
            </View>
        );
    }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
