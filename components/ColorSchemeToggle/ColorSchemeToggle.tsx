'use client';

import {Switch, useMantineColorScheme } from '@mantine/core';

import { IconSun, IconMoonStars } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
//     <Group justify="center" mt="xl">
//       <Button onClick={() => setColorScheme('light')}>Light</Button>
//       <Button onClick={() => setColorScheme('dark')}>Dark</Button>
//       <Button onClick={() => setColorScheme('auto')}>Auto</Button>
//     </Group>
        <Switch
	//    onClick={(v) => re(v)}
	checked={colorScheme === 'dark'}
	onChange={(event) => setColorScheme(event.currentTarget.checked ? 'dark' : 'light')}

	   size="md"
	   color="dark.4"
	   onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />}
	   offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)" />}
	 />
  );
}
