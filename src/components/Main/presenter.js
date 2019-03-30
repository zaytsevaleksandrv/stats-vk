import React, { Component } from "react";
import {
  View,
  Panel,
  PanelHeader,
  Group,
  Button,
  Div,
  List,
  Avatar,
  Cell
} from "@vkontakte/vkui";
import Icon24UserAdded from "@vkontakte/icons/dist/24/user_added";
import Icon24UserOutgoing from "@vkontakte/icons/dist/24/user_outgoing";
import Icon24Comment from "@vkontakte/icons/dist/24/comment";
import Icon24Like from "@vkontakte/icons/dist/24/like";
import Icon24Share from "@vkontakte/icons/dist/24/share";
import Icon24Locate from "@vkontakte/icons/dist/24/locate";
import { block } from "bem-cn";
import "./style.css";

const cn = block("main");

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: "brand"
    };
  }

  render() {
    return (
      <View activePanel={this.state.activePanel}>
        <Panel id="brand">
          <PanelHeader>Статистика Вконтакте</PanelHeader>
          <Div>
            <Button size="xl" level="commerce">
              Добавить группу/сообщество
            </Button>
          </Div>
          <Group title={"Мои группы"}>
            <List>
              <Cell
                before={<Avatar size={72} />}
                description="Статистика за сутки"
                size="l"
                bottomContent={
                  <div>
                    <ul className={cn("list").mix("list-group")}>
                      <li className={"list-group__item"} title={"Подписалось"}>
                        <Icon24UserAdded fill={"#99b1c6"} />
                        <span className={"list-group__item-text"}>5</span>
                      </li>
                      <li className={"list-group__item"} title={"Отписалось"}>
                        <Icon24UserOutgoing fill={"#99b1c6"} />
                        <span className={"list-group__item-text"}>5</span>
                      </li>
                      <li className={"list-group__item"} title={"Комментариев"}>
                        <Icon24Comment fill={"#99b1c6"} />
                        <span className={"list-group__item-text"}>5</span>
                      </li>
                      <li className={"list-group__item"} title={"Лайков"}>
                        <Icon24Like fill={"#99b1c6"} />
                        <span className={"list-group__item-text"}>5</span>
                      </li>
                      <li className={"list-group__item"} title={"Репостов"}>
                        <Icon24Share fill={"#99b1c6"} />
                        <span className={"list-group__item-text"}>5</span>
                      </li>
                      <li className={"list-group__item"} title={"Упоминаний"}>
                        <Icon24Locate fill={"#99b1c6"} />
                        <span className={"list-group__item-text"}>5</span>
                      </li>
                    </ul>
                    <Button size="m">Подробнее</Button>
                  </div>
                }
              >
                Название группы
              </Cell>
              <Cell
                before={<Avatar size={72} />}
                description="Статистика за сутки"
                size="l"
                bottomContent={
                  <div>
                    <ul className={cn("list").mix("list-group")}>
                      <li className={"list-group__item"} title={"Подписалось"}>
                        <Icon24UserAdded fill={"#99b1c6"} />
                        <span className={"list-group__item-text"}>5</span>
                      </li>
                      <li className={"list-group__item"} title={"Отписалось"}>
                        <Icon24UserOutgoing fill={"#99b1c6"} />
                        <span className={"list-group__item-text"}>5</span>
                      </li>
                      <li className={"list-group__item"} title={"Комментариев"}>
                        <Icon24Comment fill={"#99b1c6"} />
                        <span className={"list-group__item-text"}>5</span>
                      </li>
                      <li className={"list-group__item"} title={"Лайков"}>
                        <Icon24Like fill={"#99b1c6"} />
                        <span className={"list-group__item-text"}>5</span>
                      </li>
                      <li className={"list-group__item"} title={"Репостов"}>
                        <Icon24Share fill={"#99b1c6"} />
                        <span className={"list-group__item-text"}>5</span>
                      </li>
                      <li className={"list-group__item"} title={"Упоминаний"}>
                        <Icon24Locate fill={"#99b1c6"} />
                        <span className={"list-group__item-text"}>5</span>
                      </li>
                    </ul>
                    <Button size="m">Подробнее</Button>
                  </div>
                }
              >
                Название группы
              </Cell>
              <Cell
                before={<Avatar size={72} />}
                description="Статистика за сутки"
                size="l"
                bottomContent={
                  <div>
                    <ul className={cn("list").mix("list-group")}>
                      <li className={"list-group__item"} title={"Подписалось"}>
                        <Icon24UserAdded fill={"#99b1c6"} />
                        <span className={"list-group__item-text"}>5</span>
                      </li>
                      <li className={"list-group__item"} title={"Отписалось"}>
                        <Icon24UserOutgoing fill={"#99b1c6"} />
                        <span className={"list-group__item-text"}>5</span>
                      </li>
                      <li className={"list-group__item"} title={"Комментариев"}>
                        <Icon24Comment fill={"#99b1c6"} />
                        <span className={"list-group__item-text"}>5</span>
                      </li>
                      <li className={"list-group__item"} title={"Лайков"}>
                        <Icon24Like fill={"#99b1c6"} />
                        <span className={"list-group__item-text"}>5</span>
                      </li>
                      <li className={"list-group__item"} title={"Репостов"}>
                        <Icon24Share fill={"#99b1c6"} />
                        <span className={"list-group__item-text"}>5</span>
                      </li>
                      <li className={"list-group__item"} title={"Упоминаний"}>
                        <Icon24Locate fill={"#99b1c6"} />
                        <span className={"list-group__item-text"}>5</span>
                      </li>
                    </ul>
                    <Button size="m">Подробнее</Button>
                  </div>
                }
              >
                Название группы
              </Cell>
            </List>
          </Group>
        </Panel>
      </View>
    );
  }
}
