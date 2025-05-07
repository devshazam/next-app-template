import { Menu, UnstyledButton, Text } from '@mantine/core';
import {
	IconRobot,
  IconSearch,
  IconBrandApple,
  IconBrandAndroid,
  IconRecharging,
  IconBrandWindows,
} from '@tabler/icons-react';
import classes from './MenuButton.module.css';

export function AppButton() {
  return (
	<>
    <Menu shadow="md" width={200}  transitionProps={{ transition: 'rotate-right', duration: 150 }} trigger="click-hover">
      <Menu.Target>
        <UnstyledButton className={classes.control}>App</UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Веб приложения</Menu.Label>
        <Menu.Item leftSection={<IconRobot size={14} />}  component="a" href="/">
          Web Боты
        </Menu.Item>
	   <Menu.Label>Мобильные приложения</Menu.Label>

        <Menu.Item leftSection={<IconBrandAndroid size={14} />}>
          Android App
        </Menu.Item>
        <Menu.Item leftSection={<IconBrandApple size={14} />}>
          IOS App
        </Menu.Item>

	   <Menu.Label>Программы для ПК</Menu.Label>
        <Menu.Item
          leftSection={<IconBrandWindows size={14} />}
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          для Windows
        </Menu.Item>
        <Menu.Item leftSection={<IconRecharging size={14} />}>
          Arduino
        </Menu.Item>

        <Menu.Divider />

      </Menu.Dropdown>
    </Menu>

   </>
  );
}