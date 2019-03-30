import React, { Component } from "react";
import { Link } from "react-router";
import {
  View,
  Panel,
  PanelHeader,
  FormLayout,
  Input,
  Button,
  HeaderButton
} from "@vkontakte/vkui";
import Icon24Back from "@vkontakte/icons/dist/24/back";

import { block } from "bem-cn";
import "./style.css";

const cn = block("form");

export default class AddGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupId: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  render() {
    const { groupId } = this.state;
    return (
      <View>
        <Panel>
          <PanelHeader
            left={
              <HeaderButton>
                <Link to={"/"} style={{'padding': '0'}}>
                  <Icon24Back fill={'#fff'}/>
                </Link>
              </HeaderButton>
            }
          >
            Добавить группу / сообщество
          </PanelHeader>
          <FormLayout>
            <Input
              type="text"
              top="ID группы / сообщества"
              name="group_id"
              value={groupId}
              onChange={this.onChange}
              status={groupId ? "valid" : "error"}
              bottom={
                groupId
                  ? "id группы введена верно!"
                  : "Пожалуйста, введите id группы"
              }
            />
            <Button size="xl">Добавить</Button>
          </FormLayout>
        </Panel>
      </View>
    );
  }
}
