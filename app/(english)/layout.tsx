"use client"

import { AppShell, Burger, Group, UnstyledButton, Container, Avatar, Tooltip, Text  } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './MobileNavbar.module.css';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { MainMenu } from './components/MainMenu';


export default function RootLayout({ children }: { children: any }) {
	const [opened, { toggle }] = useDisclosure();

  return (
	<AppShell
	// zIndex={200}
	withBorder={false}
	// transitionDuration={500}
     //  transitionTimingFunction="ease"
		header={{ height: 60, }}
		// navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
		footer={{ height: 60 }}
		padding="md"
   >

	<AppShell.Header zIndex={200} pt={2}>
		<Container>
			<Group h="100%" px="md">
				{/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" /> */}
				<Group justify="space-between" style={{ flex: 1 }}>
				{/* <MantineLogo size={30} /> */}
					<Group gap="sm" justify="space-between">
						<Avatar src="/logo.webp" alt="it's me"  size="md" />
						<Text  size="xl" fw={700}>AppAi</Text>
					</Group>

					<Group ml="xl" gap={0} visibleFrom="sm">
						<MainMenu />
						{/* <UnstyledButton className={classes.control}>Сайты</UnstyledButton>
						<UnstyledButton className={classes.control}>App</UnstyledButton>
						<UnstyledButton className={classes.control}>Бизнесу</UnstyledButton>
						<UnstyledButton className={classes.control}>Контакты</UnstyledButton> */}
					</Group>
					<Group ml="xl" gap={8} >
						<ColorSchemeToggle />
						<Avatar.Group>
							<Tooltip label="English" withArrow>
								<Avatar src="/english.png" alt="it's me"  size="md" />
							</Tooltip>
								<Avatar src="/rus.png" alt="it's me"  size="md" />
							<Tooltip label="Español" withArrow>
								<Avatar src="/spanish.png" alt="it's me"  size="md" />
							</Tooltip>
						</Avatar.Group>
					</Group>
				</Group>
			</Group>
			<Group gap={0}  hiddenFrom="sm"  justify="space-between">
						<UnstyledButton className={classes.control}>Home</UnstyledButton>
						<UnstyledButton className={classes.control}>Blog</UnstyledButton>
						<UnstyledButton className={classes.control}>Contacts</UnstyledButton>
						<UnstyledButton className={classes.control}>Support</UnstyledButton>
					</Group>
	   </Container>
      </AppShell.Header>

	 {/* <AppShell.Navbar py="md" px={4}  zIndex={100}>
        <UnstyledButton className={classes.control}>Home</UnstyledButton>
        <UnstyledButton className={classes.control}>Blog</UnstyledButton>
        <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
        <UnstyledButton className={classes.control}>Support</UnstyledButton>
      </AppShell.Navbar> */}

	<AppShell.Main >
		<Container>
			{children}
		</Container>
	</AppShell.Main>

	<AppShell.Footer p="md" zIndex={-100}>
		<Container>
			Footerv odfgijpoijiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
		</Container>
	</AppShell.Footer>

   </AppShell>
  );
}
