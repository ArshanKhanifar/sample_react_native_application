import React from 'react';

import {View, Text} from 'react-native';
import {ThemeContext, themes} from './theme_context';
import ThemedButton from './themed_button';

// An intermediate component that uses the Themed_button
function Toolbar(props) {
    return (
        <ThemedButton onPress={props.changeTheme}/>
    );
}

export default class ContextThemeDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        };
    }

    render() {
        // The Themed_button button inside the ThemeProvider
        // uses the theme from state while the one outside uses
        // the default dark theme
        return (
            <View style={{"top": 100}}>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <View>
                    <ThemedButton />
                </View>
            </View>
        );
    }
}
