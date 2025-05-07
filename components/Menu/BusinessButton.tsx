import { Menu, UnstyledButton, Text } from '@mantine/core';
import {
	IconUserCog,
  IconSearch,
  IconPhoto,
  IconSettingsCog,
  IconCashRegister,
  IconSubtask,
  IconRosetteDiscount,
  IconBuildingWarehouse,
  IconTir, 
  IconApi, 
} from '@tabler/icons-react';
import classes from './MenuButton.module.css';

export function BusinessButton() {
  return (
	<>
    <Menu shadow="md" width={200} transitionProps={{ transition: 'rotate-right', duration: 150 }} trigger="click-hover">
      <Menu.Target>
        <UnstyledButton  className={classes.control}>Бизнесу</UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Комплексный подход</Menu.Label>
        <Menu.Item leftSection={<IconUserCog size={14} />} component="a" href="/">
          CRM системы
        </Menu.Item>
        <Menu.Item leftSection={<IconSettingsCog size={14} />}>
          ERP системы
        </Menu.Item>
	   <Menu.Label>Модульный подход</Menu.Label>

        <Menu.Item leftSection={<IconCashRegister size={14} />}>
          Кассы
        </Menu.Item>

        <Menu.Item leftSection={<IconSubtask size={14} />}>
          Задачи и KPI
        </Menu.Item>

        <Menu.Item leftSection={<IconBuildingWarehouse size={14} />}>
          Склад
        </Menu.Item>

        <Menu.Item
          leftSection={<IconTir size={14} />}
          rightSection={
            <Text size="xs" c="dimmed">
              🔥
            </Text>
          }
        >
          Логистика
        </Menu.Item>


        <Menu.Item leftSection={<IconApi size={14} />}>
          API интеграции
        </Menu.Item>



        <Menu.Divider />

        <Menu.Item
          color="red"
          leftSection={<IconRosetteDiscount size={14} />}
        >
          Акция месяца
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>

   </>
  );
}