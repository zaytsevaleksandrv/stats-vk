import React, { Component } from "react";
import {
  Root,
  CellButton,
  PanelHeaderEdit,
  Icon24Add,
  PanelHeaderClose,
  PanelHeaderSubmit,
  PanelSpinner,
  Avatar,
  View,
  Panel,
  PanelHeader,
  Group,
  List,
  Cell
} from "@vkontakte/vkui";
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";
import "@vkontakte/vkui/dist/vkui.css";

export default class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeView: "view1"
    };
  }

  render() {
    return (
      <Root activeView={this.state.activeView}>
        <View activePanel="panel1.1" id="view1">
          <Panel id="panel1.1">
            <PanelHeader>Stats-VK</PanelHeader>
            <Group>
              <CellButton
                onClick={() => this.setState({ activeView: "view2" })}
              >
                Перейти к списку
              </CellButton>
            </Group>
          </Panel>
        </View>
        <View header activePanel="panel2.1" id="view2">
          <Panel id="panel2.1">
            <PanelHeader
              left={
                <PanelHeaderBack
                  onClick={() => this.setState({ activeView: "view1" })}
                />
              }
            >
              View 2
            </PanelHeader>
            <Group>
              <Cell before={<Avatar />} description="Веб-сайт">
                Команда ВКонтакте
              </Cell>
              <Cell before={<Avatar />} description="Веб-сайт">
                Команда ВКонтакте
              </Cell>
            </Group>
          </Panel>
        </View>
      </Root>
    );
  }
}
