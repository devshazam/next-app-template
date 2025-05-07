import { Menu, UnstyledButton, Text } from '@mantine/core';
import {
	IconTargetArrow,
  IconSearch,
  IconId,
  IconBox,
  IconRosetteDiscount,
  IconSeo,
  IconBasketDiscount,
} from '@tabler/icons-react';
import classes from './MenuButton.module.css';

export function SiteButton() {
  return (
	<>
    <Menu shadow="md" width={200} transitionProps={{ transition: 'rotate-right', duration: 150 }} trigger="click-hover">
      <Menu.Target>
        <UnstyledButton  className={classes.control}>Сайты</UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Разработка сайтов</Menu.Label>
        <Menu.Item leftSection={<IconBasketDiscount size={14} />} component="a" href="/">
          Сайт Магазин
        </Menu.Item>

        <Menu.Item leftSection={<IconBox size={14} />}>
          Промо-Сайт
        </Menu.Item>

        <Menu.Item leftSection={<IconId size={14} />}>
          Сайт визитка
        </Menu.Item>
        <Menu.Item
          leftSection={<IconTargetArrow size={14} />}
          rightSection={
            <Text size="xs" c="dimmed">
          	🔥
            </Text>
          }
        >
          Лендинг
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Оптимизация</Menu.Label>
        <Menu.Item
          leftSection={<IconSeo size={14} />}
        >
          SEO оптимизация
        </Menu.Item>
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