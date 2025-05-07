"use client"

import { AppShell, Burger, Group, UnstyledButton, Container, Avatar, Tooltip, Text  } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './MobileNavbar.module.css';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

import { AppButton  } from '@/components/Menu/AppButton';
import { SiteButton } from '@/components/Menu/SiteButton';
import { BusinessButton } from '@/components/Menu/BusinessButton';


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
		// footer={{ height: 60 }}
		padding="md"
   >

	<AppShell.Header zIndex={200} pt={2}>
		<Container>
			<Group h="100%" px="md">
				{/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" /> */}
				<Group justify="space-between" style={{ flex: 1 }}>
				{/* <MantineLogo size={30} /> */}
					<Group gap="xs" justify="space-between">
						<Avatar src="/logo.webp" alt="it's me"  size="md" component="a" href="/"/>
						<Text  size="xl" fw={600}  component="a" href="/">AiDev</Text>
					</Group>

					<Group ml="xl" gap={8} visibleFrom="sm">
						<SiteButton />
						<AppButton />
						<BusinessButton />
						<UnstyledButton className={classes.control}>Контакты</UnstyledButton> 
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

				<SiteButton />
				<AppButton />
				<BusinessButton />
				<UnstyledButton className={classes.control}>Контакты</UnstyledButton> 
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

	{/* <AppShell.Footer p="md" zIndex={-100}>
		<Container>
			Footerv odfgijpoijiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
		</Container>
	</AppShell.Footer> */}

   </AppShell>
  );
}
