import { IconPhone } from '@tabler/icons-react';
import { ActionIcon, Affix, Text } from '@mantine/core';

export function FloatingButton() {
  return (
    <>
      {/* <Text>Floating action button is at the bottom of the screen</Text> */}
      <Affix position={{ bottom: 40, right: 40 }}>
        <ActionIcon color="blue" radius="xl" size={40}>
          <IconPhone stroke={1.5} size={20} />
        </ActionIcon>
      </Affix>
    </>
  );
}