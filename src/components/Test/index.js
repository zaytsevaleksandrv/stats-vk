import React from 'react';
import { View, Panel, PanelHeader, Group, List, Cell } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

function Test() {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader>VKUI</PanelHeader>
                <Group title="Items">
                    <List>
                        <Cell>Hello</Cell>
                        <Cell>World</Cell>
                    </List>
                </Group>
            </Panel>
        </View>
    );
}

export default Test;